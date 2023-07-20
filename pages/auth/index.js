"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import getDocument from "../../firebase/firestore/getData";
import addData from "../../firebase/firestore/addData";
import { LocationContext } from "../../context/LocationContext";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
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

    if (isSignUp) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateFirestoreUserState(userCredential.user);
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
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-3xl text-purple-600 mb-8">
          {isSignUp ? "Sign Up" : "Sign In"}
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
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-grow bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="flex-grow bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
            >
              {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="mt-8 bg-red-500 text-white p-2 w-full rounded hover:bg-red-600 transition-colors"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
