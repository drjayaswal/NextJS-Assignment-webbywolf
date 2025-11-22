"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const cards = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.",
    image: "/pics2/b.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.",
    image: "/pics2/c.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.",
    image: "/pics2/d.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.",
    image: "/pics2/a.png",
  },
];

export default function Section5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="section5" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-gray-200 via-transparent to-transparent" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)'
             }} 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#1959AC] text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          >
            Lorem ipsum dolor sit amet
          </motion.div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-3 sm:mb-4 text-gray-900 uppercase tracking-wide">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-[800px] mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6 bg-white">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <a 
                      href="#" 
                      className="text-blue-600 font-semibold text-xs sm:text-sm hover:text-blue-700 transition-colors inline-flex items-center"
                    >
                      Learn More
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
