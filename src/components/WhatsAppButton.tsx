import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const preMessage = encodeURIComponent(
    "Hello Doctor! I want to book an appointment.",
  );
  const whatsappLink = `https://wa.me/919702013062?text=${preMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full bg-green-500 opacity-50 animate-ping"></span>
      <MessageCircle className="w-7 h-7 relative z-10" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></span>
      </span>
    </motion.a>
  );
}
