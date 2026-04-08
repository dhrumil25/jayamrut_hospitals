import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Baby, Wind, Stethoscope, ArrowRight, X } from "lucide-react";

const branches = [
  {
    id: "child-care",
    title: "Amrut Child Care",
    description:
      "Comprehensive pediatric care from newborns to adolescents with state-of-the-art NICU and PICU facilities.",
    icon: Baby,
    color: "from-pink-500 to-rose-400",
    bgLight: "bg-pink-50",
    iconColor: "text-pink-500",
    detailsType: "Facilities",
    details: [
      "OPD and Indoor Facility",
      "AC Rooms with WiFi",
      "In-house Pharmacy",
      "In-house Laboratory",
      "NICU and PICU Facility",
      "Centralised Oxygen & Nebulisation Facility",
      "Phototherapy for Newborn",
      "Vaccination for Pediatric and Adult",
    ],
  },
  {
    id: "allergy-asthma",
    title: "Amrut Allergy & Asthma Centre",
    description:
      "Advanced diagnosis and treatment for all types of allergies, asthma, and immunological conditions.",
    icon: Wind,
    color: "from-medical-600 to-medical-400",
    bgLight: "bg-medical-50",
    iconColor: "text-medical-600",
    detailsType: "Services",
    details: [
      "Allergic Asthma",
      "Allergic Rhinitis",
      "Urticaria",
      "Drug Allergy",
      "Food Allergy",
      "Drug Desensitization",
      "Cow Milk Protein Allergy",
      "Immunotherapy",
      "Atopic Dermatitis",
    ],
  },
  {
    id: "dental-care",
    title: "Ruchi Dental & Root Canal Centre",
    description:
      "Expert dental care specializing in root canals, cosmetic dentistry, and full mouth rehabilitation.",
    icon: Stethoscope,
    color: "from-teal-500 to-emerald-400",
    bgLight: "bg-teal-50",
    iconColor: "text-teal-600",
    detailsType: "Services",
    details: [
      "Root Canal Treatment",
      "We Specialise in Endodontic Complications Management",
      "Dental Aesthetics Procedures",
      "Full Mouth Rehabilitation",
      "Orthodontics/Braces treatment",
      "Dental Prostheses or dentures",
      "Periodontics",
      "Oral surgical procedures",
      "Gum Treatment",
      "Extraction of carious of impacted tooth & their replacement",
    ],
  },
];

export function Branches() {
  const [selectedBranch, setSelectedBranch] = useState<
    (typeof branches)[0] | null
  >(null);

  return (
    <section id="branches" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Specialized <span className="text-gradient">Branches</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Three dedicated centers of excellence under one roof, providing
            focused and expert care for your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {branches.map((branch, index) => {
            const Icon = branch.icon;
            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-card rounded-3xl p-8 group transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                <div
                  className={`absolute -inset-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl ${branch.bgLight}`}
                ></div>

                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl ${branch.bgLight} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${branch.iconColor}`} />
                </div>

                <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4">
                  {branch.title}
                </h3>

                <p className="relative z-10 text-slate-600 mb-8 flex-grow leading-relaxed">
                  {branch.description}
                </p>

                <button
                  onClick={() => setSelectedBranch(branch)}
                  className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group/btn mt-auto"
                >
                  <span className="relative pb-1">View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBranch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedBranch(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBranch(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className={`w-16 h-16 rounded-2xl ${selectedBranch.bgLight} flex items-center justify-center mb-6`}
              >
                <selectedBranch.icon
                  className={`w-8 h-8 ${selectedBranch.iconColor}`}
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {selectedBranch.title}
              </h3>
              <p className="text-slate-600 mb-6">
                {selectedBranch.description}
              </p>

              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">
                {selectedBranch.detailsType}
              </h4>
              <ul className="space-y-3">
                {selectedBranch.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <div
                      className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${selectedBranch.iconColor.replace("text-", "bg-")}`}
                    ></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* ✅ ONLY CHANGE HERE */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href="tel:9974833816"
                  onClick={() => setSelectedBranch(null)}
                  className="w-full flex items-center justify-center gap-2 bg-medical-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
