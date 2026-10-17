import React from 'react';
import { Award, Trophy, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { YEARLY_RANKS } from '../data/marketingPlan';

export const YearlyRankRewards: React.FC = () => {
  return (
    <section id="peringkat" className="py-20 sm:py-28 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <span>PERINGKAT KEPEMIMPINAN TAHUNAN</span>
            <span aria-hidden="true">·</span>
            <span>YEARLY RANK REWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Jenjang Karir & Reward Tahunan Hingga Rp 3,075 Miliar Cash
          </h2>
          <p className="text-base text-stone-300 mt-3 font-normal leading-relaxed">
            Dihitung dari akumulasi total pasangan kaki kecil (weak leg) selama periode 1 tahun kalender (1 Oktober - 25 September). 
            Reward ini merupakan bonus ekstra di luar penghasilan harian pairing dan bonus sponsor Anda.
          </p>
        </div>

        {/* 6 Japanese Ranks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {YEARLY_RANKS.map((rk, idx) => {
            const isTopRank = rk.rankName === 'Bushido' || rk.rankName === 'Daimyo';
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  isTopRank
                    ? 'bg-gradient-to-b from-stone-800 to-stone-950 border-amber-500/80 shadow-lg'
                    : 'bg-stone-950/70 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-amber-400/90 font-semibold tracking-wider">
                      {rk.japaneseTitle}
                    </span>
                    <span className="text-xs font-mono bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                      {rk.pairTarget.toLocaleString('id-ID')} Pasang
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {rk.rankName}
                  </h3>

                  <div className="my-4 pt-3 border-t border-stone-800">
                    <span className="text-[11px] text-stone-400 block">Total Reward Tunai:</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(rk.cashReward)}
                    </span>
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed">
                    {rk.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Pencairan 1x per tahun</span>
                  <Trophy className={`w-4 h-4 ${isTopRank ? 'text-amber-400' : 'text-stone-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Double Bushido & International Tour Rewards Banner */}
        <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
              BEYOND BUSHIDO & ANNUAL TRIP
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Double Bushido, Triple Bushido & Free Trip Keliling Dunia
            </h4>
            <p className="text-xs text-stone-400 max-w-2xl leading-relaxed">
              Bagi para top leader yang melampaui 40.000+ pasang, AFC memberikan penghargaan istimewa berupa Luxury Supercar 
              serta tiket liburan mewah gratis (Free International Trip) ke Jepang, Eropa, dan Timur Tengah dengan fasilitas bintang lima.
            </p>
          </div>
          <div className="shrink-0 bg-stone-900 border border-stone-800 rounded-xl px-5 py-4 text-center">
            <span className="text-xs text-stone-400 block mb-1">Total Payout Bonus</span>
            <span className="text-2xl font-black text-amber-400 font-mono">Triliunan IDR</span>
            <span className="text-[10px] text-stone-500 block mt-0.5">Telah dibagikan ke ribuan member</span>
          </div>
        </div>
      </div>
    </section>
  );
};
