import React from 'react';
import { motion } from 'motion/react';
import { Building2, Wifi, Pill, Microscope, Baby, Wind, Sun, Syringe, Award, CreditCard } from 'lucide-react';

const facilities = [
  { name: "OPD & Indoor Facility", icon: Building2 },
  { name: "AC Rooms with WiFi", icon: Wifi },
  { name: "In-house Pharmacy", icon: Pill },
  { name: "In-house Laboratory", icon: Microscope },
  { name: "NICU & PICU Facility", icon: Baby },
  { name: "Centralised Oxygen", icon: Wind },
  { name: "Phototherapy", icon: Sun },
  { name: "Vaccination Center", icon: Syringe },
  { name: "10+ Years Experienced Doctors", icon: Award },
  { name: "Cashless & Mediclaim Facility", icon: CreditCard }
];

export function Facilities() {
  return (
    <section className="py-20 bg-medical-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-medical-300">Us</span></h2>
          <p className="text-medical-100/80 text-lg">
            Equipped with modern infrastructure to ensure comfort, safety, and the best possible care for our patients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/20 transition-colors"
              >
                <Icon className="w-8 h-8 text-medical-300 mb-3" />
                <h4 className="font-semibold text-sm md:text-base">{facility.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
