
"use client";

import { useState } from "react";
import { logIn } from "../lib/auth";
import { useRouter} from "next/navigation"

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert("Log in successful!");
      router.push("/")
    } catch (error) {
      if(error instanceof Error){
        alert(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
