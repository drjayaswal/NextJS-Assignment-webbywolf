"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [

  {
    image: "/c.png",
    description: "Hendrerit tellus at purus lectus. Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  {
    image: "/d.png",
    description: "Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet."
  },
  {
    image: "/e.png",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
];

export default function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="section1" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative overflow-hidden" ref={ref}>
      <div className="container flex flex-col pb-6 sm:pb-8 md:pb-12 lg:pb-16 mx-auto px-3 sm:px-4 lg:px-6 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center px-3">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-1 sm:mb-4"
            >
              <span className="text-xs sm:text-sm font-medium" style={{ color: '#1959AC' }}>
                Lorem ipsum dolor sit
              </span>
            </motion.div>

            <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold mb-3 sm:mb-4 uppercase text-gray-900">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 text-left leading-relaxed mb-4 sm:mb-6">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex gap-2 sm:gap-3 items-start"
                >
                  <div className="shrink-0 w-8 h-8 sm:w-16 sm:h-16 rounded overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={`Feature ${index + 1}`}
                      width={70}
                      height={70}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed pt-1">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-start sm:items-center text-white"
            >
              <button 
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold sm:text-sm text-white cursor-pointer bg-[#1959AC] rounded-lg transition-colors flex items-center gap-1.5"
>
                Lorem ipsums
                <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </button>
              <a
                href="tel:123456789"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                style={{ color: '#1959AC' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#144a8a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1959AC'}
              >
                <Phone size={14} className="sm:w-4 sm:h-4" />
                123456789
              </a>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[550px] w-full max-w-[250px] mx-auto lg:max-w-none rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/h.png"
              alt="Motorcycles"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="bg-linear-to-r from-blue-900 via-green-600 to-blue-950 -mx-6.5 text-blue-900 mt-5 -mb-16">a</div>
      </div>
    </section>
  );
}