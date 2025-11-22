"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "research",
    label: "Research",
    content: "Egestas fringilla aliquam nec, molestiae arcu, vel nisl lorem elit. Neque pellentesque donec et odio ac ligula facilisis bibendum. Nulla felis ac turpis ut odio et. Purus molestiae placerat et arcu a odio elit in accumsan."
  },
  {
    id: "plan",
    label: "Plan",
    content: "Strategic planning and execution to bring your vision to life. We analyze requirements, set milestones, and create actionable roadmaps that ensure project success from start to finish."
  },
  {
    id: "design",
    label: "Design",
    content: "Creative design solutions that combine aesthetics with functionality. Our team crafts beautiful, user-centered designs that engage your audience and deliver exceptional experiences."
  }
];

export default function Section12() {
  const [activeTab, setActiveTab] = useState("research");

  return (
    <section id="section12" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 uppercase">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            <div className="inline-flex mb-6 sm:mb-8 border border-gray-300 rounded overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium transition-all duration-300 relative cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#1959AC]/10 text-[#1959AC]"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#1959AC] -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative min-h-[120px] sm:min-h-[140px]">
              <AnimatePresence mode="wait">
                {tabs.map((tab) =>
                  activeTab === tab.id ? (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {tab.content}
                      </p>
                      <a
                        href="#"
                        className="hover:underline inline-flex items-center gap-1 text-xs sm:text-sm text-[#1959AC] hover:text-[#144a8a] font-medium transition-colors"
                      >
                        Check tools
                        <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                      </a>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 overflow-hidden shadow-xl"
          >
            <Image
              src="/p.png"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
