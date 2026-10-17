import React from 'react';
import { Sparkles, HeartPulse, Droplets, Clock, ShieldCheck } from 'lucide-react';

export const SublingualGuide: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Pagi Saat Perut Kosong',
      desc: 'Waktu paling ideal adalah segera setelah bangun tidur pagi hari sebelum menyantap sarapan atau minum kopi/teh.',
      note: 'Penyerapan mukosa optimal saat saluran cerna belum aktif mencerna makanan berat.'
    },
    {
      step: '02',
      title: 'Tuang di Bawah Lidah (Sublingual)',
      desc: 'Buka sachet dan taburkan bubuk sedikit demi sedikit tepat di rongga bawah lidah, jangan langsung ditelan.',
      note: 'Rongga bawah lidah kaya akan pembuluh darah kapiler halus (mukosa sublingual).'
    },
    {
      step: '03',
      title: 'Larut Alami Oleh Air Liur',
      desc: 'Biarkan butiran peptida larut perlahan oleh enzim air liur selama 10–20 detik hingga terserap ke aliran darah.',
      note: 'Menghindari kerusakan peptida rantai pendek oleh asam lambung yang keras.'
    },
    {
      step: '04',
      title: 'Bilas dengan Air Hangat',
      desc: 'Setelah bubuk meresap sempurna, minumlah 1–2 gelas air putih hangat untuk mempercepat sirkulasi metabolik.',
      note: 'Membantu distribusi peptida aktif ke seluruh organ dan sel yang membutuhkan perbaikan.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>METODE PENYERAPAN BIOTEKNOLOGI</span>
            <span aria-hidden="true">·</span>
            <span>EFISIENSI MAKSIMAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Kenapa Ditaruh di Bawah Lidah? Rahasia Efektivitas Terapi Peptida
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            SOP Subarashi dan Utsukushhii diformulasikan dengan ukuran molekul nano-peptide ultra kecil (~600 Dalton). 
            Metode konsumsi sublingual menjamin peptida aktif langsung terserap ke pembuluh darah tanpa terurai 
            oleh asam lambung.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div>
                <span className="font-mono text-2xl font-extrabold text-red-900 block mb-3">
                  {st.step}
                </span>
                <h3 className="text-base font-bold text-stone-900 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80">
                <span className="text-[11px] text-stone-500 font-medium leading-tight block italic">
                  💡 {st.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              PERBANDINGAN BIOAVAILABILITAS
            </span>
            <h4 className="text-base font-bold text-stone-900">
              Penyerapan Sublingual vs Kapsul Biasa yang Ditelan
            </h4>
            <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
              Suplemen tablet/kapsul konvensional melewati lambung dan hati (First-Pass Metabolism) yang dapat 
              merusak hingga 70% kandungan aktif. Metode sublingual AFC memastikan nutrisi masuk utuh ke aliran darah sistemik.
            </p>
          </div>
          <div className="shrink-0 bg-white border border-amber-200/90 rounded-xl px-5 py-3 text-center">
            <span className="text-2xl font-extrabold text-amber-950 font-mono">300%</span>
            <span className="text-[11px] text-stone-500 block font-medium">Lebih Cepat Bekerja</span>
          </div>
        </div>
      </div>
    </section>
  );
};
