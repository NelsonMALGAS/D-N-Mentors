"use client"

import Link from "next/link";

const NotAuthenticated = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="max-w-sm p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold mb-4">You are not logged in</h2>
        <p className="mb-4">Please log in to access this page.</p>
        <Link
          href="/login"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  );
};

export default NotAuthenticated;
