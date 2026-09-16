import { useEffect, useMemo, useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { navigate } from '@/router';
import { getProductBySlug } from '@/data/products';
import { ExternalLink, Shield, AlertTriangle, ArrowLeft } from 'lucide-react';

interface RedirectPageProps {
  productSlug: string;
  retailerName?: string;
}

export function RedirectPage({ productSlug, retailerName }: RedirectPageProps) {
  const product = getProductBySlug(productSlug);
  const retailer = useMemo(
    () => product?.retailers.find((item) => item.name === retailerName) ?? product?.retailers[0],
    [product, retailerName],
  );
  const [countdown, setCountdown] = useState(5);

  useSEO({
    title: product ? `Continue to ${retailer?.name ?? product.retailer}` : 'Deal Not Found',
    description: product ? `Continue to the retailer for ${product.name}.` : 'The requested deal could not be found.',
    canonical: '/redirect',
  });

  const destinationUrl = retailer?.destinationUrl || product?.destinationUrl || '';
  const isPlaceholder = destinationUrl.includes('example.com');
  const canRedirect = /^https:\/\//i.test(destinationUrl) && !isPlaceholder;

  useEffect(() => {
    if (!canRedirect) return;
    if (countdown <= 0) {
      window.location.assign(destinationUrl);
      return;
    }
    const timer = window.setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [countdown, destinationUrl, canRedirect]);

  if (!product || !retailer) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Deal not found</h1>
        <p className="mt-3 text-slate-500">This deal is no longer available.</p>
        <button onClick={() => navigate('/deals')} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          <ArrowLeft className="h-4 w-4" /> Back to deals
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
          <ExternalLink className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{canRedirect ? "You're being redirected" : 'Deal link not active yet'}</h1>
        <p className="mt-3 text-slate-600">
          {canRedirect ? (
            <>You are about to visit <strong className="text-slate-800">{retailer.name}</strong> for <strong className="text-slate-800">{product.name}</strong>.</>
          ) : (
            <>This product is still using prototype data. A verified retailer/affiliate link must be connected before purchases can be sent to a retailer.</>
          )}
        </p>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Prototype data</p>
              <p className="mt-1 text-xs leading-relaxed text-amber-700">
                Prices, retailers and links on this prototype are sample data. They must not be presented as live offers until connected to verified retailer data.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          {canRedirect && (
            <a href={destinationUrl} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              <ExternalLink className="h-4 w-4" /> Continue to retailer
            </a>
          )}
          <button onClick={() => navigate(`/product/${encodeURIComponent(product.slug)}`)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <ArrowLeft className="h-4 w-4" /> View product
          </button>
        </div>

        {canRedirect && countdown > 0 && (
          <p className="mt-6 text-sm text-slate-400">Redirecting automatically in {countdown} seconds...</p>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Shield className="h-3.5 w-3.5" />
          US Deal Tracker may earn a commission when a verified affiliate link is used and a qualifying purchase is made.
        </div>
      </div>
    </div>
  );
}
