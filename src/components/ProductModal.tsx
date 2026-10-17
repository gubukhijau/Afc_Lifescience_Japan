import React from 'react';
import { X, ShieldCheck, CheckCircle2, Award, Clock, Sparkles, MessageCircle, FileText, ExternalLink } from 'lucide-react';
import { AFCProduct } from '../data/products';

interface ProductModalProps {
  product: AFCProduct | null;
  onClose: () => void;
  onOrder: (product: AFCProduct, qty: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOrder }) => {
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return null;

  const totalPrice = product.officialPrice * quantity;
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(totalPrice);

  const singlePrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(product.officialPrice);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-red-900 tracking-wider uppercase font-mono">
              AFC JAPAN OFFICIAL
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-medium">{product.categoryLabel}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60 transition-colors"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8 divide-y divide-stone-100">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden bg-stone-100 border border-stone-200 aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badges and Credentials */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Izin Edar BPOM:</span>
                  <span className="font-mono font-semibold text-stone-900">{product.bpomNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Sertifikasi Halal:</span>
                  <span className="font-semibold text-emerald-800">{product.halalStatus}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Nilai Bonus (BV):</span>
                  <span className="font-mono font-bold text-red-900 bg-red-50 border border-red-200 px-2 py-0.5 rounded">{product.bv} BV</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Kemasan Asli:</span>
                  <span className="font-medium text-stone-800">{product.boxContents}</span>
                </div>
                {product.mimsListed && (
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Direktori Kedokteran:</span>
                    <span className="font-semibold text-blue-800">Tercatat di MIMS</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs text-stone-400 tracking-wide mb-1">{product.japaneseName}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                  {product.name}
                </h2>
                <p className="text-sm font-medium text-red-800 mt-1">
                  {product.tagline}
                </p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Price block */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-stone-500 block">Harga Resmi Distributor AFC:</span>
                  <span className="text-2xl font-extrabold text-stone-900 font-mono">
                    {singlePrice}
                  </span>
                  <span className="text-xs text-stone-500 ml-1">/ box</span>
                </div>
                <span className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-md">
                  100% Original Segel QR
                </span>
              </div>

              {/* Quantity selector & CTA */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-stone-700">Jumlah Paket:</span>
                  <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-sm font-semibold font-mono text-stone-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-stone-500 font-mono">Total: {formattedPrice}</span>
                </div>

                <button
                  onClick={() => onOrder(product, quantity)}
                  className="w-full py-3.5 px-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Pesan Sekarang via WhatsApp Resmi ({formattedPrice})</span>
                </button>
              </div>
            </div>
          </div>

          {/* Patents Section */}
          <div className="pt-6">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span>Hak Paten Teruji Klinis (Japan Patent Office)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.patents.map((pat, idx) => (
                <div key={idx} className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-red-800 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                      {pat.number}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">Paten Resmi</span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 pt-1">
                    {pat.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Ingredients & Benefits */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Bahan Aktif Premium</span>
              </h3>
              <ul className="space-y-2 text-xs text-stone-700">
                {product.keyIngredients.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Khasiat & Manfaat Utama</span>
              </h3>
              <ul className="space-y-2 text-xs text-stone-700">
                {product.mainBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Consumption Guide */}
          <div className="pt-6 bg-stone-50 rounded-xl p-5 border border-stone-200">
            <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-700" />
              <span>Petunjuk Konsumsi Maksimal (Metode Sublingual)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="border-l-2 border-red-700 pl-3">
                <span className="font-semibold text-stone-900 block">Waktu Konsumsi:</span>
                <span className="text-stone-600">{product.consumptionGuide.timing}</span>
              </div>
              <div className="border-l-2 border-red-700 pl-3">
                <span className="font-semibold text-stone-900 block">Dosis Dianjurkan:</span>
                <span className="text-stone-600">{product.consumptionGuide.dosage}</span>
              </div>
              <div className="border-l-2 border-red-700 pl-3">
                <span className="font-semibold text-stone-900 block">Cara Pakai:</span>
                <span className="text-stone-600">{product.consumptionGuide.method}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={() => onOrder(product, quantity)}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp Distributor ({product.name})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
