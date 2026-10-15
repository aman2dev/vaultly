"use client";

import React from "react";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    stars: 5,
    quote:
      "“My 72-year-old mom finally stopped calling me every Sunday night asking for her Disney+ and Hulu passwords. Setting up family vault sharing literally gave me my weekends back!”",
    initials: "ST",
    initialsBg: "bg-[#FCE8DC] text-[#C25828]",
    name: "Sarah Jenkins-Taylor",
    role: "Elementary Teacher & Mom",
  },
  {
    stars: 5,
    quote:
      "“It looks so friendly, soft, and cute, but gives me genuine Fort Knox protection. I was intimidated by other password managers that looked like hacker movie terminals.”",
    initials: "DM",
    initialsBg: "bg-[#ECE8FD] text-[#5833EF]",
    name: "David Moreno",
    role: "Brand Stylist & Freelancer",
  },
  {
    stars: 5,
    quote:
      "“We run a boutique coffee shop and constantly need to share register tablet pins and Spotify playlist logins. Vaultly made it clean, stress-free, and delightfully simple.”",
    initials: "EL",
    initialsBg: "bg-[#ECE8FD] text-[#5833EF]",
    name: "Elena Lindqvist",
    role: "Small Business Owner",
  },
];

export default function Reviews() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight"
        >
          Loved by non–techies &amp; security buffs <br />
          alike
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-3 text-stone-500 text-sm sm:text-base leading-relaxed"
        >
          Real stories from people who said goodbye to digital anxiety.
        </motion.p>
      </div>

      {/* 3 Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 border border-stone-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between gap-8"
          >
            {/* Top Stars & Quote */}
            <div className="flex flex-col gap-4">
              {/* Warm Amber/Terracotta 5 Stars */}
              <div className="flex text-[#C25828] text-xs gap-1">
                {[...Array(review.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed font-normal">
                {review.quote}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3.5 pt-2">
              {/* Initials Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${review.initialsBg}`}
              >
                {review.initials}
              </div>

              {/* Name & Role */}
              <div className="flex flex-col leading-snug">
                <span className="font-bold text-stone-900 text-sm">
                  {review.name}
                </span>
                <span className="text-stone-500 text-xs">
                  {review.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
