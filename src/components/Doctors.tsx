import React, { useState } from "react";
import { motion } from "motion/react";
import { Award, CheckCircle2 } from "lucide-react";
import palakShah from "../assests/JA_DR_PALAK_1.jpeg";
import ruchiShah from "../assests/JA_DR_RUCHI.jpeg";

const doctors = [
  {
    name: "Dr. Palak Shah",
    qualifications: "MBBS, DNB (Paediatrics), FACI, ICAAI, PAAI",
    title: "Allergist and Clinical Immunologist",
    roles: ["Child Specialist (Pediatrician)", "Allergy & Asthma Specialist"],
    experience: "Over Decade of Experience",
    image: palakShah,
    specializations: [
      "Child Specialist (Paediatrician)",
      "Allergic Asthma",
      "Urticaria",
      "Food Allergy",
      "Cow Milk Protein Allergy",
      "Atopic Dermatitis",
      "Allergic Rhinitis",
      "Drug Allergy",
      "Drug Desensitisation",
      "Immunotherapy",
      "Biological Treatments",
    ],
  },
  {
    name: "Dr. Ruchi Shah",
    qualifications: "BDS, MDS",
    title: "Root Canal Treatment & Cosmetic Dentistry Specialist",
    roles: ["Dental Surgeon", "Endodontist"],
    experience: "Over Decade of Experience",
    image: ruchiShah,
    specializations: [
      "Root Canal Treatment",
      "Endodontic Treatment",
      "Dental Aesthetic Procedures",
      "Full Mouth Rehabilitation",
      "Orthodontics / Braces",
      "Dental Prostheses / Dentures",
      "Periodontics",
      "Oral Surgical Procedures",
      "Gum Treatment",
      "Extraction and Tooth Replacement",
    ],
  },
];

export function Doctors() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="doctors" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Specialists</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Highly qualified and experienced medical professionals dedicated to
            providing the best care for you and your family.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => {
            const isFlipped = flippedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-[500px] [perspective:1000px]"
                onClick={() => toggleFlip(index)} // mobile tap
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] shadow-xl shadow-slate-200/50 rounded-3xl
                    group hover:[transform:rotateY(180deg)]
                    ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                  `}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col">
                    <div className="h-3/5 relative overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="h-2/5 p-6 flex flex-col justify-center items-center text-center bg-white">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-sm font-medium text-medical-600 mb-2">
                        {doctor.qualifications}
                      </p>
                      <p className="font-semibold text-slate-800">
                        {doctor.title}
                      </p>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-medical-800 to-medical-900 rounded-3xl border border-medical-700 overflow-hidden flex flex-col p-8 text-white">
                    <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                    <div className="flex items-center gap-2 mb-6 text-sm font-medium text-medical-200 bg-medical-800/50 w-fit px-3 py-1.5 rounded-full border border-medical-700">
                      <Award className="w-4 h-4" />
                      <span>Experience: {doctor.experience}</span>
                    </div>

                    <h4 className="text-sm font-bold text-medical-300 mb-4 uppercase tracking-wider">
                      Key Specializations
                    </h4>
                    <ul className="grid grid-cols-1 gap-3 overflow-y-auto pr-2">
                      {doctor.specializations.map((spec, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-medical-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <a
                        href="#contact"
                        className="block w-full text-center bg-white text-medical-900 py-3 rounded-xl font-bold hover:bg-medical-50 transition-colors shadow-lg"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
