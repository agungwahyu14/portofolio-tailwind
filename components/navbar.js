// components/Navbar.
"use client";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "./darkmode/DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h2 className="text-lg font-medium text-black dark:text-white">
              aagungwwahyu
            </h2>
          </Link>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 ${!isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
              <svg
                className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              href="#home"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-900 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              href="#education"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-900 md:mx-4 md:my-0"
            >
              Education
            </Link>
            <Link
              href="#works"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-900 md:mx-4 md:my-0"
            >
              Works
            </Link>
            <Link
              href="#skills"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-900 md:mx-4 md:my-0"
            >
              Skills
            </Link>

            <Link
              href="#contact"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-900 md:mx-4 md:my-0"
            >
              Contact
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
