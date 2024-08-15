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