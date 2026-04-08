import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  TestTube,
  ActivitySquare,
  Droplet,
  Wind,
  FileText,
  Beaker,
} from "lucide-react";

const tests = [
  {
    name: "Skin Prick Test",
    icon: Droplet,
    desc: "Quick test to identify immediate allergic reactions to various substances.",
  },
  {
    name: "Prick to Prick Test",
    icon: Beaker,
    desc: "Specialized allergy testing using fresh foods.",
  },
  {
    name: "FeNO Test",
    icon: Wind,
    desc: "Measures fractional exhaled nitric oxide to assess airway inflammation.",
  },
  {
    name: "Allergy Blood Test",
    icon: TestTube,
    desc: "Measures the amount of allergen-specific antibodies in your blood.",
  },
  {
    name: "IOS Lung Function Test",
    icon: ActivitySquare,
    desc: "Impulse Oscillometry to measure airway resistance effortlessly.",
  },
  {
    name: "Incentive Spirometry",
    icon: FileText,
    desc: "Helps improve lung function and keep lungs clear.",
  },
];

export function Tests() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isUserInteracting = false;

    const handleTouchStart = () => (isUserInteracting = true);
    const handleTouchEnd = () => (isUserInteracting = false);

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    const interval = setInterval(() => {
      if (!slider || isUserInteracting) return;

      const cardWidth = slider.clientWidth * 0.8 + 16; // 80% card + gap
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft + cardWidth >= maxScroll) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 2500);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section id="tests" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advance diagnostic test in{" "}
              <span className="text-gradient">
                Amrut Allergy & Asthma Centre
              </span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Accurate diagnosis is the first step to effective treatment. We
              utilize modern diagnostic tools and procedures to pinpoint the
              exact cause of your symptoms.
            </p>

            <div className="hidden lg:block w-full h-64 rounded-3xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop"
                alt="Laboratory Testing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-medical-900/20 mix-blend-multiply"></div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-2/3 w-full">
            {/* 📱 Mobile Auto Slider */}
            <div
              ref={sliderRef}
              className="flex sm:hidden overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {tests.map((test, index) => {
                const Icon = test.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="min-w-[80%] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 snap-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-medical-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {test.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {test.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* 💻 Desktop Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-4">
              {tests.map((test, index) => {
                const Icon = test.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-medical-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {test.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {test.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
