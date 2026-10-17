import React, { useState } from 'react';
import { Award, ShieldCheck, Check, Copy, ExternalLink, FileCheck } from 'lucide-react';
import { AFC_CERTIFICATIONS, AFC_PRODUCTS } from '../data/products';

export const PatentCertifications: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="paten" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>BUKTI ILMIAH & LEGALITAS</span>
            <span aria-hidden="true">·</span>
            <span>JAPAN PATENT OFFICE & BPOM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Bukan Sekadar Klaim Manfaat, Didukung Hak Paten Fungsi Resmi
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Perbedaan fundamental produk AFC Life Science adalah kepemilikan <strong>Hak Paten Fungsi (Function Patent)</strong>. 
            Artinya, setiap manfaat terapeutik telah melalui uji klinis independen bertahun-tahun dan diakui secara hukum internasional, 
            bukan sekadar paten merk atau komposisi bahan.
          </p>
        </div>

        {/* 2-Column Grid: Japanese Function Patents & Legal Registrations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          {/* Column 1: Japanese Function Patents Breakdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span>Daftar Hak Paten Fungsi Terdaftar di Jepang</span>
            </h3>

            <div className="space-y-3">
              {AFC_PRODUCTS.flatMap(p => p.patents.map(pat => ({ ...pat, productName: p.name }))).slice(0, 6).map((patent, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-red-800 bg-red-100/70 border border-red-200 px-2 py-0.5 rounded">
                      {patent.number}
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium">{patent.productName}</span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mt-1">
                    {patent.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {patent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: BPOM, Halal, MIMS Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Sertifikasi & Jaminan Keamanan Pangan Resmi</span>
            </h3>

            <div className="space-y-3">
              {AFC_CERTIFICATIONS.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{cert.name}</h4>
                      <p className="font-mono text-xs text-stone-500 font-medium mt-0.5">{cert.code}</p>
                    </div>
                    {cert.code.includes('ML') && (
                      <button
                        onClick={() => handleCopy(cert.code)}
                        className="p-1.5 text-stone-400 hover:text-stone-700 bg-white border border-stone-200 rounded-lg text-xs flex items-center gap-1 transition-colors cursor-pointer"
                        title="Salin Nomor BPOM"
                      >
                        {copiedCode === cert.code ? (
                          <span className="text-emerald-700 font-semibold text-[10px]">Tersalin!</span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification Link CTA */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
              <div>
                <span className="font-bold block">Verifikasi Mandiri di Situs BPOM:</span>
                <span>Anda dapat mengecek nomor izin edar di cekbpom.pom.go.id kapan saja.</span>
              </div>
              <a
                href="https://cekbpom.pom.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
                aria-label="Kunjungi Cek BPOM"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
