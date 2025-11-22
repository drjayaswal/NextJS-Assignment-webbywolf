"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Section9() {
  return (
    <section id="section9" className="py-12 h-[600px] bg-linear-to-br from-gray-200 via-blue-100 to-gray-200 min-h-[700px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pt-8 shrink-0"
          >
            <p className="text-xs text-gray-400 font-bold mb-2">NO LIMITS</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 uppercase">
              LOREM IPSUM<br />DOLOR SIT AMET
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Nisl facilisis vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1959AC] hover:bg-[#144a8a] text-white text-xs sm:text-sm font-medium rounded transition-colors">
              Lorem Ipsum
              <ArrowRight size={14} />
            </button>
            <div className="mt-8 hidden lg:grid grid-rows-2 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative ml-80 -mt-18 h-[250px] w-[150px] overflow-hidden"
              >
                <Image
                  src="/pics3/a.png"
                  alt="Motorcycle photo"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[210px] -mt-3 overflow-hidden"
              >
                <Image
                  src="/pics3/b.png"
                  alt="Motorcycle photo"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="w-full flex flex-col gap-6 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[200px] w-full sm:w-[125px] sm:ml-55 mt-2 overflow-hidden scale-90 mx-auto"
              >
                <Image
                  src="/pics3/c.png"
                  alt="Motorcycle photo"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative h-[200px] w-full sm:w-[350px] overflow-hidden"
              >
                <Image
                  src="/pics3/d.png"

                  alt="Motorcycle photo"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[200px] sm:h-[300px] w-full overflow-hidden"
              >
                <Image
                  src="/pics3/e.png"
                  alt="Motorcycle photo"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative h-[100px] w-full overflow-hidden"

              >
                <Image
                  src="/h.png"
                  alt="Motorcycle photo"
                  fill
                  className="object-cover object-center"
                  // quality={100}
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative h-[55px] w-full overflow-hidden"
              >
                <Image
                  src="/pics3/g.png"
                  alt="Motorcycle photo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
