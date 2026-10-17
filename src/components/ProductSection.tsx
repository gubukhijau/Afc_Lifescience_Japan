import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { AFC_PRODUCTS, AFCProduct } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  onSelectProduct: (product: AFCProduct) => void;
  onQuickOrder: (product: AFCProduct) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectProduct,
  onQuickOrder
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'cellular', label: 'Regenerasi Sel' },
    { id: 'immunity', label: 'Imunitas & Pencernaan' },
    { id: 'brain-vision', label: 'Mata & Otak' },
    { id: 'skincare', label: 'Serum Anti-Aging' }
  ];

  const filteredProducts = useMemo(() => {
    return AFC_PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keyIngredients.some((i) =>
          i.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="produk" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-900 tracking-wider uppercase mb-2">
            <span>KATALOG RESMI AFC LIFE SCIENCE</span>
            <span aria-hidden="true">·</span>
            <span>PRODUK ASLI JEPANG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            Rangkaian Suplemen Peptida Alami & Skincare Berpaten Fungsi
          </h2>
          <p className="text-base text-stone-600 mt-3 font-normal leading-relaxed">
            Setiap produk diformulasikan langsung di Jepang dengan pengujian klinis ketat, 
            mengantongi izin edar resmi BPOM RI, sertifikasi halal, dan tercatat di indeks medis MIMS.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari produk / bahan / keluhan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 text-stone-900"
            />
          </div>
        </div>

        {/* Product Cards Grid - 3 Columns Layout */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickOrder={onQuickOrder}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-sm text-stone-500">Tidak ada produk yang cocok dengan pencarian "{searchQuery}".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-red-900 underline"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}

        {/* Comparative Clinical Summary Bar */}
        <div className="mt-14 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
            <div>
              <span className="text-xs font-bold text-red-900 tracking-wider uppercase block">
                PANDUAN KOMPARASI LENGKAP RESMI AFC
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                Katalog 5 Produk Resmi AFC Sesuai Kebutuhan & Nilai BV
              </h3>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Bisa dikombinasikan untuk hasil optimal (Sinergi Dual Therapy)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-6 text-xs text-stone-600">
            <div className="border-l-2 border-blue-600 pl-3">
              <span className="font-bold text-stone-900 block text-sm mb-0.5">1 Box Subarashi</span>
              <span className="text-[11px] font-mono text-stone-500 block mb-1">Rp 1.800.000 · 75 BV</span>
              <p>Stem cell alami, sirkulasi darah mikro, pembuluh darah, dan kesehatan kardiovaskular.</p>
            </div>
            <div className="border-l-2 border-amber-600 pl-3">
              <span className="font-bold text-stone-900 block text-sm mb-0.5">Subarashi Gold 2.0</span>
              <span className="text-[11px] font-mono text-stone-500 block mb-1">Rp 2.000.000 · 75 BV</span>
              <p>Formula penyempurnaan generasi 2.0 dengan penyerapan seluler lebih cepat.</p>
            </div>
            <div className="border-l-2 border-rose-900 pl-3">
              <span className="font-bold text-stone-900 block text-sm mb-0.5">Utsukushhii Gold 2.0</span>
              <span className="text-[11px] font-mono text-stone-500 block mb-1">Rp 1.850.000 · 75 BV</span>
              <p>1 Triliun probiotik, aktivasi sel NK imunitas, kesehatan usus & anti-tumor.</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-3">
              <span className="font-bold text-stone-900 block text-sm mb-0.5">1 Box Hikari</span>
              <span className="text-[11px] font-mono text-stone-500 block mb-1">Rp 1.800.000 · 75 BV</span>
              <p>Vegan peptide proteksi mata dari radiasi gawai & daya ingat fokus otak.</p>
            </div>
            <div className="border-l-2 border-cyan-700 pl-3">
              <span className="font-bold text-stone-900 block text-sm mb-0.5">Serum Sensei Suru</span>
              <span className="text-[11px] font-mono text-stone-500 block mb-1">Rp 3.500.000 · 150 BV</span>
              <p>Serum botol biru 35 ml nano peptide peremajaan kulit, flek, & kerutan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
