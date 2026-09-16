import type { Product, Retailer } from '@/types';

export function productPath(slug: string): string {
  return `/product/${encodeURIComponent(slug)}`;
}

export function categoryPath(slug: string): string {
  return `/category/${encodeURIComponent(slug)}`;
}

export function dealPath(product: Product, retailer?: Retailer): string {
  const params = new URLSearchParams({ product: product.slug });
  if (retailer) params.set('retailer', retailer.name);
  return `/redirect?${params.toString()}`;
}
