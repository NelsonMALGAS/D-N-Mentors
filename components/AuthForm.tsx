"use client";

import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const AuthForm = ({ mode }: { mode: "login" | "signup" }) => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignUp, error, success } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }

    if (success) {
      toast.success(success as string);
      router.push("/");
    }
  }, [error, success, router]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      if (mode === "login") {
        await handleLogin();
      } else if (mode === "signup") {
        await handleSignUp();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">{mode === "login" ? "Login" : "Sign Up"}</h2>
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full mb-4 px-4 py-3 border border-gray-700 rounded bg-gray-900 text-white placeholder-gray-400"
        />
        
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="block w-full px-4 py-3 border border-gray-700 rounded bg-gray-900 text-white placeholder-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
          >
            {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
          </button>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
