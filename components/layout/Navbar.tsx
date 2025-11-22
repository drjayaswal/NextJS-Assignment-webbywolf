"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { 
    name: "Lorem Ipsum", 
    href: "#", 
    dropdown: [
      { name: "Option 1", href: "#option1" },
      { name: "Option 2", href: "#option2" }
    ]
  },
  { 
    name: "Lorem Ipsum", 
    href: "#", 
    dropdown: [
      { name: "Service 1", href: "#service1" },
      { name: "Service 2", href: "#service2" }
    ]
  },
  { 
    name: "Lorem Ipsum", 
    href: "#", 
    dropdown: [
      { name: "Feature 1", href: "#feature1" },
      { name: "Feature 2", href: "#feature2" }
    ]
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileDropdown = (index: number) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  const handleDesktopDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className={`text-xs sm:text-sm md:text-base font-bold px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-200 cursor-pointer transition-colors duration-300`}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              LOGO
            </motion.div>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleDesktopDropdown(index)}
                  className={`cursor-pointer px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-medium transition-colors relative group flex items-center text-[#1959AC] gap-1`}
                >
                  {item.name}
                  <ChevronDown size={14} className={`lg:w-4 lg:h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1959AC] group-hover:w-full transition-all duration-300"></span>
                </button>
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
            >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#1959AC] hover:bg-blue-50 transition-colors"
                    >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                size="lg"
                className={`cursor-pointer px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 text-xs lg:text-sm xl:text-base font-normal hover:bg-[#1959AC] hover:text-white transition-all duration-300 ${
                  isScrolled ? 'bg-white text-black shadow-md' : 'bg-white text-black'
                }`}
              >
                Sign In
              </Button>
            </motion.div>
          </div>

          <button
            className={`lg:hidden p-2 hover:text-[#1959AC] transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-900'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
                    >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg"
            >
              <div className="py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="w-full flex items-center justify-between px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-[#1959AC] hover:bg-blue-50 transition-colors"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${mobileDropdown === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          <div className="ml-4 space-y-1 py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1959AC] hover:bg-blue-50 rounded-lg transition-all"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileDropdown(null);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                <div className="px-4 pt-3 sm:pt-4 border-t border-gray-200">
                  <Button 
                    className="w-full bg-[#1959AC] text-white text-sm sm:text-base font-semibold hover:bg-[#0546D2] transition-all duration-300 shadow-md h-10 sm:h-11"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
