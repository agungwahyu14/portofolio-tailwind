// components/darkmode/DarkModeProvider.js
"use client"; // Hanya untuk Next.js 13 dan di atasnya

import { createContext, useState, useContext, useEffect } from "react";

// Membuat konteks untuk Dark Mode
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Mengambil preferensi dark mode dari local storage jika ada
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Mengubah mode dark
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Hook untuk menggunakan DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);
