import { useState, useEffect, useCallback } from "react";
import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, firestore } from "../firebase/firebaseConfig";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { UseAuthResult } from "@/types/types";

/**
 * Custom hook for managing authentication state and related actions.
 *
 * @returns {UseAuthResult} - The authentication state and functions for handling login, sign-up, and logout.
 */
const useAuth = (): UseAuthResult => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [adminEmails, setAdminEmails] = useState<string[]>([]);

  useEffect(() => {
    const fetchAdminEmails = async () => {
      const adminEmailsList: string[] = [];
      const adminsSnapshot = await getDocs(collection(firestore, "admins"));
      adminsSnapshot.forEach((doc) => {
        const adminData = doc.data();
        if (adminData.email) {
          adminEmailsList.push(adminData.email);
        }
      });
      setAdminEmails(adminEmailsList);
    };

    fetchAdminEmails();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(user);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const isAdmin = useCallback(
    (email: string | null): email is string => {
      return email !== null && adminEmails.includes(email);
    },
    [adminEmails]
  );

  const handleSignUp = async (): Promise<void> => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const isAdminFlag = adminEmails.includes(user.email || "");
      await setDoc(doc(firestore, "users", user.uid), {
        email: user.email,
        isAdmin: isAdminFlag,
      });
      setUser(user);
      setEmail("");
      setPassword("");
      setError(null);
      setSuccess("Sign up successful!");
    } catch (error) {
      console.error("Error during sign up:", error);
      setUser(null);
      setError("Sign up failed. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (): Promise<void> => {
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
      }
      setUser(user);
      setEmail("");
      setPassword("");
      setError(null);
      setSuccess("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      setUser(null);
      setError("Login failed. Please check your credentials.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async (): Promise<void> => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setError(null);
      setSuccess("Logout successful!");
    } catch (error) {
      console.error("Error during logout:", error);
      setError("Logout failed. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    handleLogout,
    isAdmin,
    error,
    success,
    loading,
  };
};

export default useAuth;



