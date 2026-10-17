import React, { useState } from 'react';
import { ChevronDown, FileText, ExternalLink } from 'lucide-react';

export const MarketingPlanFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apa perbedaan mendasar antara Paket Ruby, Sapphire, dan Diamond?',
      a: 'Perbedaan utamanya terletak pada jumlah produk awal yang didapat (Ruby 2 box, Sapphire 6 box, Diamond 12 box), batas maksimal pasangan pairing per hari (Ruby 10 pasang, Sapphire 60 pasang, Diamond 200 pasang), serta hak eksklusif Bonus Pass Up yang hanya dimiliki oleh peringkat Diamond.'
    },
    {
      q: 'Apakah bisa upgrade dari Ruby ke Diamond di kemudian hari?',
      a: 'Sangat bisa! Sistem AFC Life Science menyediakan akumulasi tanpa batas waktu. Jika Anda mendaftar Ruby (2 box), Anda cukup membeli tambahan 10 box produk lagi secara bertahap atau sekaligus untuk naik menjadi Diamond tanpa reset poin.'
    },
    {
      q: 'Bagaimana mekanisme pembagian 80% Cash dan 20% Product Wallet?',
      a: 'Setiap bonus harian Anda akan dibagi 80% dicairkan tunai ke rekening bank Anda, dan 20% otomatis masuk ke Product Wallet (maksimal Rp 1.650.000 per bulan). Saldo Product Wallet ini digunakan untuk mengklaim produk gratis pilihan Anda setiap bulan tanpa perlu mengeluarkan modal tambahan.'
    },
    {
      q: 'Apakah ada sistem tutup poin atau hangus poin jika kaki belum seimbang?',
      a: 'Tidak ada sistem flush atau poin hangus pada kaki besar (carry forward). Omset BV di kaki yang lebih besar akan tetap tersimpan selamanya hingga ada omset baru di kaki yang lebih kecil untuk dipasangkan.'
    },
    {
      q: 'Apakah bisnis AFC Life Science ini legal dan memiliki izin di Indonesia?',
      a: 'Sangat legal dan resmi. PT Asayama Famili Cahaya Indonesia telah mengantongi Surat Izin Usaha Penjualan Langsung (SIUPL) dari Kementerian Perdagangan RI, terdaftar sebagai anggota resmi Asosiasi Perusahaan Penjualan Langsung Indonesia (AP2LI), dan seluruh produknya terdaftar resmi di BPOM RI.'
    },
    {
      q: 'Apakah keanggotaan bisnis ini dapat diwariskan?',
      a: 'Ya. Seluruh hak usaha, struktur jaringan, dan royalti penghasilan dapat diwariskan secara hukum kepada anak atau ahli waris sah yang ditunjuk dalam profil member.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>PERTANYAAN UMUM BISNIS</span>
            <span aria-hidden="true">·</span>
            <span>MARKETING PLAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Tanya Jawab Seputar Sistem Bisnis & Kemitraan
          </h2>
          <p className="text-sm text-stone-600 mt-3 font-normal leading-relaxed">
            Ketahui lebih dalam mengenai transparansi sistem bonus, syarat upgrade, dan jaminan legalitas bisnis AFC Indonesia.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
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

        {/* Official PDF Download Card */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <span className="text-xs font-bold text-red-900 uppercase tracking-wider">
              DOKUMEN RESMI PERUSAHAAN
            </span>
            <h4 className="text-base font-bold text-stone-900">
              Unduh Presentasi Lengkap Marketing Plan Asayama (PDF)
            </h4>
            <p className="text-xs text-stone-500">
              File resmi langsung dari server pusat afc-lifescience.com untuk dipelajari secara offline.
            </p>
          </div>
          <a
            href="https://afc-lifescience.com/download/MARKETING_PLAN_ASAYAMA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 bg-red-800 hover:bg-red-900 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            <span>Download MARKETING_PLAN_ASAYAMA.pdf</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
