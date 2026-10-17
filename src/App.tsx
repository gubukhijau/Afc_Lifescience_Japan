/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { ProductModal } from './components/ProductModal';
import { PatentCertifications } from './components/PatentCertifications';
import { InteractiveDoseCalculator } from './components/InteractiveDoseCalculator';
import { SublingualGuide } from './components/SublingualGuide';
import { AuthenticityGuide } from './components/AuthenticityGuide';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MarketingPlanHero } from './components/MarketingPlanHero';
import { PackagesComparison } from './components/PackagesComparison';
import { BonusTypesSection } from './components/BonusTypesSection';
import { YearlyRankRewards } from './components/YearlyRankRewards';
import { InteractiveBonusSimulator } from './components/InteractiveBonusSimulator';
import { MarketingPlanFaq } from './components/MarketingPlanFaq';
import { AFCProduct } from './data/products';
import { MemberPackage } from './data/marketingPlan';
import { TrendingUp, ArrowRight, FileText, MessageCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'product' | 'marketing-plan'>('product');
  const [selectedProduct, setSelectedProduct] = useState<AFCProduct | null>(null);
  const [consultationText, setConsultationText] = useState<string>('');

  const handleOpenConsultation = () => {
    const el = document.getElementById('order');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById('produk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPackages = () => {
    const el = document.getElementById('paket');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationWithText = (msg: string) => {
    setConsultationText(msg);
    const el = document.getElementById('order');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderFromModal = (product: AFCProduct, qty: number) => {
    const totalPrice = product.officialPrice * qty;
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(totalPrice);

    const message = `Halo AFC Life Science, saya ingin memesan produk resmi:\n*Produk:* ${product.name}\n*Jumlah:* ${qty} Box\n*Estimasi Harga:* ${formattedPrice}\n*Nomor Izin BPOM:* ${product.bpomNumber}\n\nMohon info ketersediaan stok dengan segel barcode hologram utuh. Terima kasih!`;
    const waUrl = `https://wa.me/6285743678786?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSelectPackage = (pkg: MemberPackage) => {
    const msg = `Halo AFC Life Science Official, saya berminat mendaftar paket kemitraan *${pkg.name}* (${pkg.boxCount} Box, ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.estimatedPrice)}).\n\nMohon petunjuk pendaftaran akun member resmi dan pemilihan produk. Terima kasih!`;
    handleConsultationWithText(msg);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col text-stone-900 selection:bg-red-900 selection:text-white">
      {/* 3-Zone Top Bar Navigation with View Switcher */}
      <Navbar
        currentView={currentView}
        onViewChange={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'product' ? (
          <>
            {/* Hero Section */}
            <Hero
              onOpenConsultation={handleOpenConsultation}
              onScrollToProducts={handleScrollToProducts}
            />

            {/* Product Catalog Section (afc-lifescience.com/product.html) */}
            <ProductSection
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickOrder={(p) => setSelectedProduct(p)}
            />

            {/* Prominent Marketing Plan Banner in Product View */}
            <section className="bg-stone-900 text-white py-12 border-y border-stone-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>PELUANG BISNIS RESMI AFC</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Tertarik Menjadi Mitra Bisnis AFC Life Science?
                  </h3>
                  <p className="text-xs text-stone-400 max-w-xl">
                    Pelajari sistem kompensasi Marketing Plan Asayama dengan bonus harian, bonus pairing hingga Rp 660 Juta/bulan, dan reward Bushido 3 Miliar.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setCurrentView('marketing-plan');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-3 bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Buka Halaman Marketing Plan</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Function Patents & BPOM Certifications */}
            <PatentCertifications />

            {/* Interactive Dose & Product Recommendation Calculator */}
            <InteractiveDoseCalculator
              onSelectProduct={(p) => setSelectedProduct(p)}
              onOpenConsultationWithText={handleConsultationWithText}
            />

            {/* Scientific Sublingual Consumption Guide */}
            <SublingualGuide />

            {/* Authenticity & Barcode Hologram Verification */}
            <AuthenticityGuide />

            {/* Verified User Testimonials */}
            <Testimonials />

            {/* Frequently Asked Questions */}
            <FaqSection />

            {/* Lead Capture, Order & Direct WhatsApp Form */}
            <ContactCta initialMessage={consultationText} />
          </>
        ) : (
          <>
            {/* Dedicated Marketing Plan Asayama View */}
            <MarketingPlanHero
              onScrollToPackages={handleScrollToPackages}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Packages Comparison (Ruby, Sapphire, Diamond) */}
            <PackagesComparison onSelectPackage={handleSelectPackage} />

            {/* 4 Types of Bonuses (Sponsor, Pass Up, Pairing, Unilevel) */}
            <BonusTypesSection />

            {/* Yearly Leadership Rank Rewards (Toreda to Bushido) */}
            <YearlyRankRewards />

            {/* Live Interactive Income Simulator */}
            <InteractiveBonusSimulator onOpenConsultationWithText={handleConsultationWithText} />

            {/* Marketing Plan FAQ + Official PDF Download */}
            <MarketingPlanFaq />

            {/* Partnership Consultation Form & Direct WhatsApp */}
            <ContactCta initialMessage={consultationText || 'Konsultasi Kemitraan Member AFC'} />
          </>
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOrder={handleOrderFromModal}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpen={handleOpenConsultation} />

      {/* Quiet Compliant Footer */}
      <Footer />
    </div>
  );
}
