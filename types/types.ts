import { User } from "firebase/auth";
import { ComponentType, Dispatch, SetStateAction, SVGProps } from "react";

/**
 * Represents the configuration options for initializing Firebase.
 * 
 * @property {string} apiKey - The API key for your Firebase project.
 * @property {string} authDomain - The authentication domain for your Firebase project.
 * @property {string} projectId - The project ID for your Firebase project.
 * @property {string} storageBucket - The storage bucket for your Firebase project.
 * @property {string} messagingSenderId - The sender ID for Firebase Cloud Messaging.
 * @property {string} appId - The app ID for your Firebase project.
 * @property {string} [measurementId] - The optional measurement ID for Google Analytics.
 */
export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

/**
 * Represents a tab in the settings or navigation.
 * 
 * @property {string} name - The display name of the tab.
 * @property {string} key - The unique key used to identify the tab.
 */
export interface Tab {
  name: string;
  key: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>> 
}

/**
 * Represents a booking made by a user.
 * 
 * @property {string} id - The unique identifier for the booking.
 * @property {string} service - The name of the service being booked.
 * @property {string} name - The name of the user who made the booking.
 * @property {string} email - The email address of the user who made the booking.
 * @property {string} description - A description of the booking or service.
 * @property {{seconds: number}} createdAt - The timestamp when the booking was created.
 * @property {{seconds: number}} [dueDate] - The optional due date for the booking.
 * @property {string} status - The current status of the booking (e.g., pending, completed).
 */
export interface Booking {
  id: string;
  service: string;
  name: string;
  email: string;
  description: string;
  createdAt: { seconds: number };
  dueDate?: { seconds: number }; 
  status: string;
}

/**
 * Represents the result returned by the `useAuth` hook, including user authentication state and actions.
 * 
 * @property {User | null} user - The current authenticated user or null if not authenticated.
 * @property {string} email - The email address of the user for login or sign-up.
 * @property {Dispatch<SetStateAction<string>>} setEmail - A function to update the email state.
 * @property {string} password - The password for login or sign-up.
 * @property {Dispatch<SetStateAction<string>>} setPassword - A function to update the password state.
 * @property {() => Promise<void>} handleLogin - A function to handle user login.
 * @property {() => Promise<void>} handleSignUp - A function to handle user sign-up.
 * @property {() => Promise<void>} handleLogout - A function to handle user logout.
 * @property {(email: string | null) => email is string} isAdmin - A function to check if the user has admin privileges based on their email.
 * @property {string | null} error - The error message, if any, encountered during authentication.
 * @property {string | null} success - The success message, if any, after a successful operation.
 * @property {boolean} loading - A boolean indicating if an authentication operation is in progress.
 */
export interface UseAuthResult {
  user: User | null;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  handleLogin: () => Promise<void>;
  handleSignUp: () => Promise<void>;
  handleLogout: () => Promise<void>;
  isAdmin: (email: string | null) => email is string;
  error: string | null;
  success: string | null;
  loading: boolean;
}

export interface BookingData {
  service: string | null;
  name: string;
  email: string;
  dueDate: string;
  description: string;
}


export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  bookingData: BookingData | null;
}
