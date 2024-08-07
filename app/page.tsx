"use client";

import PwaModal from "@/components/PwaModal";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface PwaModalProps {
  onInstall: () => void;
  onClose: () => void;
  show: boolean;
}

export default function Home() {
  const [show, setShow] = useState(false);
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setPrompt(e);

      if (!window.matchMedia("(display-mode: standalone").matches) {
        setShow(true);
      }
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = () => {
    if (prompt) {
      prompt.prompt();

      prompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Accepted");
        } else {
          console.log("Cancelled");
        }
        setPrompt(null);
        setShow(false);
      });
    }
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-cyan-500">Doctor & Nelson Tutor Mentor Organization</h1>
      <PwaModal onInstall={handleInstall} onClose={handleClose} show={show} />
    </main>
  );
}
