import { useState } from 'react';
import type { Product } from '@/types';
import { navigate } from '@/router';
import { DealBadge } from './DealBadge';
import { formatPrice, formatDiscount } from '@/utils/format';
import { Store, ImageOff } from 'lucide-react';
import { dealPath, productPath } from '@/utils/links';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const goToProduct = () => navigate(productPath(product.slug));
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg">
      <div
        className="relative cursor-pointer overflow-hidden bg-slate-100 pt-[100%]"
        onClick={goToProduct}
      >
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-300">
            <ImageOff className="h-8 w-8" />
            <span className="text-xs">Image unavailable</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute left-2 top-2">
          <DealBadge badge={product.badge} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3
          className="cursor-pointer text-sm font-semibold leading-snug text-slate-800 line-clamp-2 hover:text-blue-600"
          onClick={goToProduct}
        >
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
          <Store className="h-3.5 w-3.5" />
          <span>{product.retailer}</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900">{formatPrice(product.currentPrice)}</span>
          <span className="text-sm text-slate-400 line-through">{formatPrice(product.previousPrice)}</span>
          <span className="ml-auto text-sm font-bold text-emerald-600">{formatDiscount(product.discountPercent)}</span>
        </div>

        <div className="mt-auto pt-4">
          <a
            href={dealPath(product)}
            className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Check Deal
          </a>
        </div>
      </div>
    </div>
  );
}
