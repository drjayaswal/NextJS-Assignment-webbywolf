"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Section10() {
  return (
    <section id="section10" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #cbd5e1 20px, #cbd5e1 22px)',
        }} />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, #cbd5e1 20px, #cbd5e1 22px)',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] order-2 lg:order-1"
          >
            <Image
              src="/w.png"
              alt="Motorcycles on road"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 md:p-10 shadow-lg order-1 lg:order-2"
          >

            <p className="text-xs text-gray-500 mb-2">Lorem Ipsum</p>

            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vel mi tellus odio enim amet non.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 sm:mb-8">
              <div className="text-xs text-gray-700">Lorem Ipsum</div>
              <div className="text-xs text-gray-700">Lorem Ipsum</div>
              <div className="text-xs text-gray-700">Lorem Ipsum</div>
              <div className="text-xs text-gray-700">Lorem Ipsum</div>
              <div className="text-xs text-gray-700">Lorem Ipsum</div>
              <div className="text-xs text-gray-700">Lorem Ipsum</div>
            </div>

            <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-[#1959AC] hover:bg-[#144a8a] text-white text-xs font-medium rounded transition-colors">
              Lorem Ipsum
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-2 sm:h-3 mt-0 origin-left bg-linear-to-r from-blue-900 via-green-600 to-blue-950"
        />
                </div>
    </section>
  );
}
