"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { FaKey, FaLock, FaFingerprint, FaStar } from "react-icons/fa6";
import { HiSparkles, HiShieldCheck } from "react-icons/hi2";

export default function VaultIllustration() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[460px] flex items-center justify-center select-none overflow-visible">
      {/* If user provided the image in public/vault-hero.png, show it with smooth fallback */}
      {!imgError ? (
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img
            src="/vault-hero.png"
            alt="Vaultly Secure Vault"
            className="w-full max-w-[480px] h-auto object-contain drop-shadow-xl"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Rich Animated Vector Representation of the 2nd Image */
        <div className="relative w-full max-w-[460px] flex flex-col items-center justify-center">
          {/* Ambient Warm & Purple Glow behind the vault */}
          <div className="absolute -top-12 w-72 h-72 bg-gradient-to-tr from-purple-300/40 via-amber-200/30 to-indigo-300/40 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* Floating magical elements rising from vault */}
          <div className="relative w-full h-44 flex items-center justify-center">
            {/* Main Center Key floating */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
                rotate: [45, 48, 45],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-[50%] -translate-x-1/2 flex items-center justify-center text-amber-400 drop-shadow-[0_4px_12px_rgba(251,191,36,0.5)] z-20"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 p-2.5 flex items-center justify-center text-amber-950 shadow-md">
                <FaKey className="text-2xl" />
              </div>
            </motion.div>

            {/* Left Angled Floating Key */}
            <motion.div
              animate={{
                y: [4, -8, 4],
                rotate: [-25, -20, -25],
              }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-10 left-[22%] text-amber-400 drop-shadow-[0_4px_10px_rgba(251,191,36,0.4)] z-10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-200 to-yellow-400 p-2 flex items-center justify-center text-amber-900 shadow">
                <FaKey className="text-lg" />
              </div>
            </motion.div>

            {/* Right Pastel Lock */}
            <motion.div
              animate={{
                y: [-4, 7, -4],
                rotate: [12, 16, 12],
              }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-8 right-[24%] z-10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-200 to-indigo-300 p-2 flex items-center justify-center text-indigo-900 shadow-md">
                <FaLock className="text-base" />
              </div>
            </motion.div>

            {/* Password Rating Card floating */}
            <motion.div
              animate={{
                y: [6, -5, 6],
                x: [-2, 2, -2],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-4 left-[18%] bg-white/95 backdrop-blur-sm border border-stone-200/80 rounded-xl px-3 py-1.5 shadow-sm flex items-center gap-1 z-10"
            >
              <div className="flex text-amber-400 text-xs gap-0.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </motion.div>

            {/* Twinkles / Sparkles */}
            <motion.div
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="absolute top-3 right-[40%] text-amber-300"
            >
              <HiSparkles className="text-xl" />
            </motion.div>
            <motion.div
              animate={{ scale: [1.1, 0.7, 1.1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.6 }}
              className="absolute top-12 left-[40%] text-purple-400"
            >
              <HiSparkles className="text-lg" />
            </motion.div>
          </div>

          {/* 3D Safe Vault Box */}
          <div className="relative w-72 sm:w-80 h-56 rounded-[28px] bg-gradient-to-r from-[#8570e6] to-[#9c89f7] p-2.5 shadow-[0_20px_45px_rgba(108,71,255,0.22)] border-2 border-indigo-200/40">
            {/* Front Vault Face */}
            <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F1E9DA] border-2 border-amber-100/80 p-3 flex flex-col justify-between shadow-inner relative overflow-hidden">
              
              {/* Access Granted Digital Screen */}
              <div className="w-full flex justify-center">
                <div className="bg-[#18233C] px-4 py-1.5 rounded-full border border-teal-500/30 shadow-[0_0_12px_rgba(20,184,166,0.3)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-teal-300">
                    ACCESS GRANTED
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                </div>
              </div>

              {/* Safe Door Body / Biometric Fingerprint & Secure Shield */}
              <div className="flex items-center justify-around px-2 py-3">
                {/* Fingerprint Scanner with Glowing Neon Ring */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(56, 189, 248, 0.4)",
                      "0 0 25px rgba(168, 85, 247, 0.6)",
                      "0 0 15px rgba(56, 189, 248, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 p-[3px] cursor-pointer"
                >
                  <div className="w-full h-full rounded-full bg-[#1A1832] flex items-center justify-center text-cyan-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none" />
                    <FaFingerprint className="text-3xl text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                  </div>
                </motion.div>

                {/* Secure Vault Badge */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-stone-800 to-stone-900 border border-amber-300/40 rounded-xl px-3.5 py-2.5 shadow-md">
                  <HiShieldCheck className="text-amber-300 text-xl mb-0.5" />
                  <span className="text-[9px] font-bold tracking-wider text-amber-200">
                    SECURE VAULT
                  </span>
                  <div className="flex text-amber-400 text-[8px] gap-0.5 mt-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>

              {/* Bottom Safe Feet */}
              <div className="flex justify-between px-3 text-[10px] text-stone-400 font-medium">
                <span>• AES-256</span>
                <span>END-TO-END •</span>
              </div>
            </div>

            {/* Little safe stand legs */}
            <div className="absolute -bottom-3 left-6 w-8 h-3.5 bg-indigo-950/40 rounded-b-lg" />
            <div className="absolute -bottom-3 right-6 w-8 h-3.5 bg-indigo-950/40 rounded-b-lg" />
          </div>

          {/* Floor Shadow */}
          <div className="w-64 sm:w-72 h-4 bg-stone-900/10 rounded-full blur-sm mt-3" />
        </div>
      )}
    </div>
  );
}
