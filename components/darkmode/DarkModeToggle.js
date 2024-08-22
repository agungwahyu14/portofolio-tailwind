// components/darkmode/DarkModeToggle.js
import React from "react";
import { useDarkMode } from "./DarkModeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className="ml-2 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FaSun className="w-6 h-6" />
      ) : (
        <FaMoon className="w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
