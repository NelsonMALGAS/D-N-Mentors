import { User } from "firebase/auth";

export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
  }

export interface Tab {
  name: string;
  key: string;
}

export interface Booking {
  id: string;
  service: string;
  name: string;
  email: string;
  description: string;
  createdAt: { seconds: number };
  dueDate?: { seconds: number }; 
  status : string
}

export interface UseAuthResult {
  user: User | null;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<void>;
  handleSignUp: () => Promise<void>;
  handleLogout: () => Promise<void>;
  isAdmin: (email: string | null) => email is string;
  error: string | null;
  success: string | null;
  loading: boolean;
}