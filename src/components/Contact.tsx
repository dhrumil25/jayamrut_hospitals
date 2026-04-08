import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We are here to help. Contact us for appointments, inquiries, or
            emergency assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-medical-50 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-medical-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Hospital Address
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  A-205, 311, 312 Second and Third Floor,
                  <br />
                  Glade Centrum, Above Khodiyar Nagar Char Rasta,
                  <br />
                  New VIP Ring Road, Vadodara
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-medical-50 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-medical-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Contact Numbers
                </h3>
                <div className="flex flex-col gap-1 text-slate-600">
                  <a
                    href="tel:9974833816"
                    className="hover:text-medical-600 transition-colors"
                  >
                    +91 99748 33816 (<strong>For appointment</strong>)
                  </a>
                  <a
                    href="tel:9702013062"
                    className="hover:text-medical-600 transition-colors"
                  >
                    +91 97020 13062 (<strong>Dr. Palak Shah</strong>)
                  </a>
                  <a
                    href="tel:9098040888"
                    className="hover:text-medical-600 transition-colors"
                  >
                    +91 90980 40888 (<strong>Dr. Ruchi Shah</strong>)
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-medical-50 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-medical-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Consulting Hours
                </h3>
                <div className="space-y-2 text-slate-600">
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Mon - Sat:</span>
                    <span>10:30 am - 1:30 pm</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium"></span>
                    <span>5:30 pm - 8:30 pm</span>
                  </p>
                  <p className="flex justify-between max-w-xs text-medical-600 font-medium pt-1">
                    <span>Sunday:</span>
                    <span>On Appointment</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative transition-transform duration-300 hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.283191187189!2d73.229753!3d22.3165605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf5c54c3cf59%3A0xdd002f766c00fe58!2sJayamrut%20Hospital!5e0!3m2!1sen!2sin!4v1691478372641!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Jayamrut Hospital Location"
            />
            {/* Optional overlay for subtle gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
