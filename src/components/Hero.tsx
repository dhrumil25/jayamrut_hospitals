import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  ArrowRight,
  Activity,
  Shield,
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
const heroVideo = new URL("../assests/JA_hero_video.mp4", import.meta.url).href;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
            className="relative lg:ml-auto w-full max-w-4xl mx-auto"
          >
            <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl shadow-medical-900/30 border-8 border-white">
              {/* ✅ Video with Play/Pause Button */}
              <video
                ref={videoRef}
                className="absolute inset-0 min-w-full min-h-full object-cover"
                poster="https://via.placeholder.com/800x450?text=Hospital+Video"
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                muted={isMuted}
                playsInline
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent" />

              <button
                onClick={togglePlayPause}
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 p-4 shadow-lg transition-all duration-300 hover:bg-white"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-medical-600" />
                ) : (
                  <Play className="w-8 h-8 text-medical-600 ml-1" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="absolute bottom-4 left-4 z-20 rounded-full bg-white/90 p-3 shadow-lg transition-colors duration-300 hover:bg-white"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-medical-600" />
                ) : (
                  <Volume2 className="w-5 h-5 text-medical-600" />
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Cashless & Mediclaim Facility Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-medical-600 to-medical-500 p-8 md:p-12 shadow-2xl shadow-medical-600/30"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Cashless & Mediclaim Facility
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We accept all major insurance plans and provide seamless cashless
              treatments. Your health is our priority without financial burden.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
