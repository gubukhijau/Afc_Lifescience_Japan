import React from 'react';
import { ShieldCheck, Award, ArrowUpRight, MessageCircle, FileText } from 'lucide-react';
import { AFCProduct } from '../data/products';

interface ProductCardProps {
  product: AFCProduct;
  onSelect: (product: AFCProduct) => void;
  onQuickOrder: (product: AFCProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onQuickOrder }) => {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(product.officialPrice);

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col transition-all hover:border-stone-400 group">
      {/* Product Image Slot */}
      <div 
        className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Clean unboxed metadata with typographic separators */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-medium">
            <span className="text-red-900 font-semibold">{product.categoryLabel}</span>
            <span className="font-mono text-stone-700 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded text-[11px] font-semibold">
              BV: {product.bv}
            </span>
          </div>

          <h3 
            onClick={() => onSelect(product)}
            className="text-xl font-bold text-stone-900 group-hover:text-red-900 transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 font-mono mt-0.5">
            {product.japaneseName}
          </p>

          <p className="text-xs text-stone-600 line-clamp-2 mt-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Japanese Patents Minimal List */}
        <div className="bg-stone-50 rounded-xl p-3 border border-stone-150 space-y-1.5">
          <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider flex items-center justify-between">
            <span>Hak Paten Teruji Jepang</span>
            <span className="font-mono text-stone-400">{product.patents.length} Paten</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.patents.map((pat, idx) => (
              <span 
                key={idx}
                className="text-[11px] font-mono font-medium text-stone-700 bg-white border border-stone-200 px-2 py-0.5 rounded"
                title={pat.title}
              >
                {pat.number}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-2 border-t border-stone-100 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-stone-400 block">Harga Resmi Distributor:</span>
              <span className="text-xl font-extrabold text-stone-900 font-mono">
                {formattedPrice}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono text-stone-500 block">{product.bpomNumber}</span>
              <span className="text-[11px] font-semibold text-emerald-700">Resmi BPOM RI</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onSelect(product)}
              className="px-3 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Detail & Paten</span>
            </button>
            <button
              onClick={() => onQuickOrder(product)}
              className="px-3 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Order WA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
