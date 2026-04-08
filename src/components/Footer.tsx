import React from "react";
import Logo from "../assests/JA_Logo.png"; // make sure this path matches your project

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Jayamrut Logo"
                className="w-14 h-10 rounded-lg object-cover"
              />
              <span className="font-display font-bold text-xl text-white">
                JayAmrut
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Advanced Child Care, Allergy, Asthma & Dental Care. Providing
              world-class medical facilities in Vadodara.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-medical-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="hover:text-medical-400 transition-colors"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#branches"
                  className="hover:text-medical-400 transition-colors"
                >
                  Branches
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-medical-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Child Specialist / Pediatrician</li>
              <li>Allergy & Asthma Treatment</li>
              <li>Root Canal Specialist</li>
              <li>Cosmetic Dentistry</li>
              <li>Immunotherapy</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Jayamrut Hospital. All rights
            reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://28-media.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-medical-400 hover:text-medical-300 transition-colors pr-15"
            >
              28-media.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
