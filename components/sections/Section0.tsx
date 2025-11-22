"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Section0() {
  const [email, setEmail] = useState("");

  return (
    <section id="section0" className="relative min-h-screen flex items-center -mt-20 overflow-hidden bg-white">
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-6 sm:py-8 lg:py-0 px-3 xs:px-4 sm:px-5 md:px-6 lg:pl-12 xl:pl-16 lg:pr-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4 leading-tight text-gray-900"
            >
              Lorem ipsum dolor sit amet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xs xs:text-xs sm:text-sm md:text-sm text-gray-600 mb-3 xs:mb-4 sm:mb-6 leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisl platea morbi libero imperdiet neque. Justo suspendisse tristique posuere amet eget viverra. Nunc euismod ultrices etiam nulla habitasse.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-2 xs:mb-3 sm:mb-4"
            >
              <div className="flex gap-2 max-w-100">
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-7 xs:h-8 sm:h-9 px-2 xs:px-2 sm:px-3 text-xs xs:text-xs sm:text-xs border-gray-300 focus:border-[#1959AC] focus:ring-[#1959AC]"
                />
                <Button
                  size="lg"
                  className="h-7 xs:h-8 sm:h-9 px-2 xs:px-3 sm:px-4 text-xs xs:text-xs sm:text-xs bg-[#1959AC] hover:bg-[#0546D2] text-white font-medium whitespace-nowrap"
                >
                  Subscribe →
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-1 xs:gap-1 text-xs sm:text-xs text-gray-600"
            >
              <CheckCircle2 size={10} className="text-[#1959AC] xs:w-3 xs:h-3 sm:w-3 sm:h-3" />
              <span>No credit required!</span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
          >
            <div className="relative w-full h-full">
              <Image
                src="/a.png"
                alt="Hero Image"
                fill
                className="object-cover object-center lg:object-left"
                priority
                sizes="(max-width: 475px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 xs:h-20 sm:h-24 bg-linear-to-t from-white/95 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-20 right-0 w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}