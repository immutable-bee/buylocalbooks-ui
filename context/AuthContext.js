import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "@/firebase/config";
import { createContext, useContext, useEffect, useState } from "react";
import getDocument from "../firebase/firestore/getData";

const auth = getAuth(app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [membership, setMembership] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const { result, error } = await getDocument("users", user.uid);
        if (error) {
          console.error("Failed to fetch user document:", error);
        } else if (result && result.exists()) {
          setMembership(result.data().membership || null);
        } else {
          setMembership(null);
        }
      } else {
        setUser(null);
        setMembership(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, membership }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
