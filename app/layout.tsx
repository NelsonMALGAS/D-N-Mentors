import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css'; 
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Doctor & Nelson Tutor Mentor Organization",
  description:
    "Kelebogile Doctor Modisane Tutor and Mentor Organization provides a wide range of modules to cater to the diverse needs of students. These modules cover subjects such as business mathematics, finance, accounting, economics, public administration, project management, and more. We offer services including KCQs (Key Concept Questions), exams preparation, assignments assistance, project guidance, private classes, and homework support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {" "}
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
      </body>
    </html>
  );
}
