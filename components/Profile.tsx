"use client";

import { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import Link from "next/link";
import { firestore } from "../firebase/firebaseConfig"; 
import Modal from 'react-modal';

// Set the app element for accessibility purposes
// Modal.setAppElement('#__next');

const UserProfile = () => {
  const { user, handleLogout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [newBio, setNewBio] = useState(""); 
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const userDoc = doc(firestore, "bios", user.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setNewBio(docSnap.data().bio || ""); 
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    
    fetchUserData();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // Update user profile
      if (newDisplayName !== user.displayName) {
        await updateProfile(user, { displayName: newDisplayName });
      }

      // Save bio to Firestore
      const bioDoc = doc(firestore, "bios", user.uid);
      await setDoc(bioDoc, { bio: newBio }, { merge: true });

      setEditing(false);
      setError(null);
    } catch (error) {
      setError("Error updating profile. Please try again.");
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const openBioModal = () => {
    setIsBioModalOpen(true);
  };

  const closeBioModal = () => {
    setIsBioModalOpen(false);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Access Denied</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Please log in to view your profile.
          </p>
          <Link href="/login" className="text-blue-500 hover:underline dark:text-blue-300 text-lg">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // Slice the bio if it exceeds 70 characters
  const bioDisplay = newBio.length > 20 ? newBio.slice(0, 20) + "..." : newBio;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="flex items-center space-x-6 mb-8">
        <div className="relative">
          <Image
            className="h-24 w-24 rounded-full border-4 border-gray-300 dark:border-gray-700"
            src={"https://via.placeholder.com/128x128.png?text=Profile"}
            alt="Profile Picture"
            width={128}
            height={128}
            priority
          />
          <button
            onClick={() => setEditing(!editing)}
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 5l-7 7 7 7 7-7-7-7z" />
            </svg>
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
            {user.displayName || "User"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">{user.email}</p>
          {newBio && (
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-2 cursor-pointer" onClick={openBioModal}>
              {bioDisplay}
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Logout
        </button>
        <button
          onClick={() => setEditing(!editing)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>
      {editing && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-100">Edit Profile</h3>
          <input
            type="text"
            placeholder="New display name"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            placeholder="New bio"
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
          {error && <p className="mt-4 text-red-500 dark:text-red-400 text-center">{error}</p>}
        </div>
      )}
      <Modal
        isOpen={isBioModalOpen}
        onRequestClose={closeBioModal}
        contentLabel="Bio Modal"
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-100">Full Bio</h3>
        <p className="text-gray-800 dark:text-gray-300">{newBio}</p>
        <button
          onClick={closeBioModal}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mt-4"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default UserProfile;
