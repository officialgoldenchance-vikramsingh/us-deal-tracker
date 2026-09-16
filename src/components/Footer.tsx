import { navigate } from '@/router';

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms', path: '/terms' },
  { label: 'Affiliate Disclosure', path: '/affiliate-disclosure' },
  { label: 'Disclaimer', path: '/disclaimer' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                US
              </div>
              <span className="text-lg font-bold text-white">Deal Tracker</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Discover price drops, popular products, and deals from US retailers in one place.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Affiliate Disclosure</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              US Deal Tracker may earn a commission when you click through to a retailer and make a purchase.
              This does not affect the price you pay. All prices shown are demo data for the prototype.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} US Deal Tracker. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Demo data — not live prices. Prototype only.
          </p>
        </div>
      </div>
    </footer>
  );
}
