import React from 'react';
import { ShieldAlert, ShieldCheck, QrCode, AlertTriangle, CheckCircle, Tag, Search, MessageCircle } from 'lucide-react';

export const AuthenticityGuide: React.FC = () => {
  return (
    <section id="keaslian" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>PERINGATAN KONSUMEN</span>
            <span aria-hidden="true">·</span>
            <span>JAMINAN 100% PRODUK ASLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Waspada Produk Palsu & Rekondisi: Panduan Cek Keaslian Resmi
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Karena tingginya permintaan SOP Subarashi dan Utsukushhii di Indonesia, banyak oknum 
            tidak bertanggung jawab menjual produk tiruan berharga miring di marketplace online 
            tanpa barcode utuh. Pastikan kesehatan Anda terlindungi dengan membeli produk resmi bergaransi.
          </p>
        </div>

        {/* 2-Column Comparison: Ciri Asli vs Palsu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ciri Produk Resmi AFC Asli */}
          <div className="bg-white rounded-2xl border-2 border-emerald-600/30 p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">Ciri Produk Resmi AFC (Asli)</h3>
                <span className="text-xs text-emerald-700 font-semibold">100% Bergaransi Distributor Resmi</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-stone-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Barcode QR Hologram Utuh:</strong> Memiliki stiker barcode nomor seri unik pabrik Shizuoka yang belum pernah digores atau dirusak.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Harga Resmi Seragam:</strong> Sesuai ketentuan resmi AFC Indonesia, harga retail resmi adalah <strong>Rp 1.800.000 / box</strong> (SOP Subarashi, Utsukushhii Gold, Hikari).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Segel Plastik Rapi & Expired Date Laser:</strong> Tanggal kedaluwarsa dicetak rapi menggunakan laser print timbul dari pabrik Jepang.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Pendampingan Konsultasi Gratis:</strong> Anda berhak mendapatkan bimbingan pemakaian intensif dari konsultan resmi AFC.
                </span>
              </li>
            </ul>
          </div>

          {/* Ciri Produk Mencurigakan / Palsu */}
          <div className="bg-white rounded-2xl border-2 border-red-500/30 p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">Ciri Produk Palsu / Ilegal</h3>
                <span className="text-xs text-red-700 font-semibold">Sangat Berisiko Bagi Kesehatan Organ Tubuh</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-stone-700">
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Barcode Dihapus / Disobek:</strong> Penjual memotong kode barcode dengan dalih "menjaga privasi member". Ini indikasi kuat produk tiruan atau rekondisi expired.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Harga Murah di Bawah Standar:</strong> Dijual Rp 800rb - Rp 1,2jt di toko online tanpa verifikasi keanggotaan resmi.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Warna dan Rasa Bubuk Berbeda:</strong> Bubuk menggumpal, terasa hambar/asam tidak wajar karena diisi tepung atau zat kimia sintetis.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Tidak Bertanggung Jawab:</strong> Tidak ada garansi uang kembali jika barang terbukti rekondisi.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Distributor Seal of Trust Banner */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
              KOMITMEN LAYANAN KAMI
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Semua Produk yang Kami Kirim 100% Bersegel Hologram Utuh & Terdaftar Resmi
            </h4>
            <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
              Kami adalah distributor resmi AFC Life Science Indonesia. Setiap pesanan disertai nomor batch terdaftar, 
              garansi uang kembali 100% jika terbukti tidak asli, serta packing bubble wrap tebal anti-benturan.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#order"
              className="px-5 py-3 bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded-xl transition-all shadow-md whitespace-nowrap flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan Produk Original via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
