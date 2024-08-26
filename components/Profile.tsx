"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import Link from "next/link";
import { firestore, storage } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Modal from "react-modal";
import Loading from "./Loading";
import { FaChevronDown } from "react-icons/fa";
import Uploading from "./Uploading";

const UserProfile = () => {
  const { user, handleLogout, loading } = useAuth();
  const [editing, setEditing] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [newBio, setNewBio] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ProfileLoading, setProfileLoading] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user || profileFetched) return;

      try {
        // Fetch user's bio from Firestore
        const userDoc = doc(firestore, "bios", user.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setNewBio(docSnap.data().bio || "");
        }

        // Fetch profile picture URL from Firebase Storage
        if (user.photoURL) {
          setProfilePicture(user.photoURL);
        } else {
          // If no photoURL in user object, try to get it from storage
          const storageRef = ref(
            storage,
            `profile/${user.uid}/profile-picture`
          );
          try {
            const url = await getDownloadURL(storageRef);
            setProfilePicture(url);
          } catch (err) {
            console.error("Error fetching profile picture URL:", err);
            setProfilePicture("https://via.placeholder.com/128x128.png?text=Profile");
          }
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setProfileFetched(true);
      }
    };

    fetchUserData();
  }, [user, profileFetched]);

  const handleSave = async () => {
    if (!user) return;

    setProfileLoading(true);
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
      setProfileLoading(false);
    }
  };

  const openBioModal = () => {
    setIsBioModalOpen(true);
  };

  const closeBioModal = () => {
    setIsBioModalOpen(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !user) return;

    setUploading(true);
    const storageRef = ref(
      storage,
      `profile/${user.uid}/profile-picture`
    );

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await updateProfile(user, { photoURL: url });
      setProfilePicture(url);
      setFile(null);
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      setError("Error uploading profile picture. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleEditClick = () => {
    setNewDisplayName(user?.displayName || "");
    setEditing(!editing);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800 p-6">
        <div className="max-w-md w-full p-8 bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-semibold mb-6 text-white dark:text-gray-100">
            Access Denied
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Please log in to view your profile.
          </p>
          <Link
            href="/login"
            className="text-blue-500 hover:underline dark:text-blue-300 text-lg"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  // Slice the bio if it exceeds 20 characters
  const bioDisplay = newBio.length > 20 ? newBio.slice(0, 20) + "..." : newBio;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-0">
      <div className="flex flex-col items-center space-y-6 mb-8 bg-gray-800 p-12 rounded-md">
        <div className="relative">
          <Image
            className="h-24 w-24 rounded-full border-4 border-gray-300 dark:border-gray-700 object-cover"
            src={
              profilePicture ||
              "https://via.placeholder.com/128x128.png?text=Profile"
            }
            alt="Profile Picture"
            width={128}
            height={128}
            priority
          />
          <label
            htmlFor="profilePicture"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 5l-7 7 7 7-7-7z"
              />
            </svg>
            <input
              id="profilePicture"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-white mb-1">
            {user.displayName || "User"}
          </h2>
          <p className="text-gray-100 dark:text-gray-300 text-lg">
            {user.email}
          </p>
          {newBio && (
            <p
              className="text-gray-600 dark:text-gray-300 text-lg mt-2 cursor-pointer flex items-center space-x-2 border border-gray-500 dark:border-gray-700 p-2 rounded-md"
              onClick={openBioModal}
            >
              {bioDisplay}
              <FaChevronDown className="text-gray-400 dark:text-gray-500 ml-2" />
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
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>
      {editing && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-100">
            Edit Profile
          </h3>
          <input
            type="text"
            placeholder="New display name"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full mb-4"
          />
          <textarea
            placeholder="New bio"
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full mb-4"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Save
          </button>
        </div>
      )}
      <Modal
        isOpen={isBioModalOpen}
        onRequestClose={closeBioModal}
        contentLabel="Bio Modal"
        className="bg-gray-800 text-gray-100 p-4 rounded-md mt-36 mx-2"
      >
        <h2 className="text-xl font-semibold mb-4">Bio</h2>
        <p>{newBio}</p>
        <button
          onClick={closeBioModal}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Close
        </button>
      </Modal>
      <div className="flex flex-col items-center mt-6">
        
        {file && !uploading && (
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        )}
      </div>
      {uploading ? <Uploading/> : ""}
    </div>
  );
};

export default UserProfile;
