import React, { useState } from 'react';
import { MessageCircle, Menu, X, FileText, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentView: 'product' | 'marketing-plan';
  onViewChange: (view: 'product' | 'marketing-plan') => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => {
            onViewChange('product');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:text-red-900 transition-colors text-left cursor-pointer"
        >
          <span className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center text-sm font-black">
            AFC
          </span>
          <span>AFC Life Science Japan</span>
        </button>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => {
              onViewChange('product');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentView === 'product'
                ? 'text-red-900 font-bold underline decoration-2 underline-offset-8'
                : 'hover:text-red-900'
            }`}
          >
            Katalog Produk
          </button>

          <button
            onClick={() => {
              onViewChange('marketing-plan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentView === 'marketing-plan'
                ? 'text-red-900 font-bold underline decoration-2 underline-offset-8'
                : 'hover:text-red-900'
            }`}
          >
            Marketing Plan Asayama
          </button>

          {currentView === 'product' ? (
            <>
              <a href="#paten" className="hover:text-red-900 transition-colors whitespace-nowrap shrink-0">
                Hak Paten & BPOM
              </a>
              <a href="#kalkulator" className="hover:text-red-900 transition-colors whitespace-nowrap shrink-0">
                Rekomendasi Paket
              </a>
              <a href="#faq" className="hover:text-red-900 transition-colors whitespace-nowrap shrink-0">
                FAQ
              </a>
            </>
          ) : (
            <>
              <a href="#paket" className="hover:text-red-900 transition-colors whitespace-nowrap shrink-0">
                Paket Kemitraan
              </a>
              <a href="#peringkat" className="hover:text-red-900 transition-colors whitespace-nowrap shrink-0">
                Reward Bushido
              </a>
              <a href="#simulasi" className="hover:text-red-900 transition-colors whitespace-nowrap shrink-0">
                Simulasi Bonus
              </a>
            </>
          )}
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-sm font-semibold shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasi WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-stone-200 bg-white px-5 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="p-2 bg-stone-100 rounded-xl flex gap-2">
            <button
              onClick={() => {
                onViewChange('product');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                currentView === 'product' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
              }`}
            >
              Katalog Produk
            </button>
            <button
              onClick={() => {
                onViewChange('marketing-plan');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                currentView === 'marketing-plan' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
              }`}
            >
              Marketing Plan
            </button>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm font-medium text-stone-800">
            {currentView === 'product' ? (
              <>
                <a 
                  href="#produk" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-red-800"
                >
                  Katalog Produk Resmi
                </a>
                <a 
                  href="#paten" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-red-800"
                >
                  Hak Paten & BPOM
                </a>
                <a 
                  href="#kalkulator" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-red-800"
                >
                  Kalkulator Rekomendasi
                </a>
                <a 
                  href="#keaslian" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-red-800"
                >
                  Cek Keaslian & Barcode
                </a>
              </>
            ) : (
              <>
                <a 
                  href="#paket" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-red-800"
                >
                  Paket Ruby, Sapphire, Diamond
                </a>
                <a 
                  href="#peringkat" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-red-800"
                >
                  Peringkat Bushido & Reward
                </a>
                <a 
                  href="#simulasi" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-red-800"
                >
                  Kalkulator Simulasi Bonus
                </a>
              </>
            )}
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-800"
            >
              Tanya Jawab (FAQ)
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-700 text-white rounded-lg text-sm font-semibold shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi WhatsApp Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
