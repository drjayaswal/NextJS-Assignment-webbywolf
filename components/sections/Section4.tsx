"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/pics1/a.png",
  "/pics1/b.png",
  "/pics1/c.png",
  "/pics1/d.png",
  "/pics1/e.png",
  "/pics1/f.png",
  "/pics1/g.png",
  "/pics1/h.png",
  "/pics1/i.png",
  "/pics1/j.png",
  "/pics1/k.png",
  "/pics1/l.png"
];
export default function Section4() {
  return (
    <section id="section4" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 uppercase leading-tight px-4">
            LOREM IPSUM DOLOR SIT AMET<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>CONSECTETUR. COMMODO LEO AMET.
          </h2>
        </motion.div>
        <div className="mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full h-12 sm:h-16 md:h-20">
                  <Image
                    src={logo}
                    alt={`Company logo ${index + 1}`}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
