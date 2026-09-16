export type DealBadgeType = 'DEAL' | 'PRICE DROP' | 'BEST PRICE' | 'POPULAR';

export type Availability = 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Backorder';

export interface Retailer {
  name: string;
  /** Placeholder destination URL — replace with real affiliate URLs later. */
  destinationUrl: string;
  price: number;
  previousPrice?: number;
  availability: Availability;
  dealStatus: DealBadgeType | 'None';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  currentPrice: number;
  previousPrice: number;
  discountPercent: number;
  retailer: string;
  /** Placeholder destination URL — replace with real affiliate URLs later. */
  destinationUrl: string;
  badge: DealBadgeType;
  image: string;
  /** When the price was last observed to drop (ISO date string). */
  priceDropDate?: string;
  priceHistory: { date: string; price: number }[];
  retailers: Retailer[];
  popularity: number;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
}
