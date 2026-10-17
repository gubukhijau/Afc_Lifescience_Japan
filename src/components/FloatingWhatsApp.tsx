import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpen: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpen }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-xl border border-stone-200 text-xs text-stone-800 animate-in fade-in slide-in-from-bottom-2">
          <span>Butuh konsultasi dosis resmi AFC?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/6285743678786?text=Halo%20AFC%20Life%20Science%2C%20saya%20ingin%20konsultasi%20produk%20original%20dan%20peluang%20kemitraan%20resmi."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative"
        aria-label="Chat WhatsApp Konsultan AFC 6285743678786"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
};
