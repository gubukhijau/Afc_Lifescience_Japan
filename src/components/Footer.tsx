import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800/80">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <span className="text-base font-bold text-white tracking-tight block">
              AFC Life Science Japan
            </span>
            <p className="text-stone-400 text-xs leading-relaxed font-light">
              Distributor resmi produk suplemen farmasi & regenerasi sel dari AFC-HD AMS Life Science Co., Ltd. Shizuoka, Jepang.
            </p>
            <div className="pt-2 text-[11px] text-stone-500 font-mono">
              Tokyo Stock Exchange JASDAQ: 2927:JP
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-stone-200 uppercase tracking-wider block">
              Katalog Produk
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li><a href="#produk" className="hover:text-white transition-colors">SOP Subarashi</a></li>
              <li><a href="#produk" className="hover:text-white transition-colors">Utsukushhii Gold Version</a></li>
              <li><a href="#produk" className="hover:text-white transition-colors">Hikari Vision & Brain</a></li>
              <li><a href="#produk" className="hover:text-white transition-colors">Sensei Suru Regenerating Serum</a></li>
            </ul>
          </div>

          {/* Legal and Verification */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-stone-200 uppercase tracking-wider block">
              Legalitas & Riset
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li><a href="#paten" className="hover:text-white transition-colors">Hak Paten Fungsi Jepang</a></li>
              <li><a href="#paten" className="hover:text-white transition-colors">Nomor Registrasi BPOM RI</a></li>
              <li><a href="#paten" className="hover:text-white transition-colors">Sertifikasi Halal & GMP</a></li>
              <li><a href="#keaslian" className="hover:text-white transition-colors">Cek Barcode Keaslian Produk</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-stone-200 uppercase tracking-wider block">
              Layanan Informasi
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Konsultasi kesehatan & kemitraan resmi dilayani setiap hari melalui WhatsApp resmi:
            </p>
            <a 
              href="https://wa.me/6285743678786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-mono font-bold block text-sm hover:underline"
            >
              +62 857-4367-8786
            </a>
            <p className="text-xs text-stone-400">
              Jam Operasional: 08:00 - 22:00 WIB
            </p>
            <a 
              href="https://afc-lifescience.com/product.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-stone-400 hover:text-stone-300 transition-colors pt-1"
            >
              <span>Referensi afc-lifescience.com</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-stone-500 leading-relaxed">
            <strong>Disclaimer Medis:</strong> Produk AFC Life Science (SOP Subarashi, Utsukushhii Gold, Hikari) merupakan suplemen nutrisi kesehatan dan makanan bernutrisi tinggi (Nutraceuticals), bukan obat kimia pengganti diagnosis dokter. Manfaat dirasakan bervariasi bergantung kondisi fisiologis setiap individu. Penderita penyakit kronis disarankan tetap berkoordinasi dengan dokter spesialis yang merawat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 pt-2 border-t border-stone-900">
            <span>© {new Date().getFullYear()} AFC Life Science Indonesia. Hak Cipta Dilindungi Undang-Undang.</span>
            <span>Made in Shizuoka, Japan · Diimpor Resmi ke Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
