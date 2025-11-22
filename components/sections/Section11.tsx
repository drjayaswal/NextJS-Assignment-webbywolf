"use client";

import { motion } from "framer-motion";
import { Settings, Star, Briefcase, Target } from "lucide-react";

const testimonials = [
  {
    icon: Settings,
    text: "Aliquam erat volutpat. Sed aliquet. Tellus porttitor ut sollicitudin sit non. Fringilla. Quis neque vulputate scelerisque neque eget amet pharetra, euismod.",
    author: "Jane Cooper",
    role: "J"
  },
  {
    icon: Star,
    text: "Vehicula sit at placerat bibendum id risus accumsan. Purus, in metus, tempor consequat. Nunc, in cursus elementum a.",
    author: "Ralph Edwards",
    role: "R"
  },
  {
    icon: Briefcase,
    text: "Viverra odio suspendisse elit, adipiscing velit. Non turpis etiam ultrices. Viverra bibendum lorem velit, neque, posuere.",
    author: "Courtney Henry",
    role: "C"
  },
  {
    icon: Target,
    text: "Hendrerit augue ut nec, adipiscing quis integer neque. Sagittis fusce volutpat. Magna habitant arcu amet.",
    author: "Cameron Williamson",
    role: "C"
  }
];

export default function Section11() {
  return (
    <section id="section11" className="py-8 bg-[#1959AC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
            Join other Sun Harvesters
          </h2>
          <p className="text-xs sm:text-sm text-blue-100">
            Our esteemed clients share, aliquam risus et elementum posuere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-lg p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow ${
                index === 0 ? 'scale-105' : ''
              }`}
            >
              <div className="mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <testimonial.icon size={20} className="text-[#2563EB]" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 min-h-[80px] sm:min-h-[100px]">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-gray-600">
                    {testimonial.role}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-900">
                  {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
