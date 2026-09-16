import { useSEO } from '@/hooks/useSEO';
import { products } from '@/data/products';
import { categories, getCategoryBySlug } from '@/data/categories';
import { navigate } from '@/router';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeader } from '@/components/SectionHeader';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Tag, Laptop, Smartphone, Home, Refrigerator, Sparkles, HeartPulse, Shirt, Gamepad2, Briefcase, Tv } from 'lucide-react';
import { categoryPath } from '@/utils/links';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Tv, Laptop, Smartphone, Home, Refrigerator, Sparkles,
  HeartPulse, Shirt, Gamepad2, Briefcase,
};

export function DealsPage() {
  useSEO({
    title: 'All Deals',
    description: 'Browse all current deals and discounts from US retailers. Find the best savings across electronics, computers, phones, home, and more.',
    canonical: '/deals',
  });

  const deals = products
    .filter((p) => p.badge === 'DEAL' || p.badge === 'BEST PRICE')
    .sort((a, b) => b.discountPercent - a.discountPercent);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Deals' }]} />
      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-900">All Deals</h1>
        <p className="mt-2 text-slate-500">All current deals and discounts from US retailers ({deals.length} deals)</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {deals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export function CategoriesPage() {
  useSEO({
    title: 'Categories',
    description: 'Browse all product categories on US Deal Tracker — electronics, computers, phones, home & kitchen, appliances, beauty, health, fashion, gaming, and office.',
    canonical: '/categories',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Categories' }]} />
      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-900">All Categories</h1>
        <p className="mt-2 text-slate-500">Browse deals by category</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Tag;
          const count = products.filter((p) => p.category === cat.slug).length;
          return (
            <button
              key={cat.slug}
              onClick={() => navigate(categoryPath(cat.slug))}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left transition-all hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900">{cat.name}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{cat.description}</p>
                <p className="mt-1 text-xs font-medium text-blue-600">{count} products</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface CategoryPageProps {
  slug: string;
}

export function CategoryPage({ slug }: CategoryPageProps) {
  const category = getCategoryBySlug(slug);
  const categoryProducts = products.filter((p) => p.category === slug);

  useSEO({
    title: category ? `${category.name} Deals` : 'Category',
    description: category ? `Find the best ${category.name.toLowerCase()} deals from US retailers.` : '',
    canonical: `/category/${slug}`,
  });

  if (!category) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Category not found</h1>
        <button onClick={() => navigate('/categories')} className="mt-4 text-blue-600 hover:underline">
          Browse all categories
        </button>
      </div>
    );
  }

  const Icon = iconMap[category.icon] || Tag;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Categories', path: '/categories' }, { label: category.name }]} />
      <div className="mt-4 mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{category.name}</h1>
          <p className="mt-1 text-slate-500">{category.description} — {categoryProducts.length} products</p>
        </div>
      </div>
      {categoryProducts.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center text-slate-500">
          No products in this category yet. Check back soon!
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export function PriceDropsPage() {
  useSEO({
    title: 'Price Drops',
    description: 'See products with the biggest recent price drops. Track price changes and save on electronics, computers, home goods, and more.',
    canonical: '/price-drops',
  });

  const drops = products
    .filter((p) => p.previousPrice > p.currentPrice)
    .sort((a, b) => (b.previousPrice - b.currentPrice) - (a.previousPrice - a.currentPrice));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Price Drops' }]} />
      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Price Drops</h1>
        <p className="mt-2 text-slate-500">Products with the biggest recent price reductions ({drops.length} items)</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {drops.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export function SearchPage({ query }: { query: string }) {
  useSEO({
    title: query ? `Search: ${query}` : 'Search',
    description: 'Search for products, brands, and categories on US Deal Tracker.',
    canonical: '/search',
  });

  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.retailer.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Search' }]} />
      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          {query ? `Results for "${query}"` : 'Search'}
        </h1>
        <p className="mt-2 text-slate-500">
          {query ? `${results.length} product${results.length !== 1 ? 's' : ''} found` : 'Search for products, brands, or categories'}
        </p>
      </div>
      {query && results.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
          <p className="text-slate-500">No products found for "{query}".</p>
          <button onClick={() => navigate('/deals')} className="mt-4 text-blue-600 hover:underline">
            Browse all deals instead
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
