import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AFC_PRODUCTS, AFCProduct } from '../data/products';

interface InteractiveDoseCalculatorProps {
  onSelectProduct: (product: AFCProduct) => void;
  onOpenConsultationWithText: (message: string) => void;
}

interface RecommendationOutcome {
  title: string;
  recommendedProducts: string[];
  protocol: string;
  expectedMilestone: string;
  doctorTip: string;
}

export const InteractiveDoseCalculator: React.FC<InteractiveDoseCalculatorProps> = ({
  onSelectProduct,
  onOpenConsultationWithText
}) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('cardio');
  const [selectedAge, setSelectedAge] = useState<string>('adult');

  const goals = [
    { id: 'cardio', label: 'Jantung, Hipertensi & Darah', icon: '❤️' },
    { id: 'gut_immune', label: 'GERD, Usus & Imunitas', icon: '🛡️' },
    { id: 'diabetes_organ', label: 'Diabetes & Regenerasi Sel Organ', icon: '🧬' },
    { id: 'eyes_brain', label: 'Mata Lelah & Daya Ingat Otak', icon: '👁️' },
    { id: 'antiaging_skin', label: 'Anti-Aging, Flek & Kulit Awet Muda', icon: '✨' },
    { id: 'daily_vitality', label: 'Stamina Harian & Pencegahan', icon: '🌿' }
  ];

  const getRecommendation = (): RecommendationOutcome => {
    switch (selectedGoal) {
      case 'cardio':
        return {
          title: 'Protokol Kesehatan Sirkulasi & Tekanan Darah',
          recommendedProducts: ['subarashi-classic', 'subarashi-gold'],
          protocol: '1 sachet SUBARASHI di bawah lidah setiap pagi hari saat bangun tidur (perut kosong). Jika tensi > 150, tingkatkan menjadi 2 sachet/hari (pagi & sore).',
          expectedMilestone: 'Minggu 1-2: Kepala terasa lebih ringan, tidur lebih nyenyak. Bulan 1: Tekanan darah lebih stabil dan elastisitas pembuluh darah membaik.',
          doctorTip: 'Tetap monitor tekanan darah secara berkala dan beri jeda 1 jam jika sedang mengonsumsi obat dokter.'
        };
      case 'gut_immune':
        return {
          title: 'Protokol Imunitas Seluler & Saluran Pencernaan',
          recommendedProducts: ['utsukushhii-gold-v2'],
          protocol: '1 sachet Utsukushhii Gold Versi 2.0 diminum 30 menit setelah sarapan atau sebelum tidur malam. Untuk maag akut, konsumsi setelah makan selama minggu pertama.',
          expectedMilestone: 'Hari 3-7: Perut begah mereda, buang air besar lebih lancar. Bulan 1: Daya tahan tubuh kuat dan tidak mudah tertular flu.',
          doctorTip: 'Hindari konsumsi bersamaan dengan minuman berkafein tinggi atau alkohol.'
        };
      case 'diabetes_organ':
        return {
          title: 'Protokol Dual-Therapy: Regenerasi Pankreas & Pembuluh Darah',
          recommendedProducts: ['subarashi-classic', 'utsukushhii-gold-v2'],
          protocol: 'Pagi: 1 sachet Subarashi di bawah lidah. Malam: 1 sachet Utsukushhii Gold 2.0 sebelum tidur untuk pembersihan racun sel.',
          expectedMilestone: 'Minggu 2-4: Kadar gula darah puasa lebih terkontrol, kesemutan pada kaki berkurang, luka seluler pulih lebih cepat.',
          doctorTip: 'Pola sinergi 2 produk ini membantu memperbaiki reseptor insulin sekaligus membersihkan plak darah.'
        };
      case 'eyes_brain':
        return {
          title: 'Protokol Neuro-Protektif & Ketajaman Visual',
          recommendedProducts: ['hikari'],
          protocol: '1 sachet Hikari diminum setiap pagi dilarutkan ke dalam 50ml air segar atau langsung sublingual.',
          expectedMilestone: 'Hari 5-10: Mata lelah dan silau akibat layar gawai berkurang signifikan. Bulan 1: Ketajaman fokus dan konsentrasi kerja meningkat.',
          doctorTip: 'Sangat aman dikonsumsi anak-anak usia sekolah, gamer, programmer, hingga lansia.'
        };
      case 'antiaging_skin':
        return {
          title: 'Protokol Total Youth Rejuvenation (Inside-Out)',
          recommendedProducts: ['sensei-suru', 'subarashi-classic'],
          protocol: 'Luar: Oleskan 3-4 tetes Serum Sensei Suru 35 ml pagi & malam setelah mencuci wajah. Dalam: 1 sachet Subarashi setiap pagi untuk sintesis kolagen alami.',
          expectedMilestone: 'Hari 14: Kulit tampak lebih cerah kenyal (glass skin). Hari 30: Flek hitam melasma dan garis senyum tampak memudar.',
          doctorTip: 'Gunakan tabir surya di siang hari untuk melindungi sel kulit baru yang teregenerasi.'
        };
      default:
        return {
          title: 'Protokol Pemeliharaan Vitalitas Sehari-hari',
          recommendedProducts: ['subarashi-classic'],
          protocol: '1 sachet Subarashi setiap pagi saat perut kosong.',
          expectedMilestone: 'Stamina lebih bugar dari pagi hingga malam, pemulihan kelelahan lebih cepat, perlindungan seluler jangka panjang.',
          doctorTip: 'Cukupi kebutuhan air putih minimal 2 liter per hari untuk mempercepat sirkulasi peptida.'
        };
    }
  };

  const currentRec = getRecommendation();
  const matchedProductObjects = AFC_PRODUCTS.filter(p => currentRec.recommendedProducts.includes(p.id));

  const handleWhatsAppConsult = () => {
    const goalObj = goals.find(g => g.id === selectedGoal);
    const text = `Halo AFC Life Science, saya ingin konsultasi mengenai rekomendasi paket untuk kebutuhan: ${goalObj?.label || 'Kesehatan'}. Produk yang disarankan: ${matchedProductObjects.map(p => p.name).join(' & ')}. Mohon info dosis dan pemesanan resminya.`;
    onOpenConsultationWithText(text);
  };

  return (
    <section id="kalkulator" className="py-20 sm:py-28 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>FITUR INTERAKTIF</span>
            <span aria-hidden="true">·</span>
            <span>REKOMENDASI DOSIS PERSONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Kalkulator Rekomendasi Paket Sesuai Target Kesehatan Anda
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Dapatkan rekomendasi kombinasi produk AFC Japan yang paling tepat beserta aturan konsumsi 
            berdasarkan keluhan fisik atau target kebugaran Anda saat ini.
          </p>
        </div>

        {/* Interactive Selector Card */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-3">
              Langkah 1: Pilih Target Kesehatan / Keluhan Utama
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    selectedGoal === g.id
                      ? 'border-red-900 bg-red-50/50 text-red-950 font-semibold shadow-xs ring-1 ring-red-900'
                      : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <span className="text-2xl mb-2">{g.icon}</span>
                  <span className="text-xs leading-snug">{g.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-3">
              Langkah 2: Pilih Kelompok Usia Konsumen
            </label>
            <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl max-w-md">
              <button
                onClick={() => setSelectedAge('youth')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedAge === 'youth' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Anak & Remaja (&lt;25)
              </button>
              <button
                onClick={() => setSelectedAge('adult')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedAge === 'adult' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Dewasa (25 - 50)
              </button>
              <button
                onClick={() => setSelectedAge('senior')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedAge === 'senior' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Lansia (50+)
              </button>
            </div>
          </div>

          {/* Dynamic Calculated Output Box */}
          <div className="pt-6 border-t border-stone-200">
            <div className="bg-stone-50 rounded-2xl border border-stone-200/90 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-red-900 tracking-wider uppercase block">
                    HASIL ANALISIS REKOMENDASI
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    {currentRec.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-500 font-medium">Kategori Terpilih:</span>
                  <span className="text-xs font-semibold text-stone-800 bg-white border border-stone-200 px-2.5 py-1 rounded-md">
                    {goals.find(g => g.id === selectedGoal)?.label}
                  </span>
                </div>
              </div>

              {/* Matched Product Cards Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchedProductObjects.map((prod) => (
                  <div 
                    key={prod.id}
                    className="bg-white rounded-xl border border-stone-200 p-4 flex items-center justify-between gap-4 hover:border-red-900/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-14 h-14 rounded-lg object-cover border border-stone-100"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-stone-900">{prod.name}</h4>
                        <span className="text-xs text-stone-500 font-mono">
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(prod.officialPrice)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="px-3 py-1.5 text-xs font-semibold text-red-900 hover:text-red-950 bg-red-50 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Lihat Produk
                    </button>
                  </div>
                ))}
              </div>

              {/* Protocol Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Aturan Konsumsi Disarankan</span>
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed pl-5">
                    {currentRec.protocol}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Perkiraan Milestone Hasil</span>
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed pl-5">
                    {currentRec.expectedMilestone}
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950">
                <strong>Catatan Edukasi:</strong> {currentRec.doctorTip}
              </div>

              {/* Trigger Direct WA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-stone-500">
                  Konsultasikan lebih lanjut riwayat medis Anda dengan tim spesialis kami tanpa biaya.
                </span>
                <button
                  onClick={handleWhatsAppConsult}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Rencana Terapi Ini ke WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
