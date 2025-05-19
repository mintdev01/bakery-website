import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-2 py-4 px-4 sm:px-10 bg-primary flex justify-between items-center relative z-20">
      {/* Logo */}
      <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden flex justify-center items-center">
        <img
          src="bakerylogo.png"
          alt="logo"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex gap-6 text-sm font-semibold">
        <a href="#hero" className="hover:underline">
          Home
        </a>
        <a href="#products" className="hover:underline">
          Menu
        </a>
        <a href="#about" className="hover:underline">
          About Us
        </a>
      </nav>

      {/* Hamburger for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary flex flex-col items-center gap-4 py-4 sm:hidden text-sm font-semibold border-t-2">
          <a href="#hero" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#products" onClick={() => setIsOpen(false)}>
            Menu
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About Us
          </a>
        </div>
      )}
    </header>
  );
}
