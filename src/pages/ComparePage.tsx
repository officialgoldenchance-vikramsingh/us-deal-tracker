import { useState, useEffect } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { products, getProductById } from '@/data/products';
import { categories, getCategoryBySlug } from '@/data/categories';
import { navigate } from '@/router';
import { Breadcrumb } from '@/components/Breadcrumb';
import { formatPrice, formatDiscount } from '@/utils/format';
import { Plus, X, Scale, Store, ImageOff } from 'lucide-react';
import type { Product } from '@/types';
import { dealPath, productPath } from '@/utils/links';

const COMPARE_KEY = 'usdt-compare-ids';

function getStoredIds(): string[] {
  try {
    const raw = localStorage.getItem(COMPARE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function storeIds(ids: string[]) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(ids));
}

export function ComparePage() {
  useSEO({
    title: 'Compare Products',
    description: 'Compare products side by side — prices, features, retailers, and deals from US retailers.',
    canonical: '/compare',
  });

  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showPicker, setShowPicker] = useState(false);
  const [compareImgErrors, setCompareImgErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCompareIds(getStoredIds());
  }, []);

  const updateStored = (ids: string[]) => {
    setCompareIds(ids);
    storeIds(ids);
  };

  const removeProduct = (id: string) => {
    updateStored(compareIds.filter((x) => x !== id));
  };

  const addProduct = (id: string) => {
    if (!compareIds.includes(id) && compareIds.length < 4) {
      updateStored([...compareIds, id]);
    }
    setShowPicker(false);
  };

  const comparedProducts: Product[] = compareIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);

  const availableToAdd = products.filter((p) => !compareIds.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Compare' }]} />
      <div className="mt-4 mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
            <Scale className="h-7 w-7 text-blue-600" />
            Compare Products
          </h1>
          <p className="mt-2 text-slate-500">Compare up to 4 products side by side</p>
        </div>
        {comparedProducts.length < 4 && (
          <button
            onClick={() => setShowPicker((v) => !v)}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600"
          >
            <Plus className="h-4 w-4" /> Add Product
          </button>
        )}
      </div>

      {/* Product picker */}
      {showPicker && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="mb-3 text-sm font-semibold text-slate-700">Select a product to add</h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 max-h-80 overflow-y-auto">
            {availableToAdd.map((p) => (
              <button
                key={p.id}
                onClick={() => addProduct(p.id)}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-left hover:border-blue-300 hover:bg-blue-50/30"
              >
                <img src={p.image} alt="" className="h-12 w-12 rounded object-cover bg-slate-100" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }} />
                <div className="hidden h-12 w-12 rounded bg-slate-100 flex items-center justify-center"><ImageOff className="h-5 w-5 text-slate-300" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{p.name}</p>
                  <p className="text-xs text-slate-500">{formatPrice(p.currentPrice)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Comparison table */}
      {comparedProducts.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-16 text-center">
          <Scale className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-lg font-semibold text-slate-700">No products to compare yet</h3>
          <p className="mt-2 text-sm text-slate-500">Add products to see a side-by-side comparison.</p>
          <button
            onClick={() => setShowPicker(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" /> Add your first product
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="grid gap-4" style={{ gridTemplateColumns: `var(--compare-label-width) repeat(${comparedProducts.length}, minmax(220px, 1fr))` }}>
              {/* Header row */}
              <div className="flex items-center text-sm font-semibold text-slate-500">Product</div>
              {comparedProducts.map((p) => (
                <div key={p.id} className="relative rounded-xl border border-slate-200 bg-white p-4">
                  <button
                    onClick={() => removeProduct(p.id)}
                    className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-500"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <div className="overflow-hidden rounded-lg bg-slate-100 pt-[80%] relative mb-3">
                    {compareImgErrors[p.id] ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-slate-300">
                        <ImageOff className="h-6 w-6" />
                        <span className="text-[10px]">Image unavailable</span>
                      </div>
                    ) : (
                      <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" onError={() => setCompareImgErrors((prev) => ({ ...prev, [p.id]: true }))} />
                    )}
                  </div>
                  <h3
                    className="text-sm font-semibold text-slate-800 line-clamp-2 cursor-pointer hover:text-blue-600"
                    onClick={() => navigate(productPath(p.slug))}
                  >
                    {p.name}
                  </h3>
                </div>
              ))}

              {/* Price row */}
              <CompareRow label="Current Price">
                {comparedProducts.map((p) => {
                  const minPrice = Math.min(...comparedProducts.map((x) => x.currentPrice));
                  return (
                    <div key={p.id} className="py-3">
                      <span className={`text-lg font-bold ${p.currentPrice === minPrice ? 'text-emerald-600' : 'text-slate-900'}`}>
                        {formatPrice(p.currentPrice)}
                      </span>
                      {p.currentPrice === minPrice && (
                        <span className="ml-2 text-xs font-medium text-emerald-600">Best</span>
                      )}
                    </div>
                  );
                })}
              </CompareRow>

              {/* Previous price */}
              <CompareRow label="Previous Price">
                {comparedProducts.map((p) => (
                  <div key={p.id} className="py-3 text-sm text-slate-400 line-through">
                    {formatPrice(p.previousPrice)}
                  </div>
                ))}
              </CompareRow>

              {/* Discount */}
              <CompareRow label="Discount">
                {comparedProducts.map((p) => (
                  <div key={p.id} className="py-3">
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-sm font-bold text-emerald-600">
                      {formatDiscount(p.discountPercent)}
                    </span>
                  </div>
                ))}
              </CompareRow>

              {/* Category */}
              <CompareRow label="Category">
                {comparedProducts.map((p) => {
                  const cat = getCategoryBySlug(p.category);
                  return (
                    <div key={p.id} className="py-3 text-sm text-slate-600">
                      {cat?.name || p.category}
                    </div>
                  );
                })}
              </CompareRow>

              {/* Retailer */}
              <CompareRow label="Best Retailer">
                {comparedProducts.map((p) => (
                  <div key={p.id} className="py-3 flex items-center gap-1.5 text-sm text-slate-600">
                    <Store className="h-3.5 w-3.5 text-slate-400" />
                    {p.retailer}
                  </div>
                ))}
              </CompareRow>

              {/* Description */}
              <CompareRow label="Description">
                {comparedProducts.map((p) => (
                  <div key={p.id} className="py-3 text-xs text-slate-500 leading-relaxed">
                    {p.shortDescription}
                  </div>
                ))}
              </CompareRow>

              {/* Action */}
              <CompareRow label="">
                {comparedProducts.map((p) => (
                  <div key={p.id} className="py-3">
                    <a
                      href={dealPath(p)}
                      className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Check Deal
                    </a>
                  </div>
                ))}
              </CompareRow>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CompareRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center text-sm font-semibold text-slate-500 border-t border-slate-100 pt-3">{label}</div>
      {children}
    </>
  );
}
