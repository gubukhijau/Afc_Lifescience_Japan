import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>PENGALAMAN NYATA</span>
            <span aria-hidden="true">·</span>
            <span>BUKTI PERBAIKAN KESEHATAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Kisah Pemulihan & Ulasan Pengguna Resmi AFC Life Science
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Dengarkan langsung pengalaman para konsumen dan tenaga medis yang telah merasakan 
            manfaat regenerasi seluler dari formulasi peptida Jepang.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-red-900 bg-red-100/60 px-2.5 py-0.5 rounded">
                    {t.product}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{t.name}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5 font-medium">
                    <span>{t.age}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.city}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-700">{t.condition}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Terverifikasi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout */}
        <div className="mt-8 text-center text-stone-400 text-[11px]">
          *Hasil yang dirasakan setiap individu dapat bervariasi bergantung pada usia, metabolisme, dan tingkat keparahan kondisi fisik.
        </div>
      </div>
    </section>
  );
};
