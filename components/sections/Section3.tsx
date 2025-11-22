"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section3() {
  return (
    <section id="section3" className="relative w-full h-screen overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/b.png"
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
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 uppercase leading-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
          </h1>

          <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mattis justo eu imod volutpat vestibulum nisl at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id rictus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
          </p>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque eros mauris in vitae. At viverra quis eu malesuada vel at porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>
          <p className="text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed opacity-80">
            Lorem ipsum dolor sit amet consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
