import { useSEO } from '@/hooks/useSEO';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { navigate } from '@/router';
import { DealBadge } from '@/components/DealBadge';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ProductCard } from '@/components/ProductCard';
import { formatPrice, formatDiscount } from '@/utils/format';
import { useState } from 'react';
import { Store, Check, X, ArrowLeft, ShoppingBag, ImageOff } from 'lucide-react';
import type { Availability } from '@/types';
import { dealPath, categoryPath } from '@/utils/links';

interface ProductDetailPageProps {
  slug: string;
}

const availabilityStyles: Record<Availability, string> = {
  'In Stock': 'text-emerald-600',
  'Low Stock': 'text-orange-500',
  'Out of Stock': 'text-red-500',
  'Backorder': 'text-amber-600',
};

export function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const product = getProductBySlug(slug);
  const [imgError, setImgError] = useState(false);

  useSEO({
    title: product ? product.name : 'Product Not Found',
    description: product ? product.shortDescription : '',
    ogType: 'article',
    canonical: `/product/${slug}`,
  });

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
        <button onClick={() => navigate('/')} className="mt-4 text-blue-600 hover:underline">
          Return home
        </button>
      </div>
    );
  }

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);
  const redirectUrl = dealPath(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Categories', path: '/categories' },
          { label: category?.name || product.category, path: `/category/${product.category}` },
          { label: product.name },
        ]}
      />

      <button
        onClick={() => navigate(categoryPath(product.category))}
        className="mt-4 flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600"
      >
        <ArrowLeft className="h-4 w-4" /> Back to {category?.name}
      </button>

      {/* Product main */}
      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <div className="relative pt-[100%]">
            {imgError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-300">
                <ImageOff className="h-10 w-10" />
                <span className="text-sm">Image unavailable</span>
              </div>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                onError={() => setImgError(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute left-3 top-3">
              <DealBadge badge={product.badge} size="md" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <Store className="h-4 w-4" />
            <span>Best price at <strong className="text-slate-700">{product.retailer}</strong></span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-slate-900">{formatPrice(product.currentPrice)}</span>
            <span className="text-lg text-slate-400 line-through">{formatPrice(product.previousPrice)}</span>
            <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-sm font-bold text-emerald-600">
              {formatDiscount(product.discountPercent)}
            </span>
          </div>

          <p className="mt-5 text-sm text-slate-600 leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <a
              href={redirectUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <ShoppingBag className="h-5 w-5" />
              Check Deal at {product.retailer}
            </a>
          </div>

          {/* Price history mini chart */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Price History (Demo)</h3>
            <PriceHistoryChart history={product.priceHistory} />
          </div>
        </div>
      </div>

      {/* Price comparison */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Price Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left">
                <th className="px-5 py-3 font-semibold text-slate-700">Retailer</th>
                <th className="px-5 py-3 font-semibold text-slate-700">Price</th>
                <th className="px-5 py-3 font-semibold text-slate-700">Availability</th>
                <th className="px-5 py-3 font-semibold text-slate-700">Deal Status</th>
                <th className="px-5 py-3 font-semibold text-slate-700 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {product.retailers.map((ret, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Store className="h-4 w-4 text-slate-400" />
                      <span className="font-medium text-slate-800">{ret.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-bold text-slate-900">{formatPrice(ret.price)}</span>
                    {ret.previousPrice && (
                      <span className="ml-2 text-xs text-slate-400 line-through">{formatPrice(ret.previousPrice)}</span>
                    )}
                  </td>
                  <td className={`px-5 py-4 font-medium ${availabilityStyles[ret.availability]}`}>
                    {ret.availability}
                  </td>
                  <td className="px-5 py-4">
                    {ret.dealStatus !== 'None' ? (
                      <DealBadge badge={ret.dealStatus} />
                    ) : (
                      <span className="text-xs text-slate-400">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href={dealPath(product, ret)}
                      className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                    >
                      Check Deal
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Products</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function PriceHistoryChart({ history }: { history: { date: string; price: number }[] }) {
  if (history.length === 0) return null;
  const prices = history.map((h) => h.price);
  const max = Math.max(...prices);
  const min = Math.min(...prices);
  const range = max - min || 1;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-end justify-between gap-2 h-32">
        {history.map((point, i) => {
          const heightPct = ((point.price - min) / range) * 80 + 20;
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-[10px] font-medium text-slate-500">{formatPrice(point.price)}</span>
              <div className="w-full bg-blue-100 rounded-t" style={{ height: `${heightPct}%` }}>
                <div className="w-full h-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" />
              </div>
              <span className="text-[10px] text-slate-400">
                {new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-slate-400 text-center">Demo price history data — not live tracking</p>
    </div>
  );
}
