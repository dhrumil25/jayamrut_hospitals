import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import logo from "../assests/JA_Logo.png"; // ✅ added

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Doctors", href: "#doctors" },
  { name: "Branches", href: "#branches" },
  { name: "Tests", href: "#tests" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass py-3 border-white/20" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="group">
            <span className="font-display font-bold text-lg md:text-xl text-black flex items-center">
              {/* Bigger Logo */}
              <img
                src={logo}
                alt="logo"
                className="h-10 md:h-12 w-auto object-contain mr-1"
              />
              JayAmrut Hospital
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-medical-600 after:transition-all hover:after:w-full pb-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="tel:9974833816"
              className="hidden xl:flex items-center gap-2 bg-medical-50 text-medical-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-medical-100 transition-colors border border-medical-200"
            >
              <Phone className="w-4 h-4" />
              <span>9974833816</span>
            </a>
            <a
              href="#contact"
              className="bg-medical-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-medical-700 transition-all shadow-lg shadow-medical-600/30 hover:shadow-medical-600/50 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-medical-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-medical-600 hover:bg-medical-50 rounded-xl transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 px-4 pt-4 border-t border-slate-200/50">
                <a
                  href="tel:9974833816"
                  className="flex items-center justify-center gap-2 bg-medical-50 text-medical-700 px-4 py-3 rounded-xl text-base font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 9974833816</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center bg-medical-600 text-white px-4 py-3 rounded-xl text-base font-semibold shadow-lg shadow-medical-600/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
