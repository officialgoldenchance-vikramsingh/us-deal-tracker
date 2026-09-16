import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description?: string;
  ogType?: string;
  canonical?: string;
}

const BASE_TITLE = 'US Deal Tracker';

function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path || '/', window.location.origin).toString();
}

export function useSEO({ title, description, ogType = 'website', canonical }: SEOOptions) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    const canonicalUrl = canonical ? absoluteUrl(canonical) : window.location.href;

    document.title = fullTitle;
    setMeta('description', description || 'Discover deals, price drops, and product comparisons from US retailers.');
    setMeta('og:description', description || '', true);
    setMeta('og:title', fullTitle, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description || '');

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, [title, description, ogType, canonical]);
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}
