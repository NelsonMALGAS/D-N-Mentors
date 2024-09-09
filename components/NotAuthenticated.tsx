"use client";

import Link from "next/link";
import { FaLock } from "react-icons/fa";

const NotAuthenticated = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-900">
      <div className="max-w-xl p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl text-center">
        <div className="flex justify-center mb-6">
          <FaLock className="text-5xl text-red-500" />
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-gray-100">Access Denied</h2>
        <p className="mb-8 text-gray-400 text-xl">You need to log in to view this page.</p>
        <Link href="/login">
          <span className="inline-flex items-center px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 cursor-pointer text-lg">
            <FaLock className="mr-2" />
            Go to Login Page
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NotAuthenticated;
