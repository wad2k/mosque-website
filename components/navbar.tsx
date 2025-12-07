"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Timetable", "/timetable"],
    ["Events", "/events"],
    ["Education", "/education"],
    ["Donations", "/donations"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="w-full bg-green-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-extrabold text-xl">
          SMEWT
        </Link>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-yellow-400">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col bg-green-900 text-center pb-4">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-green-700 hover:bg-green-700"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
