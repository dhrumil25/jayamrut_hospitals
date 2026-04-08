import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import testimonial1 from "../assests/testimonials/alergy_testimonial_1.jpg";
import testimonial2 from "../assests/testimonials/alergy_testimonial_2.jpg";
import testimonial3 from "../assests/testimonials/alergy_testimonial_3.jpg";
import testimonial4 from "../assests/testimonials/dental_before_after_1.png";
import testimonial5 from "../assests/testimonials/dental_before_after_2.jpg";
import testimonial6 from "../assests/testimonials/dental_before_after_3.jpg";

const photos = [
  {
    id: 1,
    src: testimonial1,
    alt: "Allergy Testimonial 1",
    category: "Testimonials",
  },
  {
    id: 2,
    src: testimonial2,
    alt: "Allergy Testimonial 2",
    category: "Testimonials",
  },
  {
    id: 3,
    src: testimonial3,
    alt: "Allergy Testimonial 3",
    category: "Testimonials",
  },
  {
    id: 4,
    src: testimonial4,
    alt: "Dental Before/After 1",
    category: "Testimonials",
  },
  {
    id: 5,
    src: testimonial5,
    alt: "Dental Before/After 2",
    category: "Testimonials",
  },
  {
    id: 6,
    src: testimonial6,
    alt: "Dental Before/After 3",
    category: "Testimonials",
  },
];

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Patient <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Take a visual tour of our result and happy patients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-medical-900/0 group-hover:bg-medical-900/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedPhoto}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
