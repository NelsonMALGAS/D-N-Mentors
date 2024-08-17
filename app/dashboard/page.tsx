"use client";

import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import useAuth from "@/hooks/useAuth";

const DashboardPage = () => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="text-center min-h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-blue-600">Please Log In</h1>
        <p className="mt-4 text-gray-600">
          You need to log in to access this page.
        </p>
      </div>
    );
  }

  if (!isAdmin(user.email)) {
    return (
      <div className="text-center min-h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-600">Access Denied</h1>
        <p className="mt-4 text-gray-600">
          You do not have permission to view this page.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 min-h-full">
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
