import React from 'react';
import { DollarSign, Repeat, ArrowUpRight, Wallet, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { MARKETING_PLAN_ADVANTAGES } from '../data/marketingPlan';

export const BonusTypesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>STRUKTUR KOMPENSASI</span>
            <span aria-hidden="true">·</span>
            <span>PLAN A & PLAN B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            4 Sumber Penghasilan Utama dalam Marketing Plan Asayama
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Kombinasi pendapatan aktif harian yang cepat dan pendapatan pasif bulanan berkelanjutan 
            yang dirancang tanpa sistem tutup poin yang memberatkan.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 1. Bonus Sponsor */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-red-900 uppercase tracking-wider bg-red-100/70 px-2.5 py-1 rounded">
                BONUS 01 · HARIAN
              </span>
              <span className="text-xs text-stone-500 font-medium">Plan A</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              Bonus Sponsor (Direct Bonus)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Diberikan setiap kali Anda secara langsung mereferensikan mitra baru yang membeli paket keanggotaan. 
              Besaran bonus sponsor ditentukan oleh paket keanggotaan akun Anda:
            </p>
            <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Sebagai Ruby rekrut Diamond:</span>
                <span className="font-mono font-bold text-stone-900">Rp 1.800.000</span>
              </div>
              <div className="flex justify-between">
                <span>Sebagai Sapphire rekrut Diamond:</span>
                <span className="font-mono font-bold text-stone-900">Rp 2.700.000</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-bold border-t border-stone-100 pt-2">
                <span>Sebagai Diamond rekrut Diamond:</span>
                <span className="font-mono text-sm">Rp 3.300.000 (Maksimal)</span>
              </div>
            </div>
          </div>

          {/* 2. Bonus Pass Up */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100/70 px-2.5 py-1 rounded">
                BONUS 02 · PRIVILEGE DIAMOND
              </span>
              <span className="text-xs text-stone-500 font-medium">Plan A</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              Bonus Pass Up (Hak Istimewa Diamond)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Jika downline Anda yang berperingkat Ruby atau Sapphire merekrut mitra berperingkat lebih tinggi, 
              selisih bonus sponsor yang tidak bisa mereka terima akan otomatis dialirkan (Pass Up) ke upline Diamond terdekat.
            </p>
            <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-2 text-xs text-stone-700">
              <div className="p-2.5 bg-amber-50 rounded-lg text-amber-950 font-medium">
                Contoh: Downline Ruby Anda merekrut 1 Diamond (Bonus total Rp 3.300.000).
                <div className="flex justify-between mt-1 text-xs">
                  <span>Diterima Downline Ruby:</span>
                  <span className="font-mono font-bold">Rp 1.800.000</span>
                </div>
                <div className="flex justify-between mt-0.5 text-xs font-bold text-emerald-800">
                  <span>Pass Up Masuk ke Rekening Anda (Diamond):</span>
                  <span className="font-mono">Rp 1.500.000</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Bonus Pairing */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-100/70 px-2.5 py-1 rounded">
                BONUS 03 · PENGHASILAN TERBESAR
              </span>
              <span className="text-xs text-stone-500 font-medium">Plan A</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              Bonus Pairing (Pasangan Omset Binary)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dihitung saat terjadi keseimbangan omset antara Tim Kiri dan Tim Kanan (1 pasang = 150 BV). 
              Sisa omset pada kaki besar tidak akan hangus (disimpan untuk hari berikutnya).
            </p>
            <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Ruby (Max 10 pasang/hari):</span>
                <span className="font-mono font-bold">Rp 150.000 / pasang</span>
              </div>
              <div className="flex justify-between">
                <span>Sapphire (Max 60 pasang/hari):</span>
                <span className="font-mono font-bold">Rp 200.000 & Rp 100.000</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-bold border-t border-stone-100 pt-2">
                <span>Diamond (Max 200 pasang/hari):</span>
                <span className="font-mono text-sm">Rp 300.000 & Rp 100.000 (Max Rp 22 Juta/hari)</span>
              </div>
            </div>
          </div>

          {/* 4. Plan B Unilevel Bonus */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-purple-900 uppercase tracking-wider bg-purple-100/70 px-2.5 py-1 rounded">
                BONUS 04 · BULANAN & ROYALTI
              </span>
              <span className="text-xs text-stone-500 font-medium">Plan B</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              Bonus Unilevel (Auto-Maintenance 80:20)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Setiap penarikan bonus harian dibagi secara otomatis: <strong>80% ditransfer tunai</strong> ke rekening bank Anda, 
              dan <strong>20% disimpan di Product Wallet</strong> (maksimal terkumpul Rp 1.650.000 / bulan).
            </p>
            <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Product Wallet digunakan untuk klaim produk gratis setiap bulan (Auto-Maintenance tanpa keluar uang dari kantong).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Omset Product Wallet dari seluruh jaringan menghasilkan royalti unilevel hingga 10 level kedalaman setiap bulan.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Keunggulan Sistem Bisnis Asayama */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-red-900 uppercase tracking-wider block">
              MENGAPA PILIH BISNIS AFC?
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">
              Keunggulan Kompetitif Sistem Kemitraan AFC Life Science
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETING_PLAN_ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 space-y-2">
                <div className="font-mono text-xs font-bold text-red-800">
                  0{idx + 1}.
                </div>
                <h4 className="text-sm font-bold text-stone-900">{adv.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
