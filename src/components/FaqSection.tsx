import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>INFORMASI KONSUMEN</span>
            <span aria-hidden="true">·</span>
            <span>TANYA JAWAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm text-stone-600 mt-3 font-normal leading-relaxed">
            Temukan jawaban lengkap seputar keamanan, legalitas BPOM, aturan konsumsi, dan pengiriman produk AFC Japan.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-red-900 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 text-center bg-white border border-stone-200 rounded-xl p-5 text-xs text-stone-600">
          Punya pertanyaan medis khusus mengenai kondisi Anda?{' '}
          <a href="#order" className="font-semibold text-red-900 underline hover:text-red-950">
            Hubungi konsultan kesehatan kami via WhatsApp
          </a>{' '}
          untuk konsultasi privat tanpa dipungut biaya.
        </div>
      </div>
    </section>
  );
};
