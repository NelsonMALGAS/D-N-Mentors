import { useState, useEffect } from "react";
import { onAuthStateChanged, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
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
    }
  };

  const handleSignUp = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
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
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setError(null);
      setSuccess("Logout successful!");
    } catch (error) {
      console.error("Error during logout:", error);
      setError("Logout failed. Please try again.");
      setSuccess(null); 
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
    error,
    success,
  };
};

export default useAuth;
