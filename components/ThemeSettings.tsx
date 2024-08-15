"use client";

import { useTheme } from "@/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSettings = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Theme Settings
      </h2>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {theme === "dark" ? (
            <>
              <FiSun className="h-6 w-6" />
            </>
          ) : (
            <>
              <FiMoon className="h-6 w-6" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeSettings;
