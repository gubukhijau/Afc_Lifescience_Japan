import React from 'react';
import { ArrowDown, FileText, ExternalLink, ShieldCheck, TrendingUp, Award, MessageCircle } from 'lucide-react';

interface MarketingPlanHeroProps {
  onScrollToPackages: () => void;
  onOpenConsultation: () => void;
}

export const MarketingPlanHero: React.FC<MarketingPlanHeroProps> = ({
  onScrollToPackages,
  onOpenConsultation
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image with contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/afc_leadership_summit_1792237266638.jpg"
          alt="AFC Life Science Global Leadership Summit"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-20 sm:pb-24">
        <div className="max-w-3xl">
          {/* Japanese business kicker */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-amber-300 tracking-wider uppercase mb-4 font-mono">
            <span>PT ASAYAMA FAMILI CAHAYA INDONESIA</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>AFC-HD AMS LIFE SCIENCE JAPAN</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 [text-wrap:balance]">
            Marketing Plan Asayama: Peluang Kemitraan Bisnis Berstandar Jepang
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl font-light">
            Sistem kompensasi direct selling resmi dengan pembayaran bonus harian, akumulasi poin tanpa hangus, 
            potensi penghasilan pairing hingga Rp 660 Juta per bulan, serta penghargaan tahunan Bushido senilai 
            lebih dari 3 Miliar Rupiah cash.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onScrollToPackages}
              className="px-6 py-3.5 bg-red-700 hover:bg-red-800 text-white rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pelajari Paket Kemitraan</span>
            </button>

            <a
              href="https://afc-lifescience.com/download/MARKETING_PLAN_ASAYAMA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-stone-700 shadow-sm"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Unduh Dokumen PDF Resmi</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Daftar Kemitraan via WhatsApp</span>
            </button>
          </div>

          {/* Key Advantages Summary */}
          <div className="pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Bonus Dibayar Harian (Daily Payout)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Izin AP2LI & Legalitas Resmi Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Sistem Dapat Diwariskan ke Keluarga</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
