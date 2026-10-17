import React from 'react';
import { ShieldCheck, Award, FileCheck2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { AFC_STATS } from '../data/products';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onScrollToProducts }) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_afc_japan_science_1792236636114.jpg"
          alt="AFC Life Science Japan Laboratory"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl">
          {/* Subtle Japanese editorial kicker (unboxed, no pill badges) */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-amber-300/90 tracking-wider uppercase mb-4">
            <span>日本最高峰の健康科学</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>AFC-HD AMS Life Science Co., Ltd. Shizuoka</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 [text-wrap:balance]">
            Inovasi Terdepan Terapi Peptida & Regenerasi Sel Alami dari Jepang
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl font-light">
            Formulasi nutraseutikal premium bersertifikasi BPOM RI dan Halal resmi, didukung oleh 
            Marine Placenta Oncorhynchus Keta Salmon Hokkaido, DNA Salmon Milt, dan Hak Paten Fungsi 
            teruji klinis dari laboratorium farmasi tertua & terbesar di Shizuoka, Jepang.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onScrollToProducts}
              className="px-6 py-3.5 bg-red-700 hover:bg-red-800 text-white rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Jelajahi Produk Pilihan</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </button>
          </div>

          {/* Quick Credential Highlights */}
          <div className="pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Izin Resmi BPOM RI & Sertifikasi Halal</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Monde Selection Grand Gold Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Terdaftar di Direktori Medis MIMS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Stats Strip */}
      <div className="relative z-10 bg-stone-950/80 border-t border-stone-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {AFC_STATS.map((stat, idx) => (
              <div key={idx} className="border-l-0 md:border-l border-stone-800 first:border-l-0 md:pl-6">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-stone-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-400 mt-0.5 leading-snug line-clamp-2">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
