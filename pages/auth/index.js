"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import getDocument from "../../firebase/firestore/getData";
import addData from "../../firebase/firestore/addData";
import { LocationContext } from "../../context/LocationContext";
import Image from "next/image";

// TODO
// Add forgot password/password reset email
// Add email verification

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotpass, setIsForgotPass] = useState(false);

  const { location } = useContext(LocationContext);

  const router = useRouter();

  const updateFirestoreUserState = async (user) => {
    const { result, error } = await getDocument("users", user.uid);

    if (!location.state) {
      console.log("No state data available in location context");
      return;
    }

    // Document exists, but 'state' field doesn't exist or is empty
    if (
      result.exists() &&
      (!result.data().state || result.data().state === "")
    ) {
      await addData("users", user.uid, { state: location.state });
    }

    // Document doesn't exist
    if (!result.exists()) {
      await addData("users", user.uid, { state: location.state });
    }

    if (error) {
      console.error(error);
    }
  };

  const handleForm = async (event) => {
    event.preventDefault();

    if (isForgotpass) {
      try {
        const resetPassword = await sendPasswordResetEmail(auth, email);
      } catch (err) {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log({ ErrorCode: errorCode, ErrorMessage: errorMessage });
      }
    } else {
      if (isSignUp) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          await updateFirestoreUserState(userCredential.user);
          await sendEmailVerification(auth.currentUser);
          console.log(userCredential.user);
          router.push("/profile");
        } catch (error) {
          console.log(error.code, error.message);
        }
      } else {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          await updateFirestoreUserState(userCredential.user);
          router.push("/profile");
          console.log(userCredential.user);
        } catch (error) {
          console.log(error.code, error.message);
        }
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      await updateFirestoreUserState(result.user);
      console.log(result.user);
      router.push("/profile");
    } catch (error) {
      console.log(error.code, error.message, error.customData?.email);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="sm:bg-white w-full sm:max-w-lg sm:shadow sm:p-8 p-4 rounded-lg">
        {isForgotpass && (
          <div
            className="pb-4 cursor-pointer"
            onClick={() => setIsForgotPass(!isForgotpass)}
          >
            <Image
              src="./images/icons/back-arrow.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
          </div>
        )}
        <h1 className="text-3xl font-semibold text-black mb-6">
          {isForgotpass ? "Reset Password" : isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form onSubmit={handleForm} className="space-y-5">
          <label className="block">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-lg"
            />
          </label>
          {!isForgotpass && (
            <label className="block">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-lg"
              />
            </label>
          )}
          {isSignUp && (
            <label className="block">
              Display Name:
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-lg"
              />
            </label>
          )}
          {!isSignUp && !isForgotpass && (
            <h6
              className="text-sm text-blb-blue !mt-2 text-right hover:underline cursor-pointer"
              onClick={() => setIsForgotPass(!isForgotpass)}
            >
              Forgot Password?
            </h6>
          )}
          <div className="flex !mt-6">
            <button
              type="submit"
              className="flex-grow bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isForgotpass
                ? "Reset Password"
                : isSignUp
                  ? "Sign Up"
                  : "Sign In"}
            </button>

          </div>
          <div className="flex justify-end !mt-3">
            {!isForgotpass && (
              <>
                <h6
                  className="text-sm text-gray-700"
                >
                  {isSignUp ? "Already have an account?" : "Don't have an account?"}
                </h6>&nbsp;
                <h6
                  className="text-sm text-blb-blue hover:underline cursor-pointer"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </h6>
              </>
            )}
          </div>

        </form>
        {!isForgotpass && (
          <>  <div class="relative py-2 mb-3 mt-0"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><label class="px-2 bg-white text-gray-500"> Or </label></div></div>

            <button
              onClick={handleGoogleSignIn}
              className=" bg-white text-black border border-gray-500 p-2 w-full rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sign In with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
