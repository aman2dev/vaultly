"use client";

import React from "react";
import { motion } from "motion/react";
import { FaUser } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi2";

export default function Navbar() {
  const navItems = [
    { name: "Features", active: true },
    { name: "How it Works", active: false },
    { name: "Family Sharing", active: false },
    { name: "Pricing", active: false },
    { name: "Security Magic", active: false },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full pt-6 px-4 flex justify-center sticky top-0 z-50 pointer-events-auto"
    >
      <nav className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-stone-200/60 px-4 py-2.5 flex items-center justify-between transition-shadow hover:shadow-[0_6px_30px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 pl-2 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20">
            <HiShieldCheck className="text-xl" />
          </div>
          <span className="font-bold text-xl tracking-tight text-stone-900 font-sans">
            Vaultly
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                item.active
                  ? "bg-[#5833EF] text-white shadow-sm shadow-indigo-500/30 font-semibold"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/70"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA & Profile */}
        <div className="flex items-center gap-2 pr-1">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#5833EF] hover:bg-[#4927d6] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-sm shadow-indigo-500/25 transition-colors cursor-pointer"
          >
            Get Vaultly Now
          </motion.button>
          
          <button
            aria-label="User Profile"
            className="w-9 h-9 rounded-full bg-[#5833EF] text-white flex items-center justify-center hover:opacity-95 transition-opacity shadow-sm cursor-pointer"
          >
            <FaUser className="text-xs" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
