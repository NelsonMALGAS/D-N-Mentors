
"use client";

import { useState , FormEvent } from "react";
import { signUp } from "../lib/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState<string | null>(null)

  const handleSignUp = async (e:FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      alert("Sign up successful!");
    } catch (error) {
     if(error instanceof Error){
        alert(error.message);
        setError(error.message)
     }
    }
  };

  return (
    <form onSubmit={handleSignUp}>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
