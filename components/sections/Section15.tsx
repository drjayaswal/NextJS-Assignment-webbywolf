"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Section15() {
  return (
    <section id="section15" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <div className="bg-gray-200 px-4 py-2 text-black font-bold text-xs sm:text-sm border border-gray-200">
              LOGO
            </div>
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>

          <motion.button
            whileHover={{ backgroundColor: "#0f3d73" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#1959AC] hover:bg-[#144a8a] text-white text-xs sm:text-sm font-medium rounded transition-colors cursor-pointer"
          >
            Lorem Ipsum
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </motion.button>
          </motion.div>
      </div>
    </section>
  );
}
