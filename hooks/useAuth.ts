import { useState, useEffect } from "react";
import { onAuthStateChanged, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, firestore } from "../firebase/firebaseConfig";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmails, setAdminEmails] = useState<string[]>([]);

  useEffect(() => {
    const fetchAdminEmails = async () => {
      const adminEmails: string[] = [];
      const adminsSnapshot = await getDocs(collection(firestore, "admins"));
      adminsSnapshot.forEach((doc) => {
        const adminData = doc.data();
        if (adminData.email) {
          adminEmails.push(adminData.email);
        }
      });
      setAdminEmails(adminEmails);
    };

    fetchAdminEmails();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsAdmin(adminEmails.includes(user.email || ""));
        }
        setUser(user);
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const isAdmin = adminEmails.includes(user.email || "");
      await setDoc(doc(firestore, "users", user.uid), {
        email: user.email,
        isAdmin: isAdmin,
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

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setIsAdmin(userData.isAdmin || false);
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

  const handleLogout = async () => {
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
    isAdmin,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    handleLogout,
    error,
    success,
    loading,
  };
};

export default useAuth;
