
import SignUp from "@/components/SignUp";
import PwaModalClient from "../components/PwaClient";
import LogIn from "@/components/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-cyan-500">Doctor & Nelson Tutor Mentor Organization</h1>
      <SignUp/>
      <LogIn/>
      <PwaModalClient />
    </main>
  );
}
