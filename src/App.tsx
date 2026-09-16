import { useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import {
  DealsPage,
  CategoriesPage,
  CategoryPage,
  PriceDropsPage,
  SearchPage,
} from '@/pages/ListingPages';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { ComparePage } from '@/pages/ComparePage';
import { RedirectPage } from '@/pages/RedirectPage';
import { StaticPage } from '@/pages/StaticPage';

function App() {
  const { route } = useRouter();
  const path = route.path;

  const renderPage = () => {
    // /product/:slug
    if (path.startsWith('/product/')) {
      const slug = path.slice('/product/'.length);
      return <ProductDetailPage slug={slug} />;
    }

    // /category/:slug
    if (path.startsWith('/category/')) {
      const slug = path.slice('/category/'.length);
      return <CategoryPage slug={slug} />;
    }

    // /search?q=...
    if (path === '/search') {
      return <SearchPage query={route.query.q || ''} />;
    }

    // /redirect?url=...&name=...
    if (path === '/redirect') {
      return <RedirectPage productSlug={route.query.product || ''} retailerName={route.query.retailer || ''} />;
    }

    // Static pages
    const staticPages = ['about', 'contact', 'privacy', 'terms', 'affiliate-disclosure', 'disclaimer'];
    if (staticPages.includes(path.slice(1))) {
      return <StaticPage pageKey={path.slice(1)} />;
    }

    switch (path) {
      case '/':
        return <HomePage />;
      case '/deals':
        return <DealsPage />;
      case '/categories':
        return <CategoriesPage />;
      case '/price-drops':
        return <PriceDropsPage />;
      case '/compare':
        return <ComparePage />;
      default:
        return <StaticPage pageKey="__notfound__" />;
    }
  };

  const isRedirect = path === '/redirect';

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{renderPage()}</main>
      {isRedirect ? null : <Footer />}
    </div>
  );
}

export default App;
