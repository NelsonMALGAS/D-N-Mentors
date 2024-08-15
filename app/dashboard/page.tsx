"use client";

import Dashboard from "@/components/Dashboard";
import useAuth from "@/hooks/useAuth";

const DashboardPage = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div className="">
    
        {user ? (
          isAdmin(user.email) ? (
            <Dashboard />
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-red-600">Access Denied</h1>
              <p className="mt-4 text-gray-600">
                You do not have permission to view this page.
              </p>
            </div>
          )
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-blue-600">Please Log In</h1>
            <p className="mt-4 text-gray-600">
              You need to log in to access this page.
            </p>
          </div>
        )}
      </div>
  );
};

export default DashboardPage;
