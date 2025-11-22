"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [

  {
    image: "/small-rider.png",
    description: "Hendrerit tellus at purus lectus. Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  {
    image: "/small-hand.png",
    description: "Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet."
  },
  {
    image: "/small-hand2.png",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
];

export default function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="container pb-25 mx-auto px-4 lg:px-8  shadow-xl rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-sm font-medium" style={{ color: '#1959AC' }}>
                Lorem ipsum dolor sit
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase text-gray-900">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="shrink-0 w-18 h-18 rounded overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={`Feature ${index + 1}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed pt-1">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button 
              className="px-4 py-2 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
              style={{ backgroundColor: '#1959AC' }}
  onMouseEnter={(e) => e.currentTarget.style.color = '#144a8a'}
  onMouseLeave={(e) => e.currentTarget.style.color = '#1959AC'}
>
                Lorem ipsum
                <ArrowRight size={18} />
              </button>
              <a
                href="tel:123456789"
                className="flex items-center gap-2 font-medium transition-colors"
                style={{ color: '#1959AC' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#144a8a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1959AC'}
              >
                <Phone size={18} />
                123456789
              </a>

            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[500px] ml-92 scale-125 w-[300px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/bikes.png"
              alt="Motorcycles"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}