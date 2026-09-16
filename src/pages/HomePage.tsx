import { useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { getTopDeals, getBiggestPriceDrops } from '@/data/products';
import { categories } from '@/data/categories';
import { navigate } from '@/router';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeader } from '@/components/SectionHeader';
import { DealBadge } from '@/components/DealBadge';
import { formatPrice, formatDiscount } from '@/utils/format';
import {
  Search, TrendingDown, Tag, Clock, ArrowRight,
  Scale, Bell, Compass, Zap, Mail, Store, ImageOff,
  Tv, Laptop, Smartphone, Home, Refrigerator, Sparkles,
  HeartPulse, Shirt, Gamepad2, Briefcase,
} from 'lucide-react';
import type { Product } from '@/types';
import { dealPath, productPath, categoryPath } from '@/utils/links';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Tv, Laptop, Smartphone, Home, Refrigerator, Sparkles,
  HeartPulse, Shirt, Gamepad2, Briefcase,
};

const whyUseFeatures = [
  { icon: Scale, title: 'Compare Prices', desc: 'See prices from multiple US retailers side by side and find the best deal.' },
  { icon: TrendingDown, title: 'Find Price Drops', desc: 'Track products whose prices have recently dropped and save big.' },
  { icon: Tag, title: 'Discover Deals', desc: 'Browse curated deals and discounts updated across popular categories.' },
  { icon: Clock, title: 'Save Time', desc: 'Stop checking multiple sites — find everything you need in one place.' },
];

export function HomePage() {
  useSEO({
    title: 'Find Better Deals. Track Better Prices.',
    description: 'Discover price drops, popular products, and deals from US retailers in one place. Compare prices and save on electronics, computers, phones, and more.',
    canonical: '/',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const topDeals = getTopDeals(8);
  const priceDrops = getBiggestPriceDrops(4);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Zap className="h-4 w-4" />
              Tracking deals across US retailers
            </div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Find Better Deals. <span className="text-blue-600">Track Better Prices.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Discover price drops, popular products, and deals from US retailers in one place.
            </p>

            <form onSubmit={handleSearch} className="mt-8 mx-auto max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, brands, or categories..."
                    className="w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 py-3.5 text-base text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Find Deals
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => navigate(categoryPath(cat.slug))}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's Top Deals */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          title="Today's Top Deals"
          subtitle="The best discounts available right now"
          action={
            <button
              onClick={() => navigate('/deals')}
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all <ArrowRight className="h-4 w-4" />
            </button>
          }
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Biggest Price Drops */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            title="Biggest Price Drops"
            subtitle="Products with the largest recent price reductions"
            action={
              <button
                onClick={() => navigate('/price-drops')}
                className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View all <ArrowRight className="h-4 w-4" />
              </button>
            }
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priceDrops.map((product) => (
              <PriceDropCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader title="Popular Categories" subtitle="Browse deals by category" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Tag;
            return (
              <button
                key={cat.slug}
                onClick={() => navigate(categoryPath(cat.slug))}
                className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-800">{cat.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{cat.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Why Use US Deal Tracker */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Why Use US Deal Tracker?</h2>
            <p className="mt-2 text-sm text-slate-500">Everything you need to shop smarter</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUseFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-12 text-center md:px-12">
          <div className="mx-auto max-w-xl">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Get the best deals in your inbox</h2>
            <p className="mt-2 text-blue-100">
              Subscribe to receive curated deals, price drop alerts, and exclusive savings.
            </p>
            {subscribed ? (
              <div className="mt-6 rounded-xl bg-white/15 px-6 py-4 text-white">
                Thanks for subscribing! Check your inbox for confirmation. (Demo only — no email is sent.)
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function PriceDropCard({ product }: { product: Product }) {
  const goToProduct = () => navigate(productPath(product.slug));
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg">
      <div className="relative cursor-pointer overflow-hidden bg-slate-100 pt-[100%]" onClick={goToProduct}>
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
        <div className="absolute right-2 top-2 rounded-lg bg-orange-500 px-2 py-1 text-xs font-bold text-white shadow">
          {formatDiscount(product.discountPercent)}
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
        </div>
        <div className="mt-auto pt-4">
          <a
            href={dealPath(product)}
            className="block w-full rounded-lg bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Check Deal
          </a>
        </div>
      </div>
    </div>
  );
}
