"use client";

import Link from "next/link";
import { FaLock } from "react-icons/fa";

const NotAuthenticated = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="max-w-sm p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <FaLock className="text-4xl text-red-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Access Denied</h2>
        <p className="mb-6 text-gray-400">You need to log in to view this page.</p>
        <Link href="/login">
          <span className="inline-flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 cursor-pointer">
            <FaLock className="mr-2" />
            Go to Login Page
          </span>
          {/* <span className="absolute inset-0 rounded-lg bg-blue-600 opacity-50 blur-sm transition-opacity group-hover:opacity-100"></span> */}
        </Link>
      </div>
    </div>
  );
};

export default NotAuthenticated;
