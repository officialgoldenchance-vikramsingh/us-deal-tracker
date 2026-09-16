# US Deal Tracker

US Deal Tracker is a React + Vite + TypeScript deal/price-tracking frontend prepared for a US shopping audience.

## Current status

- Responsive homepage, deals, categories, price drops, search, compare, product details, and legal pages.
- Clean browser URLs (`/deals`, `/product/...`, `/category/...`) with SPA fallback support.
- Legacy Bolt hash URLs are migrated to clean URLs automatically.
- Product/retailer deal links resolve by product slug instead of accepting arbitrary redirect URLs.
- SEO metadata uses absolute canonical/OG URLs.
- Sitemap and robots.txt use clean public URLs.
- Demo data remains clearly labeled and must be replaced with verified retailer data before publishing real offers.

## Important production requirement

The current product catalog is prototype data. Do not represent its prices, availability, retailers, or links as live offers. Real monetization requires approved affiliate programs and verified product/deal data from permitted APIs or feeds.

Affiliate/API secrets must never be placed in client-side `VITE_*` variables. Use a server-side function, database, or approved integration for secrets.

## Recommended free-first deployment path

1. Export this project from Bolt.
2. Put the project in GitHub.
3. Connect the repository to Cloudflare Pages (or another static host with SPA fallback).
4. Set the production site URL in the deployment environment.
5. Connect approved affiliate feeds/APIs through a server-side data layer.
6. Store products and price history in a database.
7. Add a scheduled job to refresh prices and mark stale deals.
8. Add analytics and a real newsletter provider only after their credentials and policies are configured.

## Build locally

```bash
npm install
npm run typecheck
npm run build
```

## Data architecture target

The `Product` and `Retailer` types already contain price history, availability, retailer information, and destination URLs. The next production layer should replace `src/data/products.ts` with a server-backed repository while keeping the UI components unchanged.
