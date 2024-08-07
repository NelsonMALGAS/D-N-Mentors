"use client"
import PwaModal from "@/components/PwaModal";
import { useEffect, useState } from "react";

export interface PwaModalProps {
  onInstall: () => void;
  onClose: () => void;
  show: boolean;
}

export default function PwaModalClient() {
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
    <main className="p-24">
      <PwaModal onInstall={handleInstall} onClose={handleClose} show={show} />
    </main>
  );
}
