"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Artist & Investor",
    description: "Diam sagittis, sit porttitor magna lobortis amet. Hamo adipiscing auctor. Molestiae tristique libero, id nulla tincidunt.",
    link: "Read Full Story"
  },
  {
    id: 2,
    title: "Artist & Investor",
    description: "Diam sagittis, sit porttitor magna lobortis amet. Hamo adipiscing auctor. Molestiae tristique libero, id nulla tincidunt.",
    link: "Read Full Story"
  },
  {
    id: 3,
    title: "Artist & Investor",
    description: "Diam sagittis, sit porttitor magna lobortis amet. Hamo adipiscing auctor. Molestiae tristique libero, id nulla tincidunt.",
    link: "Read Full Story"
  }
];

export default function Section13() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <section id="section13" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Aliquam dicit nulla tincidunt pulvinar sed fames sit facilisis euismod. Ornare faucibus nisi velit integer aliquam ultrices.
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
              >
                <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/o.png"
                    alt={`Slide ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-lg">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                    {slides[currentIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {slides[currentIndex].description}
                  </p>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-[#1959AC] hover:text-[#144a8a] font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    {slides[currentIndex].link} →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-4 -right-4 xl:-left-12 xl:-right-12 justify-between pointer-events-none">
            <button
              onClick={() => paginate(-1)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-gray-900" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-gray-900" />
            </button>
          </div>

          <div className="flex lg:hidden justify-center gap-4 mt-4">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-gray-900" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
