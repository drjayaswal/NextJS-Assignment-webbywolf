"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section6() {
  return (
    <section id="section6" className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[44vh] overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/l.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>


      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10">
        <div className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-black font-bold text-xs sm:text-sm">
          LOGO
        </div>
      </div>


      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >

          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase leading-tight">
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
