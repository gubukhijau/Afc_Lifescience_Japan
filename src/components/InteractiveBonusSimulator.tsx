import React, { useState } from 'react';
import { Calculator, MessageCircle, TrendingUp, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { MEMBER_PACKAGES, YEARLY_RANKS } from '../data/marketingPlan';

interface InteractiveBonusSimulatorProps {
  onOpenConsultationWithText: (message: string) => void;
}

export const InteractiveBonusSimulator: React.FC<InteractiveBonusSimulatorProps> = ({
  onOpenConsultationWithText
}) => {
  const [packageTier, setPackageTier] = useState<'ruby' | 'sapphire' | 'diamond'>('diamond');
  const [pairsPerDay, setPairsPerDay] = useState<number>(10);

  // Selected package info
  const selectedPkg = MEMBER_PACKAGES.find(p => p.id === packageTier) || MEMBER_PACKAGES[2];

  // Daily Pairing Calculation based on Asayama Rules:
  const calculateDailyPairing = (pairs: number, tier: 'ruby' | 'sapphire' | 'diamond'): number => {
    if (tier === 'ruby') {
      const activePairs = Math.min(pairs, 10);
      return activePairs * 150000;
    } else if (tier === 'sapphire') {
      const activePairs = Math.min(pairs, 60);
      const tier1 = Math.min(activePairs, 10) * 200000;
      const tier2 = Math.max(0, activePairs - 10) * 100000;
      return tier1 + tier2;
    } else {
      // Diamond
      const activePairs = Math.min(pairs, 200);
      const tier1 = Math.min(activePairs, 10) * 300000;
      const tier2 = Math.max(0, activePairs - 10) * 100000;
      return tier1 + tier2;
    }
  };

  const dailyPairingIncome = calculateDailyPairing(pairsPerDay, packageTier);
  const monthlyPairingIncome = dailyPairingIncome * 30;
  const annualTotalPairs = pairsPerDay * 365;

  // Find achieved yearly rank
  let achievedRank = null;
  for (let i = YEARLY_RANKS.length - 1; i >= 0; i--) {
    if (annualTotalPairs >= YEARLY_RANKS[i].pairTarget) {
      achievedRank = YEARLY_RANKS[i];
      break;
    }
  }

  const yearlyBonusReward = achievedRank ? achievedRank.cashReward : 0;
  const totalAnnualPotential = (monthlyPairingIncome * 12) + yearlyBonusReward;

  const isCapped = pairsPerDay > selectedPkg.dailyMaxPairs;

  const handleConsult = () => {
    const msg = `Halo AFC Life Science, saya tertarik dengan peluang kemitraan bisnis Marketing Plan Asayama.\n\n*Pilihan Paket:* ${selectedPkg.name}\n*Target Simulasi Pasangan:* ${pairsPerDay} pasang/hari\n*Potensi Harian:* ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(dailyPairingIncome)}\n*Potensi Bulanan:* ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(monthlyPairingIncome)}\n*Estimasi Peringkat:* ${achievedRank ? achievedRank.rankName : 'Member Aktif'}\n\nMohon informasi cara pendaftaran resmi dan bimbingan tim. Terima kasih!`;
    onOpenConsultationWithText(msg);
  };

  return (
    <section id="simulasi" className="py-20 sm:py-28 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>KALKULATOR BISNIS INTERAKTIF</span>
            <span aria-hidden="true">·</span>
            <span>SIMULASI KOMPENSASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Simulasi Potensi Penghasilan Bonus Pairing & Reward Tahunan
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Hitung potensi penghasilan harian, bulanan, dan reward peringkat tahunan yang bisa Anda capai 
            berdasarkan paket keanggotaan dan pertumbuhan volume pasangan tim Anda.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Step 1: Select Package */}
          <div>
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-3">
              Langkah 1: Pilih Paket Keanggotaan Anda
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MEMBER_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setPackageTier(pkg.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    packageTier === pkg.id
                      ? 'border-red-900 bg-red-50/50 text-stone-900 ring-1 ring-red-900 shadow-xs'
                      : 'border-stone-200 bg-stone-50/50 text-stone-600 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-stone-900">{pkg.name}</span>
                    <span className="text-[11px] font-mono text-stone-500">{pkg.bv} BV</span>
                  </div>
                  <span className="text-xs text-stone-500 block">
                    Max: {pkg.dailyMaxPairs} Pasang / hari
                  </span>
                  <span className="text-xs font-mono font-bold text-red-900 mt-1 block">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.estimatedPrice)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Slider for Pairs per day */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Langkah 2: Target Volume Pasangan Omset per Hari (Binary Pairs)
              </label>
              <span className="text-base font-extrabold text-red-900 font-mono">
                {pairsPerDay} Pasang / Hari
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={100}
              value={pairsPerDay}
              onChange={(e) => setPairsPerDay(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-red-900"
            />

            <div className="flex justify-between text-[11px] text-stone-400 font-mono mt-1">
              <span>1 Pasang</span>
              <span>25 Pasang</span>
              <span>50 Pasang</span>
              <span>100 Pasang</span>
            </div>

            {isCapped && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Perhatian Batas Pasang:</strong> Paket <strong>{selectedPkg.name}</strong> memiliki batas maksimal <strong>{selectedPkg.dailyMaxPairs} pasang/hari</strong>. Untuk mendapatkan potensi penuh dari {pairsPerDay} pasang/hari, disarankan untuk upgrade ke <strong>Diamond</strong>.
                </span>
              </div>
            )}
          </div>

          {/* Output Display Card */}
          <div className="pt-6 border-t border-stone-200">
            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                    HASIL SIMULASI PROYEKSI PENGHASILAN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Estimasi Payout Paket {selectedPkg.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-400">Peringkat Tahunan Terkualifikasi:</span>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-stone-800 border border-stone-700 px-3 py-1 rounded-lg">
                    {achievedRank ? achievedRank.rankName : 'Belum Kualifikasi Toreda'}
                  </span>
                </div>
              </div>

              {/* 3 Metric Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-stone-950/70 border border-stone-800 rounded-xl p-4">
                  <span className="text-xs text-stone-400 block mb-1">Bonus Pairing Harian:</span>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(dailyPairingIncome)}
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-1">
                    Dibayarkan harian ke rekening
                  </span>
                </div>

                <div className="bg-stone-950/70 border border-stone-800 rounded-xl p-4">
                  <span className="text-xs text-stone-400 block mb-1">Proyeksi Pairing Bulanan:</span>
                  <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(monthlyPairingIncome)}
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-1">
                    Estimasi 30 hari aktif
                  </span>
                </div>

                <div className="bg-stone-950/70 border border-stone-800 rounded-xl p-4">
                  <span className="text-xs text-stone-400 block mb-1">Reward Cash Tahunan:</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(yearlyBonusReward)}
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-1">
                    Bonus ekstra panggung Bushido
                  </span>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-stone-400">
                  *Simulasi belum termasuk Bonus Sponsor langsung, Pass Up, dan royalti unilevel Plan B.
                </span>
                <button
                  onClick={handleConsult}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi & Kunci Posisi Kemitraan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
