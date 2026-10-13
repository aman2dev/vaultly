"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HiShieldCheck,
  HiSparkles,
} from "react-icons/hi2";
import {
  FaCircleCheck,
  FaCircleXmark,
  FaTriangleExclamation,
} from "react-icons/fa6";
import {
  SiNetflix,
  SiSpotify,
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiX,
} from "react-icons/si";

export default function Transformation() {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");
  const [imgError, setImgError] = useState(false);

  return (
    <section id="how-it-works" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Outer Rounded Container Card */}
      <div className="bg-white rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-14 border border-stone-200/70 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#9E623B] font-bold text-xs sm:text-sm tracking-widest uppercase inline-block mb-3">
            THE TRANSFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
            Feel the difference <br />
            immediately
          </h2>
          <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
            Toggle below to see what everyday internet life looks like before and after stepping into the cozy Vaultly universe.
          </p>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex items-center bg-[#EBE7E1] p-1.5 rounded-full">
            <button
              onClick={() => setActiveTab("before")}
              type="button"
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "before"
                  ? "bg-rose-500 text-white shadow-sm"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              <span>😠 Before Vaultly</span>
            </button>

            <button
              onClick={() => setActiveTab("after")}
              type="button"
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "after"
                  ? "bg-[#5833EF] text-white shadow-md shadow-indigo-500/25"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              <HiSparkles className="text-amber-200 text-sm" />
              <span>After Vaultly</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="mt-12 rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#F5F2FD] via-[#FAF7F2] to-[#FCEEE7]/50 border border-purple-100/70 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "after" ? (
              <motion.div
                key="after-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Left: Serene 3D Vault & App Clusters Visual */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#F2EBF9] to-[#FDF4EE] border border-purple-200/50 shadow-inner p-5 sm:p-7 min-h-[360px] flex flex-col items-center justify-center">
                    
                    {/* Check if user provided transformation screenshot image in public folder */}
                    {!imgError ? (
                      <img
                        src="/transformation.png"
                        alt="Vaultly Organized Bliss"
                        className="w-full h-auto object-contain rounded-2xl shadow-sm"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      /* Crafted Animated Bliss Presentation */
                      <div className="relative w-full max-w-[420px] flex flex-col items-center justify-center py-4 select-none">
                        {/* Glowing Center Shield */}
                        <motion.div
                          animate={{ y: [-3, 4, -3] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-16 h-18 bg-gradient-to-tr from-sky-400 via-indigo-400 to-purple-400 rounded-2xl p-1 shadow-lg shadow-sky-400/20 flex items-center justify-center text-white mb-2 relative"
                        >
                          <HiShieldCheck className="text-4xl text-white drop-shadow-md" />
                          <span className="absolute -top-1 -right-1 text-amber-300">
                            <HiSparkles />
                          </span>
                        </motion.div>

                        {/* Floating App Bubble Clusters */}
                        <div className="w-full flex justify-between items-center px-1 mb-3">
                          {/* Streaming Cluster */}
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                              Streaming
                            </span>
                            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-stone-200/60 shadow-xs">
                              <span className="w-6 h-6 rounded-md bg-stone-900 text-red-600 flex items-center justify-center text-xs">
                                <SiNetflix />
                              </span>
                              <span className="w-6 h-6 rounded-md bg-sky-900 text-sky-200 flex items-center justify-center text-[10px] font-bold">
                                D+
                              </span>
                              <span className="w-6 h-6 rounded-md bg-stone-900 text-emerald-400 flex items-center justify-center text-xs">
                                <SiSpotify />
                              </span>
                            </div>
                          </div>

                          {/* Banking Cluster */}
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                              Banking
                            </span>
                            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-stone-200/60 shadow-xs">
                              <span className="w-6 h-6 rounded-md bg-blue-700 text-white flex items-center justify-center text-[10px] font-black">
                                ⬡
                              </span>
                              <span className="w-6 h-6 rounded-md bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">
                                🏦
                              </span>
                              <span className="w-6 h-6 rounded-md bg-sky-500 text-white flex items-center justify-center text-xs font-bold">
                                V
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Adorable Cute Smiling Mini Vault Character */}
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="relative w-48 h-32 rounded-3xl bg-gradient-to-b from-[#bfece0] to-[#a6decb] p-2 shadow-md border-2 border-white flex items-center justify-between px-5"
                        >
                          {/* Cute Smiling Face */}
                          <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex items-center gap-6">
                              {/* Left Blushing Eye */}
                              <div className="w-2.5 h-2 rounded-t-full bg-stone-700" />
                              {/* Right Blushing Eye */}
                              <div className="w-2.5 h-2 rounded-t-full bg-stone-700" />
                            </div>
                            {/* Blushing cheeks */}
                            <div className="flex items-center gap-9 mt-0.5">
                              <div className="w-2.5 h-1.5 bg-rose-300 rounded-full" />
                              <div className="w-2.5 h-1.5 bg-rose-300 rounded-full" />
                            </div>
                            {/* Happy mouth */}
                            <div className="w-3.5 h-2 border-b-2 border-stone-700 rounded-b-full mt-0.5" />
                          </div>

                          {/* Dial Knob on Safe */}
                          <div className="w-9 h-9 rounded-full bg-[#f8b6ab] border-2 border-white flex items-center justify-center shadow-inner">
                            <div className="w-3 h-3 rounded-full bg-[#f28e7e]" />
                          </div>

                          {/* Coral Legs */}
                          <div className="absolute -bottom-2 left-6 w-5 h-3 bg-[#f8b6ab] rounded-b-lg" />
                          <div className="absolute -bottom-2 right-6 w-5 h-3 bg-[#f8b6ab] rounded-b-lg" />
                        </motion.div>

                        {/* Social Apps Cluster below */}
                        <div className="w-full flex justify-between items-center px-1 mt-3">
                          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-stone-200/60 shadow-xs">
                            <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-xs">
                              <SiInstagram />
                            </span>
                            <span className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center text-xs">
                              <SiTiktok />
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-stone-200/60 shadow-xs">
                            <span className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center text-xs">
                              <SiX />
                            </span>
                            <span className="w-6 h-6 rounded-md bg-red-600 text-white flex items-center justify-center text-xs">
                              <SiYoutube />
                            </span>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Feature Bullet Points */}
                <div className="lg:col-span-6 flex flex-col items-start gap-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-[#EDE8FE] text-[#5833EF] px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
                    <HiShieldCheck className="text-sm" />
                    <span>Serene Organized Bliss</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
                    One master key, infinite calm
                  </h3>

                  {/* Bullet points */}
                  <div className="flex flex-col gap-5 pt-1">
                    <div className="flex items-start gap-3.5">
                      <FaCircleCheck className="text-[#5833EF] text-lg mt-0.5 shrink-0" />
                      <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                        <strong className="font-bold text-stone-900">
                          Instant biometric touch:
                        </strong>{" "}
                        Log into Disney+, your primary bank, or airline portal in less than 200 milliseconds.
                      </p>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <FaCircleCheck className="text-[#5833EF] text-lg mt-0.5 shrink-0" />
                      <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                        <strong className="font-bold text-stone-900">
                          Zero memory drain:
                        </strong>{" "}
                        Never think about a password again. Vaultly holds everything inside a warm, fortified cocoon.
                      </p>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <FaCircleCheck className="text-[#5833EF] text-lg mt-0.5 shrink-0" />
                      <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                        <strong className="font-bold text-stone-900">
                          Bank-grade encryption:
                        </strong>{" "}
                        Fortified with AES-256 zero-knowledge security — even Vaultly engineers cannot see your data.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="before-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Left: Chaotic "Before" Visual */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-stone-100 to-amber-50/60 border border-stone-200/70 p-6 min-h-[360px] flex flex-col items-center justify-center gap-4">
                    
                    {/* Error Banner */}
                    <div className="w-full bg-rose-50 border border-rose-200 rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-rose-800 shadow-xs">
                      <FaTriangleExclamation className="text-rose-500 shrink-0 text-base" />
                      <span className="text-xs sm:text-sm font-semibold">
                        Wrong Password: 4 attempts remaining before lock
                      </span>
                    </div>

                    {/* Messy Sticky Notes */}
                    <div className="relative w-full max-w-[340px] h-48 flex items-center justify-center">
                      <div className="absolute top-2 left-4 w-36 h-28 bg-yellow-200/90 rounded-sm p-3 shadow-md -rotate-6 border border-yellow-300">
                        <span className="text-[10px] font-bold text-stone-500 uppercase">Netflix:</span>
                        <p className="font-mono text-xs font-bold text-stone-800 mt-1">mom_birthday123?</p>
                        <p className="text-[10px] text-stone-400 line-through mt-1">or is it password@2021?</p>
                      </div>

                      <div className="absolute bottom-2 right-4 w-40 h-28 bg-rose-100/90 rounded-sm p-3 shadow-md rotate-3 border border-rose-200">
                        <span className="text-[10px] font-bold text-rose-500 uppercase">Bank login:</span>
                        <p className="font-mono text-xs font-bold text-stone-800 mt-1">Summer2023!!</p>
                        <p className="text-[10px] text-rose-600 font-semibold mt-1">⚠️ Reset required 2mo ago</p>
                      </div>
                    </div>

                    <div className="text-stone-400 text-xs font-medium">
                      ❌ Sticky notes, forgotten security questions, endless frustration
                    </div>
                  </div>
                </div>

                {/* Right: Pain Points */}
                <div className="lg:col-span-6 flex flex-col items-start gap-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
                    <FaTriangleExclamation className="text-xs" />
                    <span>Frustrating Password Chaos</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
                    Lost passwords, endless resets
                  </h3>

                  {/* Bullet points */}
                  <div className="flex flex-col gap-5 pt-1">
                    <div className="flex items-start gap-3.5">
                      <FaCircleXmark className="text-rose-500 text-lg mt-0.5 shrink-0" />
                      <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                        <strong className="font-bold text-stone-900">
                          Constant lockouts:
                        </strong>{" "}
                        Spending 10 minutes resetting passwords just to stream a movie on Friday night.
                      </p>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <FaCircleXmark className="text-rose-500 text-lg mt-0.5 shrink-0" />
                      <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                        <strong className="font-bold text-stone-900">
                          Dangerous sticky notes:
                        </strong>{" "}
                        Passwords scribbled on cardboard, unencrypted notes apps, or plain text messages.
                      </p>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <FaCircleXmark className="text-rose-500 text-lg mt-0.5 shrink-0" />
                      <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                        <strong className="font-bold text-stone-900">
                          Vulnerable to breaches:
                        </strong>{" "}
                        Reusing the same password with &ldquo;123!&rdquo; across banking, email, and social apps.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
