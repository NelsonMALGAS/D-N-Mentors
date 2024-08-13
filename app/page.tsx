"use client";

import PwaModalClient from "../components/PwaClient";

export default function Home() {

 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-cyan-500">
        Doctor & Nelson Tutor Mentor Organization
      </h1>
      <PwaModalClient />
    </main>
  );
}
