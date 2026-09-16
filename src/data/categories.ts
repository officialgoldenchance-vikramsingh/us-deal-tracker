import type { Category } from '@/types';

export const categories: Category[] = [
  { name: 'Electronics', slug: 'electronics', description: 'TVs, audio, cameras and gadgets', icon: 'Tv' },
  { name: 'Computers', slug: 'computers', description: 'Laptops, desktops and accessories', icon: 'Laptop' },
  { name: 'Phones', slug: 'phones', description: 'Smartphones and mobile accessories', icon: 'Smartphone' },
  { name: 'Home & Kitchen', slug: 'home-kitchen', description: 'Everything for your home', icon: 'Home' },
  { name: 'Appliances', slug: 'appliances', description: 'Large and small appliances', icon: 'Refrigerator' },
  { name: 'Beauty', slug: 'beauty', description: 'Skincare, makeup and personal care', icon: 'Sparkles' },
  { name: 'Health & Fitness', slug: 'health-fitness', description: 'Wellness and fitness gear', icon: 'HeartPulse' },
  { name: 'Fashion', slug: 'fashion', description: 'Clothing, shoes and accessories', icon: 'Shirt' },
  { name: 'Gaming', slug: 'gaming', description: 'Consoles, games and gear', icon: 'Gamepad2' },
  { name: 'Office', slug: 'office', description: 'Office supplies and equipment', icon: 'Briefcase' },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
