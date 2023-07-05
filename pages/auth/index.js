"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useState } from "react";
import { useRouter } from "next/router";

//
/*
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  //


  //
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  //

  //
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  //

  const googleProvider = new GoogleAuthProvider();

  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
*/

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    if (isSignUp) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
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
