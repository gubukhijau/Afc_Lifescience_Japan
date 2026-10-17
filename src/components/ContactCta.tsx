import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, ShieldCheck, Truck, Clock } from 'lucide-react';
import { AFC_PRODUCTS } from '../data/products';

interface ContactCtaProps {
  initialMessage?: string;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ initialMessage = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('subarashi-classic');
  const [quantity, setQuantity] = useState(1);
  const [healthNote, setHealthNote] = useState(initialMessage);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const currentProduct = AFC_PRODUCTS.find(p => p.id === selectedProduct) || AFC_PRODUCTS[0];
  const totalPrice = currentProduct.officialPrice * quantity;

  const formattedTotal = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(totalPrice);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Mohon isi nama lengkap Anda.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError('Mohon masukkan nomor WhatsApp yang valid.');
      return;
    }

    setError('');

    // Prepare WhatsApp URL
    const message = `Halo AFC Life Science Official, saya ingin memesan / konsultasi produk resmi:\n\n*Nama:* ${name}\n*Kota/Pengiriman:* ${city || '-'}\n*Produk:* ${currentProduct.name} (${quantity} box)\n*Total Estimasi:* ${formattedTotal}\n*Catatan Keluhan/Kebutuhan:* ${healthNote || 'Konsultasi umum'}\n\nMohon konfirmasi ketersediaan stok segel barcode dan rekening resmi. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6285743678786?text=${encodedMessage}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="order" className="py-20 sm:py-28 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>LAYANAN KONSULTASI RESMI</span>
              <span aria-hidden="true">·</span>
              <span>PENGIRIMAN SELURUH INDONESIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Konsultasi Kesehatan Gratis & Pemesanan Produk Original AFC
            </h2>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Dapatkan pendampingan konsumsi secara berkala dari konsultan resmi AFC Life Science. 
              Semua produk dijamin 100% original dengan segel barcode hologram utuh, terdaftar di BPOM RI, 
              dan langsung dikirim dengan packing aman bubble wrap tebal.
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-800 text-xs text-stone-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block">Garansi 100% Original Segel QR</span>
                  <span className="text-stone-400">Garansi uang kembali jika barcode tidak terdaftar di sistem AFC</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block">Pengiriman Cepat Seluruh Indonesia</span>
                  <span className="text-stone-400">JNE, SiCepat, Paxel, & Instant Courier (Jabodetabek)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block">WhatsApp Hotline Resmi</span>
                  <a href="https://wa.me/6285743678786" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-mono font-bold hover:underline">
                    +62 857-4367-8786
                  </a>
                  <span className="text-stone-400 block text-[11px]">Senin - Minggu: 08.00 - 22.00 WIB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Order & Lead Capture Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-stone-900 shadow-2xl border border-stone-200">
              <div className="border-b border-stone-100 pb-4 mb-6">
                <span className="text-xs font-bold text-red-900 tracking-wider uppercase block">
                  FORM PEMESANAN & KONSULTASI LANGSUNG
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1">
                  Isi Formulir untuk Terhubung ke WhatsApp Resmi
                </h3>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900">
                    Formulir Berhasil Disiapkan!
                  </h4>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    Jendela WhatsApp Anda sedang dibuka untuk mengirim rincian konsultasi dan pesanan kepada distributor resmi kami. Jika WhatsApp tidak terbuka otomatis, klik tombol di bawah ini:
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 text-stone-900"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="08123456789"
                        className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 text-stone-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                        Pilih Produk AFC
                      </label>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 text-stone-900 font-medium"
                      >
                        {AFC_PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.id}>
                            {prod.name} ({new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(prod.officialPrice)})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                        Jumlah Box
                      </label>
                      <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3.5 py-2.5 text-stone-600 hover:bg-stone-200 font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center py-2.5 text-xs font-semibold font-mono text-stone-900">
                          {quantity} Box
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3.5 py-2.5 text-stone-600 hover:bg-stone-200 font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                        Kota / Kabupaten Pengiriman
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Contoh: Jakarta Selatan, Surabaya, Medan"
                        className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 text-stone-900"
                      />
                    </div>

                    <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 flex flex-col justify-center">
                      <span className="text-[11px] text-stone-500">Estimasi Total Resmi:</span>
                      <span className="text-lg font-extrabold text-stone-900 font-mono">
                        {formattedTotal}
                      </span>
                      <span className="text-[10px] text-emerald-800 font-semibold">
                        Bebas Biaya Konsultasi & Panduan
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                      Keluhan Kesehatan / Catatan Konsultasi (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      value={healthNote}
                      onChange={(e) => setHealthNote(e.target.value)}
                      placeholder="Jelaskan kondisi fisik atau obat yang saat ini sedang diminum agar kami dapat menyesuaikan anjuran dosis..."
                      className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 text-stone-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer mt-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Lanjutkan Konsultasi & Pesan ke WhatsApp</span>
                  </button>

                  <p className="text-[10px] text-stone-400 text-center leading-tight">
                    Data Anda aman dan terjaga kerahasiaannya. Kami tidak pernah membagikan nomor telepon ke pihak manapun.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
