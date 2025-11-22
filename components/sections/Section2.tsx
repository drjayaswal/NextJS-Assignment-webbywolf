"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Lorem ipsum dolor sit amet conseceteur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas at arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title: "Lorem ipsum dolor sit amet conseceteur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas at arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title: "Lorem ipsum dolor sit amet conseceteur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas at arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
  ];

  return (
    <section id="section2" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container rounded-none mx-auto px-6.5 shadow-xl pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-[#1959AC] text-xs font-medium">
                Lorem ipsum dolor sit amet
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 sm:mb-6 uppercase tracking-tight"
            >
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-700 text-xs leading-relaxed mb-6 sm:mb-8"
            >
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus.
            </motion.p>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex gap-3 sm:gap-4"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center">
                      <Image
                        src="/f.png"
                        alt="Feature icon"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    </div>

                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[400px] mx-auto lg:max-w-none rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/g.png"
                alt="About us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </motion.div>
        </div>
        <div className="bg-linear-to-r from-blue-900 via-green-600 to-blue-950 -mx-6.5 text-blue-900 mt-5 -mb-16">a</div>
      </div>
    </section>
  );
}
