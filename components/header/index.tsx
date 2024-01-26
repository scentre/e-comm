import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 md:py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl  hover:text-indigo-500 active:text-indigo-700"
        aria-label="logo"
      >
        Teechy Stores
      </Link>

      <nav className="hidden gap-12 lg:flex">
        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Home
        </Link>

        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Shop
        </Link>
        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Services
        </Link>
      </nav>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Menu
      </button>
    </header>
  );
};

export default Header;
