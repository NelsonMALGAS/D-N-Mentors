"use client";

import { useState } from "react";
import { updateEmail } from "firebase/auth";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import Link from "next/link";

const UserProfile = () => {
  const { user, handleLogout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(user?.email || "");
  const [error, setError] = useState<string | null>(null);
  

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-semibold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">
            Please log in to view your profile.
          </p>
          <Link href="/login" className="text-blue-500 hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    if (!user) return;

    try {
      if (newEmail !== user.email) {
        await updateEmail(user, newEmail);
      }

      setEditing(false);
      setError(null);
    } catch (error) {
      setError("Error updating profile. Please try again.");
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <Image
          className="h-16 w-16 rounded-full"
          src={"https://via.placeholder.com/64x64.png?text=Profile"}
          alt="Profile Picture"
          width={64}
          height={64}
          priority
        />
        <div>
          <h2 className="text-2xl font-semibold">
            {user.displayName || "User"}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
        <button
          onClick={() => setEditing(!editing)}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>
      {editing && (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Edit Profile</h3>
          <input
            type="email"
            placeholder="New email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input type="file" className="mt-2" />
          <button
            onClick={handleSave}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
