"use client";

import React from "react";
import { motion } from "motion/react";
import { HiArrowDownTray, HiFaceSmile } from "react-icons/hi2";
import { FaBolt, FaWandMagicSparkles } from "react-icons/fa6";

const steps = [
  {
    step: "01",
    stepColor: "text-[#9F8BEA]/50",
    icon: <HiArrowDownTray className="text-lg" />,
    iconStyle: "bg-[#EDE8FD] text-[#5833EF]",
    title: "Download in 30 seconds",
    description:
      "Grab the app on iOS, Android, Mac, or Windows. Install the lightweight browser extension in just one warm tap.",
  },
  {
    step: "02",
    stepColor: "text-[#EAB598]/60",
    icon: <FaWandMagicSparkles className="text-base" />,
    iconStyle: "bg-[#FDF0E8] text-[#D86536]",
    title: "Automatic 1-Tap Import",
    description:
      "Vaultly imports old saved keys from Chrome, Safari, or Apple Keychain safely and cleans up messy duplicates automatically.",
  },
  {
    step: "03",
    stepColor: "text-[#9F8BEA]/50",
    icon: <HiFaceSmile className="text-lg" />,
    iconStyle: "bg-[#EDE8FD] text-[#5833EF]",
    title: "Never reset another code",
    description:
      "From that moment on, whenever you visit an app or website, Vaultly smiles, fills your details, and lets you glide right in.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 bg-[#FDF0E8] text-[#C8592E] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs"
        >
          <FaBolt className="text-[11px] text-amber-500" />
          <span>Painless 2-minute setup</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight mt-4"
        >
          How Vaultly sets you free
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-3 text-stone-500 text-sm sm:text-base leading-relaxed"
        >
          You don&apos;t need an IT degree. If you know how to tap an app, you&apos;re already an expert.
        </motion.p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 border border-stone-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all flex flex-col items-start"
          >
            {/* Step Number */}
            <span className={`text-4xl font-extrabold ${item.stepColor} tracking-tight font-sans mb-3`}>
              {item.step}
            </span>

            {/* Icon in Circle */}
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center ${item.iconStyle} shadow-xs mb-6`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-extrabold text-stone-900 tracking-tight mb-2.5">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-stone-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
