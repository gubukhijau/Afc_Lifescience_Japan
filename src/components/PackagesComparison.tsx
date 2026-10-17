import React from 'react';
import { Check, Zap, Crown, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { MEMBER_PACKAGES, MemberPackage } from '../data/marketingPlan';

interface PackagesComparisonProps {
  onSelectPackage: (pkg: MemberPackage) => void;
}

export const PackagesComparison: React.FC<PackagesComparisonProps> = ({ onSelectPackage }) => {
  return (
    <section id="paket" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>PAKET KEMITRAAN PLAN A</span>
            <span aria-hidden="true">·</span>
            <span>ASAYAMA MARKETING PLAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Pilihan Paket Kemitraan Member AFC Life Science
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Anda dapat memulai bisnis kemitraan ini dengan membeli produk resmi AFC sesuai paket yang diinginkan. 
            Tersedia fasilitas <strong>Upgrade Akumulasi Tanpa Batas Waktu</strong> dari Ruby ke Sapphire hingga Diamond.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {MEMBER_PACKAGES.map((pkg) => {
            const isDiamond = pkg.id === 'diamond';
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isDiamond
                    ? 'bg-stone-900 text-white border-2 border-amber-500/80 shadow-xl'
                    : 'bg-white text-stone-900 border border-stone-200 shadow-xs'
                }`}
              >
                {isDiamond && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Paket Terlengkap & Tertinggi (Best Value)</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isDiamond ? 'text-amber-400' : 'text-red-900'}`}>
                      {pkg.name}
                    </span>
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-md ${isDiamond ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>
                      {pkg.bv} BV
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.estimatedPrice)}
                    </span>
                    <span className={`block text-xs mt-1 ${isDiamond ? 'text-stone-400' : 'text-stone-500'}`}>
                      Mendapatkan {pkg.boxCount} Box Produk Pilihan (Bebas Kombinasi)
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className={`p-4 rounded-xl mb-6 space-y-2 text-xs ${isDiamond ? 'bg-stone-800/80 border border-stone-700' : 'bg-stone-50 border border-stone-150'}`}>
                    <div className="flex items-center justify-between">
                      <span className={isDiamond ? 'text-stone-400' : 'text-stone-500'}>Maksimal Pasang Harian:</span>
                      <span className="font-bold font-mono">{pkg.dailyMaxPairs} Pasang / Hari</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDiamond ? 'text-stone-400' : 'text-stone-500'}>Potensi Pairing Bulanan:</span>
                      <span className={`font-black font-mono ${isDiamond ? 'text-amber-400' : 'text-red-900'}`}>
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.maxMonthlyIncome)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDiamond ? 'text-stone-400' : 'text-stone-500'}>Hak Bonus Pass Up:</span>
                      <span className="font-semibold">
                        {pkg.passUpEligible ? 'Ya (100% Hak Penuh)' : 'Tidak Tersedia'}
                      </span>
                    </div>
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 text-xs mb-8">
                    <div className="font-bold text-[11px] uppercase tracking-wider text-stone-400">
                      Rincian Bonus Sponsor:
                    </div>
                    <div className="flex items-center justify-between pl-1">
                      <span>Rekrut Member Ruby:</span>
                      <span className="font-mono font-semibold">
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.sponsorBonusRuby)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pl-1">
                      <span>Rekrut Member Sapphire:</span>
                      <span className="font-mono font-semibold">
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.sponsorBonusSapphire)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pl-1">
                      <span>Rekrut Member Diamond:</span>
                      <span className={`font-mono font-bold ${isDiamond ? 'text-amber-400' : 'text-stone-900'}`}>
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.sponsorBonusDiamond)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isDiamond
                      ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Daftar {pkg.name} Sekarang</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Matrix Comparison Table */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="p-6 bg-stone-100/70 border-b border-stone-200">
            <h3 className="text-lg font-bold text-stone-900">
              Tabel Komparasi Fitur & Potensi Bonus Lengkap
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Perbandingan hak bisnis antar jenjang keanggotaan berdasarkan panduan resmi Marketing Plan Asayama.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 font-bold text-stone-800">
                  <th className="py-4 px-6">Fitur & Parameter</th>
                  <th className="py-4 px-6">Ruby (2 Box)</th>
                  <th className="py-4 px-6">Sapphire (6 Box)</th>
                  <th className="py-4 px-6 bg-amber-50/50 text-amber-950">Diamond (12 Box)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="py-4 px-6 font-medium text-stone-900">Nilai BV (Bonus Volume)</td>
                  <td className="py-4 px-6 font-mono">150 BV</td>
                  <td className="py-4 px-6 font-mono">450 BV</td>
                  <td className="py-4 px-6 font-mono bg-amber-50/30 font-bold text-amber-950">900 BV</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-stone-900">Perhitungan Bonus Pairing</td>
                  <td className="py-4 px-6 text-stone-600">Rp 150.000 / pasang (pasang ke 1-10)</td>
                  <td className="py-4 px-6 text-stone-600">10 pasang pertama @Rp 200.000 + 50 pasang berikutnya @Rp 100.000</td>
                  <td className="py-4 px-6 bg-amber-50/30 font-semibold text-stone-900">10 pasang pertama @Rp 300.000 + 190 pasang berikutnya @Rp 100.000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-stone-900">Maksimal Penghasilan Harian</td>
                  <td className="py-4 px-6 font-mono">Rp 1.500.000 / hari</td>
                  <td className="py-4 px-6 font-mono">Rp 7.000.000 / hari</td>
                  <td className="py-4 px-6 font-mono bg-amber-50/30 font-bold text-emerald-800">Rp 22.000.000 / hari</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-stone-900">Maksimal Potensi Bulanan</td>
                  <td className="py-4 px-6 font-mono">Rp 45.000.000 / bulan</td>
                  <td className="py-4 px-6 font-mono">Rp 210.000.000 / bulan</td>
                  <td className="py-4 px-6 font-mono bg-amber-50/30 font-extrabold text-emerald-800">Rp 660.000.000 / bulan</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-stone-900">Hak Pass Up Bonus</td>
                  <td className="py-4 px-6 text-stone-400">Tidak Berhak</td>
                  <td className="py-4 px-6 text-stone-400">Tidak Berhak</td>
                  <td className="py-4 px-6 bg-amber-50/30 font-bold text-amber-900">Berhak Penuh (Menangkap limpahan selisih sponsor)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-stone-900">Akumulasi Upgrade</td>
                  <td className="py-4 px-6">Bebas upgrade kapan saja</td>
                  <td className="py-4 px-6">Bebas upgrade ke Diamond</td>
                  <td className="py-4 px-6 bg-amber-50/30 font-semibold">Tingkat Maksimal Permanen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
