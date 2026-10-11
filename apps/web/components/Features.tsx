"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaBolt,
  FaUsers,
  FaKey,
  FaRotateRight,
  FaHandPointer,
  FaShieldHeart,
  FaWifi,
  FaTv,
} from "react-icons/fa6";

const SAMPLE_PASSWORDS = [
  "k9#Mv@8-Panda-Breeze-79!",
  "7x$Wp!2-Cosmic-Mango-42*",
  "q4&Tn#9-Velvet-Falcon-88^",
  "d3@Lk$5-Golden-Meadow-16~",
];

export default function Features() {
  const [passwordIndex, setPasswordIndex] = useState(0);

  const handleReroll = () => {
    setPasswordIndex((prev) => (prev + 1) % SAMPLE_PASSWORDS.length);
  };

  const cards = [
    {
      id: "one-click-login",
      icon: <FaHandPointer className="text-lg" />,
      iconBg: "bg-[#ECE8FD] text-[#5833EF]",
      tag: "FACE ID & BIOMETRICS",
      tagStyle: "bg-[#ECE8FD] text-[#5833EF]",
      title: "One-Click Login",
      description:
        "Instant autofill across all your browser tabs, phone apps, and streaming devices. Tap your fingerprint or glance at your phone, and you are in.",
      bottomContent: (
        <div className="w-full bg-[#FAF6F0] border border-stone-200/60 rounded-2xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-stone-200/80 text-stone-700 flex items-center justify-center text-xs">
              <FaTv />
            </div>
            <span className="font-mono text-xs sm:text-sm font-medium text-stone-800">
              Netflix • Family
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-[#5833EF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            <FaBolt className="text-[10px]" />
            Autofilled
          </span>
        </div>
      ),
    },
    {
      id: "secure-sharing",
      icon: <FaUsers className="text-lg" />,
      iconBg: "bg-[#FDF0E8] text-[#E06D44]",
      tag: "ZERO UNSAFE TEXTS",
      tagStyle: "bg-[#FDF0E8] text-[#C8592E]",
      title: "Secure Sharing with Family",
      description:
        "Safely share your home Wi-Fi code, grocery app logins, and insurance portals with your partner or parents without pasting plain passwords in text messages.",
      bottomContent: (
        <div className="w-full bg-[#FAF6F0] border border-stone-200/60 rounded-2xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FCE8DC] text-[#D45929] flex items-center justify-center text-xs">
              <FaWifi />
            </div>
            <span className="font-mono text-xs sm:text-sm font-medium text-stone-800">
              Home Wi-Fi 5GHz
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-[#F9DDD0] text-[#B84E26] text-xs font-semibold px-3 py-1 rounded-full">
            <FaUsers className="text-xs" />
            Shared with 4
          </span>
        </div>
      ),
    },
    {
      id: "super-generator",
      icon: <FaKey className="text-lg" />,
      iconBg: "bg-[#ECE8FD] text-[#5833EF]",
      tag: "UNCRACKABLE KEYS",
      tagStyle: "bg-[#ECE8FD] text-[#5833EF]",
      title: "Automatic Super-Generator",
      description:
        'Ditch predictable passwords like "Summer2024!" once and for all. Vaultly spins up friendly, impregnable 30-character keys whenever you sign up somewhere new.',
      bottomContent: (
        <div className="w-full bg-[#FAF6F0] border border-stone-200/60 rounded-2xl px-4 py-3 flex items-center justify-between">
          <span className="font-mono font-bold text-xs sm:text-sm text-[#5833EF] tracking-tight">
            {SAMPLE_PASSWORDS[passwordIndex]}
          </span>
          <button
            onClick={handleReroll}
            type="button"
            className="inline-flex items-center gap-1.5 bg-stone-200/80 hover:bg-stone-300 text-stone-700 text-xs font-semibold px-3 py-1 rounded-lg transition-colors cursor-pointer active:scale-95"
          >
            <FaRotateRight className="text-[10px]" />
            Re-roll
          </button>
        </div>
      ),
    },
    {
      id: "breach-alarm",
      icon: <FaShieldHeart className="text-lg" />,
      iconBg: "bg-[#FDF0E8] text-[#E06D44]",
      tag: "GENTLE SENTINEL",
      tagStyle: "bg-[#FDF0E8] text-[#C8592E]",
      title: "Breach Alarm & Health Score",
      description:
        "Calm, proactive notifications if an old service leaks data. No scary sirens — just a friendly nudge and a simple one-click upgrade button to keep you ahead.",
      bottomContent: (
        <div className="w-full bg-[#FAF6F0] border border-stone-200/60 rounded-2xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-stone-800">
              Vault Health: 99.4% Safe
            </span>
          </div>
          <span className="bg-[#FEEFD9] text-[#B87019] text-xs font-semibold px-3 py-1 rounded-full">
            All clear
          </span>
        </div>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.18]"
        >
          Security that feels like a warm <br />
          <span className="text-stone-950 font-black">hug, not a chore</span>
          <span className="text-stone-700">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
        >
          No command lines, no complicated master recovery codes written on
          cardboard. Just gentle, effortless protection.
        </motion.p>
      </div>

      {/* 2x2 Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white/95 rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 border border-stone-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col items-start gap-4">
              {/* Circular Top Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${card.iconBg} shadow-sm`}
              >
                {card.icon}
              </div>

              {/* Tag pill */}
              <span
                className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${card.tagStyle}`}
              >
                {card.tag}
              </span>

              {/* Card Title */}
              <h3 className="text-2xl sm:text-[26px] font-extrabold text-stone-900 tracking-tight leading-snug">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Bottom visual / interactive element */}
            <div className="pt-2">{card.bottomContent}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
