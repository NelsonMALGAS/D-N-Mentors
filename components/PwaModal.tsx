"use client";

import { PwaModalProps } from "./PwaClient";

const PwaModal: React.FC<PwaModalProps> = ({ onInstall, onClose, show }) => {
  const blurBackground = show ? "backdrop-blur" : "";

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-96 p-4 rounded-lg shadow-lg relative z-10">
          <h2 className="text-lg font-semibold mb-2 text-black">Install the App</h2>
          <p className="text-sm mb-4 text-black">
            Click on the button below to install the app on your device
          </p>
          <div>
            <button
              onClick={onInstall}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            >
              Install PWA
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className={`fixed inset-0 bg-gray-900 opacity-80 ${blurBackground}`}></div>
      </div>
    </>
  );
};

export default PwaModal;
