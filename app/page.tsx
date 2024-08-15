"use client";

import NotAuthenticated from "@/components/NotAuthenticated";
import PwaModalClient from "../components/PwaClient";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/Loading";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const { user, loading } = useAuth();

  if (!user && !loading) {
    return <NotAuthenticated />;
  }

  if (!user && loading) {
    return <Loading />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPage />
      <PwaModalClient />
    </main>
  );
}
