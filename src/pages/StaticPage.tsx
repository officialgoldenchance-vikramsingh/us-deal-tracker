import { useSEO } from '@/hooks/useSEO';
import { Breadcrumb } from '@/components/Breadcrumb';
import { navigate } from '@/router';
import { Mail, FileText, Shield, Info, AlertCircle } from 'lucide-react';

interface StaticPageConfig {
  path: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
}

const staticPages: Record<string, StaticPageConfig> = {
  'about': {
    path: '/about',
    title: 'About US Deal Tracker',
    icon: Info,
    content: (
      <>
        <p>US Deal Tracker is a deal and price tracking website designed to help US shoppers discover the best deals, price drops, and popular products from retailers across the United States.</p>
        <p>Our mission is simple: save you time and money by bringing deals, price comparisons, and product information together in one convenient place.</p>
        <h2>What We Do</h2>
        <ul>
          <li><strong>Track Deals:</strong> We curate deals and discounts across popular categories.</li>
          <li><strong>Compare Prices:</strong> We show prices from multiple retailers side by side so you can find the best offer.</li>
          <li><strong>Monitor Price Drops:</strong> We highlight products whose prices have recently dropped.</li>
          <li><strong>Organize Products:</strong> We categorize products to help you find exactly what you're looking for.</li>
        </ul>
        <div className="info-note">
          <strong>Note:</strong> This is a working prototype. All prices and product data shown are demo data for development purposes. Live product feeds and real retailer pricing will be connected in future versions.
        </div>
      </>
    ),
  },
  'contact': {
    path: '/contact',
    title: 'Contact Us',
    icon: Mail,
    content: (
      <>
        <p>Have a question, suggestion, or found a great deal you'd like to share? We'd love to hear from you.</p>
        <div className="contact-grid">
          <div>
            <h3>General Inquiries</h3>
            <p>hello@usdealtracker.example</p>
          </div>
          <div>
            <h3>Partnerships</h3>
            <p>partners@usdealtracker.example</p>
          </div>
          <div>
            <h3>Press</h3>
            <p>press@usdealtracker.example</p>
          </div>
        </div>
        <div className="info-note">
          <strong>Note:</strong> These are placeholder contact details for the prototype. A real contact form will be added in a future version.
        </div>
      </>
    ),
  },
  'privacy': {
    path: '/privacy',
    title: 'Privacy Policy',
    icon: Shield,
    content: (
      <>
        <p>Last updated: September 16, 2026</p>
        <p>This Privacy Policy describes how US Deal Tracker collects, uses, and protects your information when you use our website.</p>
        <h2>Information We Collect</h2>
        <ul>
          <li><strong>Email address:</strong> If you subscribe to our newsletter, we collect your email to send you deal alerts.</li>
          <li><strong>Usage data:</strong> We may collect anonymous analytics about how you use the site to improve our service.</li>
          <li><strong>Cookies:</strong> We use cookies to remember your preferences and comparison selections.</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To send you deal alerts and newsletters (only if you subscribe).</li>
          <li>To improve our website and user experience.</li>
          <li>To track which deals are most popular.</li>
        </ul>
        <h2>Affiliate Links</h2>
        <p>When you click a deal link, you may be redirected to a retailer's website. The retailer may set their own cookies. We may earn a commission if you make a purchase, at no additional cost to you.</p>
        <h2>Your Rights</h2>
        <p>You can unsubscribe from our newsletter at any time. You can disable cookies in your browser settings.</p>
        <div className="info-note">
          <strong>Note:</strong> This is a template privacy policy for the prototype. Please consult a legal professional to customize this policy for production use.
        </div>
      </>
    ),
  },
  'terms': {
    path: '/terms',
    title: 'Terms of Service',
    icon: FileText,
    content: (
      <>
        <p>Last updated: September 16, 2026</p>
        <p>By using US Deal Tracker, you agree to these terms and conditions.</p>
        <h2>Use of the Website</h2>
        <p>US Deal Tracker provides deal and price tracking information for educational and informational purposes. All product data shown in this prototype is demo data and does not represent live prices.</p>
        <h2>Accuracy of Information</h2>
        <p>We strive to provide accurate information, but we cannot guarantee that all prices, deals, or product details are current or correct. Always verify pricing and availability directly with the retailer before making a purchase.</p>
        <h2>Affiliate Links</h2>
        <p>US Deal Tracker may use affiliate links. We may earn a commission when you click through to a retailer and make a purchase. This does not affect the price you pay.</p>
        <h2>External Links</h2>
        <p>Our website links to external retailer websites. We are not responsible for the content, policies, or practices of these third-party sites.</p>
        <h2>Limitation of Liability</h2>
        <p>US Deal Tracker is not liable for any damages arising from the use of this website or from purchases made through affiliate links.</p>
        <div className="info-note">
          <strong>Note:</strong> These are template terms for the prototype. Please consult a legal professional for production use.
        </div>
      </>
    ),
  },
  'affiliate-disclosure': {
    path: '/affiliate-disclosure',
    title: 'Affiliate Disclosure',
    icon: AlertCircle,
    content: (
      <>
        <p>Last updated: September 16, 2026</p>
        <p>US Deal Tracker is a participant in various affiliate marketing programs. This means we may earn commissions on purchases made through links on our website.</p>
        <h2>How It Works</h2>
        <p>When you click a "Check Deal" button, you may be redirected to a retailer's website. If you make a purchase, the retailer may pay us a commission. This comes at no additional cost to you.</p>
        <h2>Our Commitment</h2>
        <ul>
          <li>We recommend products based on deals and prices, not solely on commission rates.</li>
          <li>We strive to show the best available price, even if we don't earn a commission on it.</li>
          <li>Our content and recommendations are not influenced by any retailer.</li>
        </ul>
        <div className="info-note">
          <strong>Note:</strong> For the prototype, all deal links are placeholders. No actual affiliate tracking is in place yet.
        </div>
      </>
    ),
  },
  'disclaimer': {
    path: '/disclaimer',
    title: 'Disclaimer',
    icon: AlertCircle,
    content: (
      <>
        <p>Last updated: September 16, 2026</p>
        <p>The information provided by US Deal Tracker is for general informational purposes only.</p>
        <h2>Demo Data</h2>
        <p>All prices, product information, and deal data displayed on this website are demo/sample data for prototype purposes. They do not represent real-time prices or actual product availability.</p>
        <h2>No Guarantee</h2>
        <p>We do not guarantee the accuracy, completeness, or timeliness of any information on this website. Prices and availability are subject to change without notice.</p>
        <h2>External Links</h2>
        <p>US Deal Tracker may contain links to external websites. We are not responsible for the content or practices of these sites.</p>
        <h2>Professional Advice</h2>
        <p>Information on this website does not constitute financial, purchasing, or professional advice. Always do your own research before making a purchase.</p>
        <div className="info-note">
          <strong>Note:</strong> This is a prototype disclaimer. Please consult a legal professional for production use.
        </div>
      </>
    ),
  },
};

interface StaticPageProps {
  pageKey: string;
}

export function StaticPage({ pageKey }: StaticPageProps) {
  const config = staticPages[pageKey];

  useSEO({
    title: config?.title || 'Page Not Found',
    description: config ? `${config.title} — US Deal Tracker` : '',
    canonical: config?.path || '',
  });

  if (!config) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-4 text-slate-500">The page you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Go to homepage
        </button>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: config.title }]} />
      <div className="mt-6 flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{config.title}</h1>
      </div>
      <div className="static-content rounded-xl border border-slate-200 bg-white p-6 md:p-8 text-slate-600 leading-relaxed">
        {config.content}
      </div>
    </div>
  );
}
