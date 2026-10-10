"use client";

import React from "react";
import { motion } from "motion/react";
import {
  FaBolt,
  FaStar,
  FaEyeSlash,
  FaShieldHalved,
  FaClapperboard,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import VaultIllustration from "./VaultIllustration";

export default function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headline & Action */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start gap-6 text-left"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 border border-stone-200/80 rounded-full px-4 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-sm">
            <HiSparkles className="text-amber-400 text-xs" />
            <span className="text-stone-700 text-xs sm:text-sm font-medium tracking-tight">
              Goodbye password panic, hello peace of mind
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
            Password stress? <br />
            <span className="text-[#5833EF]">Not anymore</span>
            <span className="text-[#A26E4A]">.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
            Vaultly remembers every password, fills them in a single tap, and keeps
            your entire family safe — all wrapped in a warm, cozy digital sanctuary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">
            {/* Primary Gradient Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#5330EC] via-[#7B46F6] to-[#F1735B] text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3.5 rounded-full shadow-[0_8px_24px_rgba(83,48,236,0.32)] hover:shadow-[0_12px_28px_rgba(83,48,236,0.42)] transition-all cursor-pointer"
            >
              <HiSparkles className="text-xs text-amber-200" />
              <span>Get Vaultly Now — It&apos;s Free</span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white border border-stone-200 text-stone-700 text-sm sm:text-base font-semibold px-5 sm:px-6 py-3.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-all cursor-pointer"
            >
              <span>See How It Works</span>
              <FaClapperboard className="text-stone-500 text-xs" />
            </motion.button>
          </div>

          {/* Social Proof & Rating */}
          <div className="flex items-center gap-3 pt-4">
            {/* Avatar Stack with cute friendly pastel circles */}
            <div className="flex -space-x-2 overflow-hidden">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 ring-2 ring-white text-xs shadow-sm">
                💡
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 ring-2 ring-white text-xs shadow-sm">
                🧸
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 ring-2 ring-white text-xs shadow-sm">
                🍑
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 ring-2 ring-white text-xs shadow-sm">
                🌱
              </span>
            </div>

            {/* Stars & Text */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-600 font-medium">
              <div className="flex text-amber-500 text-xs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="ml-1 text-stone-700">
                Loved by <strong className="font-bold text-stone-900">450,000+</strong> happy humans &amp; families
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual Container & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          {/* Main Rounded Stage Card */}
          <div className="relative w-full rounded-[36px] bg-white/70 border border-stone-200/70 p-4 sm:p-7 shadow-[0_24px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm overflow-visible">
            
            {/* The Vault Artwork (Image 2) */}
            <VaultIllustration />

            {/* Top-Left Floating Badge: AUTOFILL IN 0.2s */}
            <motion.div
              animate={{
                y: [-4, 5, -4],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-stone-100 rounded-2xl px-4 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center gap-3 z-30"
            >
              <div className="w-8 h-8 rounded-full bg-amber-100/90 text-amber-600 flex items-center justify-center">
                <FaBolt className="text-xs" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-stone-400 tracking-wider">
                  AUTOFILL IN
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#5833EF] mt-0.5">
                  0.2 seconds
                </span>
              </div>
            </motion.div>

            {/* Middle-Right Floating Badge: Military Grade Cozy Envelope */}
            <motion.div
              animate={{
                y: [5, -5, 5],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-8 bg-white/95 backdrop-blur-md border border-stone-100 rounded-2xl px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center gap-2.5 z-30"
            >
              <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
                <FaShieldHalved className="text-xs" />
              </div>
              <div className="flex flex-col leading-none pr-1">
                <span className="text-xs font-bold text-stone-800">
                  Military Grade
                </span>
                <span className="text-[10px] text-stone-400 font-medium mt-0.5">
                  Cozy Envelope
                </span>
              </div>
            </motion.div>

            {/* Bottom Floating Badge: Zero-Knowledge Magic */}
            <motion.div
              animate={{
                y: [-3, 4, -3],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute -bottom-4 left-6 sm:left-12 bg-white/95 backdrop-blur-md border border-stone-100 rounded-full px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center gap-2 z-30"
            >
              <div className="w-6 h-6 rounded-full bg-violet-100 text-[#5833EF] flex items-center justify-center">
                <FaEyeSlash className="text-xs" />
              </div>
              <span className="text-xs font-bold text-stone-800">
                Zero-Knowledge Magic
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
