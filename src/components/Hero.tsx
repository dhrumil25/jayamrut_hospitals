import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowRight, Activity, Shield, Clock } from "lucide-react";

// ✅ Import local images
import hero1 from "../assests/JA_HERO_LOCATION.jpeg";
import hero2 from "../assests/JA_HERO_LOCATION_1.jpg";
import hero3 from "../assests/JA_HERO_HOSPITAL_1.jpeg";
import hero4 from "../assests/JA_HERO_HOSPITAL_2.jpeg";
import hero5 from "../assests/JA_HERO_HOSPITAL_3.jpeg";

export function Hero() {
  // ✅ Image array
  const images = [hero1, hero2, hero3, hero4, hero5];

  // ✅ State for slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-medical"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-medical-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 -left-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-medical-100 text-medical-700 text-sm font-medium mb-6 border border-medical-200">
              <Activity className="w-4 h-4" />
              <span>Advanced Healthcare Center</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advanced{" "}
              <span className="text-gradient">
                Child Care, Allergy, Asthma & Dental
              </span>{" "}
              Care
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Jayamrut Hospital provides world-class specialized medical care
              with highly experienced doctors, modern facilities, and a
              patient-first approach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-medical-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-medical-700 transition-all shadow-lg shadow-medical-600/30 hover:shadow-medical-600/50 hover:-translate-y-1 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#branches"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-50 transition-all border border-slate-200 shadow-sm hover:shadow-md"
              >
                Explore Branches
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/60">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-display font-bold text-medical-600">
                  10+
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-display font-bold text-medical-600">
                  3
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  Specialized Branches
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-display font-bold text-medical-600">
                  24/7
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  Emergency Care
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SLIDER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-medical-900/20 border-8 border-white">
              {/* ✅ Auto Sliding Image */}
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Hospital Facility"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent"></div>

              {/* Floating Badges (unchanged) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 glass-card rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Certified</p>
                  <p className="text-xs text-slate-600">Medical Experts</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-8 right-8 glass-card rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center text-medical-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Fast</p>
                  <p className="text-xs text-slate-600">Recovery</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
