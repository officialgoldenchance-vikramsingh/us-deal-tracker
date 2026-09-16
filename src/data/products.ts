import type { Product } from '@/types';

/**
 * DEMO DATA ONLY.
 *
 * All prices, retailers, and destination URLs below are sample placeholders
 * for the prototype. They are clearly separated from any future live product
 * feeds, retailer APIs, or affiliate URL systems.
 *
 * `destinationUrl` fields use https://example.com placeholders and should be
 * replaced with real retailer/affiliate URLs when live data is connected.
 *
 * Product images are royalty-free stock photos from Pexels, used as visual
 * placeholders. They represent the product category but are not the actual
 * products. In production, these would come from retailer/product feeds.
 */

export const products: Product[] = [
  {
    id: 'p001',
    slug: '55-inch-4k-smart-tv',
    name: '55" 4K Ultra HD Smart LED TV',
    category: 'electronics',
    shortDescription: 'Stunning 4K clarity with HDR and built-in streaming apps.',
    description:
      'A 55-inch 4K Ultra HD Smart LED TV with HDR10+ support, a 120Hz refresh rate, and built-in access to popular streaming services. Three HDMI inputs and one USB port make it easy to connect all your devices.',
    currentPrice: 379.99,
    previousPrice: 599.99,
    discountPercent: 37,
    retailer: 'ShopMart',
    destinationUrl: 'https://example.com/redirect/55-inch-4k-smart-tv',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/32326321/pexels-photo-32326321.png?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-14',
    popularity: 95,
    priceHistory: [
      { date: '2026-08-01', price: 599.99 },
      { date: '2026-08-15', price: 549.99 },
      { date: '2026-09-01', price: 499.99 },
      { date: '2026-09-14', price: 379.99 },
    ],
    retailers: [
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p001-shopmart', price: 379.99, previousPrice: 599.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'BuyMax', destinationUrl: 'https://example.com/redirect/p001-buymax', price: 399.99, previousPrice: 599.99, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'MegaStore', destinationUrl: 'https://example.com/redirect/p001-megastore', price: 429.99, availability: 'Low Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p002',
    slug: 'noise-cancelling-wireless-headphones',
    name: 'Active Noise Cancelling Wireless Headphones',
    category: 'electronics',
    shortDescription: 'Immersive sound with 40-hour battery life and ANC.',
    description:
      'Over-ear wireless headphones with active noise cancellation, Bluetooth 5.3, and up to 40 hours of battery life. Features plush memory-foam ear cushions and a lightweight folding design for travel.',
    currentPrice: 149.99,
    previousPrice: 249.99,
    discountPercent: 40,
    retailer: 'AudioPlus',
    destinationUrl: 'https://example.com/redirect/noise-cancelling-headphones',
    badge: 'BEST PRICE',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-15',
    popularity: 92,
    priceHistory: [
      { date: '2026-08-01', price: 249.99 },
      { date: '2026-08-20', price: 199.99 },
      { date: '2026-09-15', price: 149.99 },
    ],
    retailers: [
      { name: 'AudioPlus', destinationUrl: 'https://example.com/redirect/p002-audioplus', price: 149.99, previousPrice: 249.99, availability: 'In Stock', dealStatus: 'BEST PRICE' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p002-shopmart', price: 169.99, previousPrice: 249.99, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'BuyMax', destinationUrl: 'https://example.com/redirect/p002-buymax', price: 179.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p003',
    slug: 'ultrabook-laptop-16gb-512gb',
    name: '14" Ultrabook Laptop — 16GB RAM, 512GB SSD',
    category: 'computers',
    shortDescription: 'Lightweight laptop with all-day battery and fast SSD.',
    description:
      'A 14-inch Ultrabook with a 1920x1200 IPS display, 16GB RAM, 512GB NVMe SSD, and up to 18 hours of battery life. Weighs just 2.7 lbs, making it ideal for work and travel.',
    currentPrice: 699.0,
    previousPrice: 999.0,
    discountPercent: 30,
    retailer: 'TechHub',
    destinationUrl: 'https://example.com/redirect/ultrabook-laptop',
    badge: 'PRICE DROP',
    image: 'https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-10',
    popularity: 88,
    priceHistory: [
      { date: '2026-08-01', price: 999.0 },
      { date: '2026-09-01', price: 849.0 },
      { date: '2026-09-10', price: 699.0 },
    ],
    retailers: [
      { name: 'TechHub', destinationUrl: 'https://example.com/redirect/p003-techhub', price: 699.0, previousPrice: 999.0, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p003-shopmart', price: 749.0, previousPrice: 999.0, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'MegaStore', destinationUrl: 'https://example.com/redirect/p003-megastore', price: 779.0, availability: 'Backorder', dealStatus: 'None' },
    ],
  },
  {
    id: 'p004',
    slug: 'mechanical-gaming-keyboard-rgb',
    name: 'Mechanical Gaming Keyboard — RGB Backlit',
    category: 'computers',
    shortDescription: 'Tactile mechanical switches with customizable RGB.',
    description:
      'A full-size mechanical gaming keyboard with hot-swappable switches, per-key RGB backlighting, and a durable aluminum frame. Includes a detachable USB-C cable and wrist rest.',
    currentPrice: 79.99,
    previousPrice: 119.99,
    discountPercent: 33,
    retailer: 'GameGear',
    destinationUrl: 'https://example.com/redirect/mechanical-keyboard',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/8219211/pexels-photo-8219211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-12',
    popularity: 80,
    priceHistory: [
      { date: '2026-08-01', price: 119.99 },
      { date: '2026-09-12', price: 79.99 },
    ],
    retailers: [
      { name: 'GameGear', destinationUrl: 'https://example.com/redirect/p004-gamegear', price: 79.99, previousPrice: 119.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'TechHub', destinationUrl: 'https://example.com/redirect/p004-techhub', price: 89.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p005',
    slug: '5g-smartphone-256gb',
    name: '5G Smartphone — 6.5" Display, 256GB',
    category: 'phones',
    shortDescription: 'Fast 5G phone with a large OLED display and triple camera.',
    description:
      'A 5G smartphone with a 6.5" OLED display, triple rear camera system (50MP main), 256GB storage, and all-day battery with fast charging. IP68 water resistance.',
    currentPrice: 449.99,
    previousPrice: 699.99,
    discountPercent: 36,
    retailer: 'MobileWorld',
    destinationUrl: 'https://example.com/redirect/5g-smartphone',
    badge: 'PRICE DROP',
    image: 'https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-13',
    popularity: 90,
    priceHistory: [
      { date: '2026-08-01', price: 699.99 },
      { date: '2026-09-01', price: 599.99 },
      { date: '2026-09-13', price: 449.99 },
    ],
    retailers: [
      { name: 'MobileWorld', destinationUrl: 'https://example.com/redirect/p005-mobileworld', price: 449.99, previousPrice: 699.99, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p005-shopmart', price: 479.99, previousPrice: 699.99, availability: 'Low Stock', dealStatus: 'DEAL' },
      { name: 'BuyMax', destinationUrl: 'https://example.com/redirect/p005-buymax', price: 499.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p006',
    slug: 'wireless-charging-pad-15w',
    name: '15W Fast Wireless Charging Pad',
    category: 'phones',
    shortDescription: 'Quick-charge pad compatible with all Qi devices.',
    description:
      'A sleek 15W wireless charging pad with overcharge protection, a non-slip surface, and an LED charging indicator. Compatible with all Qi-enabled smartphones and earbuds.',
    currentPrice: 19.99,
    previousPrice: 34.99,
    discountPercent: 43,
    retailer: 'MobileWorld',
    destinationUrl: 'https://example.com/redirect/wireless-charger',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/947407/pexels-photo-947407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 65,
    priceHistory: [
      { date: '2026-08-01', price: 34.99 },
      { date: '2026-09-01', price: 24.99 },
      { date: '2026-09-16', price: 19.99 },
    ],
    retailers: [
      { name: 'MobileWorld', destinationUrl: 'https://example.com/redirect/p006-mobileworld', price: 19.99, previousPrice: 34.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'TechHub', destinationUrl: 'https://example.com/redirect/p006-techhub', price: 22.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p007',
    slug: 'stainless-steel-cookware-set-10pc',
    name: '10-Piece Stainless Steel Cookware Set',
    category: 'home-kitchen',
    shortDescription: 'Durable tri-ply cookware set with even heat distribution.',
    description:
      'A 10-piece stainless steel cookware set with tri-ply construction for even heating. Includes saucepans, a stockpot, frying pans, and lids. Oven-safe up to 500°F and compatible with all cooktops including induction.',
    currentPrice: 129.99,
    previousPrice: 199.99,
    discountPercent: 35,
    retailer: 'HomeGoods',
    destinationUrl: 'https://example.com/redirect/cookware-set',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/36552082/pexels-photo-36552082.png?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 72,
    priceHistory: [
      { date: '2026-08-01', price: 199.99 },
      { date: '2026-09-05', price: 149.99 },
      { date: '2026-09-16', price: 129.99 },
    ],
    retailers: [
      { name: 'HomeGoods', destinationUrl: 'https://example.com/redirect/p007-homegoods', price: 129.99, previousPrice: 199.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p007-shopmart', price: 139.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p008',
    slug: 'robot-vacuum-with-mapping',
    name: 'Robot Vacuum with Smart Mapping',
    category: 'appliances',
    shortDescription: 'Self-charging robot vacuum with room mapping and app control.',
    description:
      'A smart robot vacuum with LiDAR room mapping, multi-floor mapping, and app/voice control. Automatically recharges and resumes cleaning. Works with hardwood, tile, and low-pile carpet.',
    currentPrice: 199.99,
    previousPrice: 329.99,
    discountPercent: 39,
    retailer: 'HomeGoods',
    destinationUrl: 'https://example.com/redirect/robot-vacuum',
    badge: 'PRICE DROP',
    image: 'https://images.pexels.com/photos/36847304/pexels-photo-36847304.png?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-11',
    popularity: 85,
    priceHistory: [
      { date: '2026-08-01', price: 329.99 },
      { date: '2026-09-01', price: 279.99 },
      { date: '2026-09-11', price: 199.99 },
    ],
    retailers: [
      { name: 'HomeGoods', destinationUrl: 'https://example.com/redirect/p008-homegoods', price: 199.99, previousPrice: 329.99, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'MegaStore', destinationUrl: 'https://example.com/redirect/p008-megastore', price: 219.99, availability: 'Low Stock', dealStatus: 'DEAL' },
    ],
  },
  {
    id: 'p009',
    slug: 'espresso-machine-15-bar',
    name: '15-Bar Espresso Machine with Milk Frother',
    category: 'appliances',
    shortDescription: 'Barista-quality espresso at home with built-in frother.',
    description:
      'A compact 15-bar espresso machine with a built-in milk frother, a 58oz removable water tank, and a fast 40-second heat-up. Compatible with ground coffee and ESE pods.',
    currentPrice: 89.99,
    previousPrice: 149.99,
    discountPercent: 40,
    retailer: 'HomeGoods',
    destinationUrl: 'https://example.com/redirect/espresso-machine',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 78,
    priceHistory: [
      { date: '2026-08-01', price: 149.99 },
      { date: '2026-09-16', price: 89.99 },
    ],
    retailers: [
      { name: 'HomeGoods', destinationUrl: 'https://example.com/redirect/p009-homegoods', price: 89.99, previousPrice: 149.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p009-shopmart', price: 99.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p010',
    slug: 'vitamin-c-serum-30ml',
    name: 'Vitamin C Brightening Serum — 30ml',
    category: 'beauty',
    shortDescription: 'Brightens and evens skin tone with antioxidants.',
    description:
      'A lightweight Vitamin C serum with hyaluronic acid and Vitamin E. Helps brighten skin, even tone, and reduce the appearance of dark spots. Suitable for all skin types.',
    currentPrice: 14.99,
    previousPrice: 27.99,
    discountPercent: 46,
    retailer: 'BeautyBox',
    destinationUrl: 'https://example.com/redirect/vitamin-c-serum',
    badge: 'BEST PRICE',
    image: 'https://images.pexels.com/photos/4841459/pexels-photo-4841459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 70,
    priceHistory: [
      { date: '2026-08-01', price: 27.99 },
      { date: '2026-09-01', price: 19.99 },
      { date: '2026-09-16', price: 14.99 },
    ],
    retailers: [
      { name: 'BeautyBox', destinationUrl: 'https://example.com/redirect/p010-beautybox', price: 14.99, previousPrice: 27.99, availability: 'In Stock', dealStatus: 'BEST PRICE' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p010-shopmart', price: 17.99, availability: 'In Stock', dealStatus: 'DEAL' },
    ],
  },
  {
    id: 'p011',
    slug: 'adjustable-dumbbell-set-50lb',
    name: 'Adjustable Dumbbell Set — 50 lbs (Pair)',
    category: 'health-fitness',
    shortDescription: 'Space-saving adjustable dumbbells, 5–50 lbs per hand.',
    description:
      'A pair of adjustable dumbbells that replace 15 sets of weights. Each dumbbell adjusts from 5 to 50 lbs with a quick-twist dial. Includes a storage tray.',
    currentPrice: 249.0,
    previousPrice: 399.0,
    discountPercent: 38,
    retailer: 'FitGear',
    destinationUrl: 'https://example.com/redirect/adjustable-dumbbells',
    badge: 'PRICE DROP',
    image: 'https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-09',
    popularity: 82,
    priceHistory: [
      { date: '2026-08-01', price: 399.0 },
      { date: '2026-09-01', price: 329.0 },
      { date: '2026-09-09', price: 249.0 },
    ],
    retailers: [
      { name: 'FitGear', destinationUrl: 'https://example.com/redirect/p011-fitgear', price: 249.0, previousPrice: 399.0, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'MegaStore', destinationUrl: 'https://example.com/redirect/p011-megastore', price: 269.0, availability: 'Low Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p012',
    slug: 'smart-fitness-watch-gps',
    name: 'Smart Fitness Watch with GPS',
    category: 'health-fitness',
    shortDescription: 'GPS tracking, heart rate, and 7-day battery life.',
    description:
      'A smart fitness watch with built-in GPS, 24/7 heart rate monitoring, sleep tracking, and a 7-day battery life. Water-resistant up to 50 meters. Supports 100+ workout modes.',
    currentPrice: 119.99,
    previousPrice: 179.99,
    discountPercent: 33,
    retailer: 'FitGear',
    destinationUrl: 'https://example.com/redirect/fitness-watch',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 86,
    priceHistory: [
      { date: '2026-08-01', price: 179.99 },
      { date: '2026-09-01', price: 149.99 },
      { date: '2026-09-16', price: 119.99 },
    ],
    retailers: [
      { name: 'FitGear', destinationUrl: 'https://example.com/redirect/p012-fitgear', price: 119.99, previousPrice: 179.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'TechHub', destinationUrl: 'https://example.com/redirect/p012-techhub', price: 129.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p013',
    slug: 'mens-waterproof-leather-jacket',
    name: "Men's Waterproof Leather Jacket",
    category: 'fashion',
    shortDescription: 'Stylish full-grain leather jacket with waterproof lining.',
    description:
      "A men's full-grain leather jacket with a waterproof inner lining, YKK zipper, and quilted lining for warmth. Classic design that pairs with any outfit.",
    currentPrice: 89.99,
    previousPrice: 179.99,
    discountPercent: 50,
    retailer: 'StyleShop',
    destinationUrl: 'https://example.com/redirect/leather-jacket',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/10906770/pexels-photo-10906770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 68,
    priceHistory: [
      { date: '2026-08-01', price: 179.99 },
      { date: '2026-09-16', price: 89.99 },
    ],
    retailers: [
      { name: 'StyleShop', destinationUrl: 'https://example.com/redirect/p013-styleshop', price: 89.99, previousPrice: 179.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'MegaStore', destinationUrl: 'https://example.com/redirect/p013-megastore', price: 109.99, availability: 'Low Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p014',
    slug: 'womens-running-shoes-cushioned',
    name: "Women's Cushioned Running Shoes",
    category: 'fashion',
    shortDescription: 'Lightweight running shoes with responsive cushioning.',
    description:
      "Women's running shoes with a breathable knit upper, responsive foam cushioning, and a durable rubber outsole. Designed for road running and everyday training.",
    currentPrice: 54.99,
    previousPrice: 89.99,
    discountPercent: 39,
    retailer: 'StyleShop',
    destinationUrl: 'https://example.com/redirect/running-shoes',
    badge: 'PRICE DROP',
    image: 'https://images.pexels.com/photos/24702077/pexels-photo-24702077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-08',
    popularity: 74,
    priceHistory: [
      { date: '2026-08-01', price: 89.99 },
      { date: '2026-09-08', price: 54.99 },
    ],
    retailers: [
      { name: 'StyleShop', destinationUrl: 'https://example.com/redirect/p014-styleshop', price: 54.99, previousPrice: 89.99, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'FitGear', destinationUrl: 'https://example.com/redirect/p014-fitgear', price: 64.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p015',
    slug: 'gaming-console-bundle-extra-controller',
    name: 'Next-Gen Gaming Console Bundle + Extra Controller',
    category: 'gaming',
    shortDescription: 'Console, extra controller, and 3-month game subscription.',
    description:
      'A next-gen gaming console bundle including the console, one extra wireless controller, a 3-month game subscription, and an HDMI cable. Supports 4K gaming and fast load times.',
    currentPrice: 399.99,
    previousPrice: 499.99,
    discountPercent: 20,
    retailer: 'GameGear',
    destinationUrl: 'https://example.com/redirect/gaming-console-bundle',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/9704415/pexels-photo-9704415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 94,
    priceHistory: [
      { date: '2026-08-01', price: 499.99 },
      { date: '2026-09-16', price: 399.99 },
    ],
    retailers: [
      { name: 'GameGear', destinationUrl: 'https://example.com/redirect/p015-gamegear', price: 399.99, previousPrice: 499.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p015-shopmart', price: 429.99, availability: 'Low Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p016',
    slug: 'wireless-gaming-controller',
    name: 'Wireless Gaming Controller — Multi-Platform',
    category: 'gaming',
    shortDescription: 'Ergonomic controller with low-latency wireless.',
    description:
      'A multi-platform wireless gaming controller compatible with PC, consoles, and mobile. Features hall-effect joysticks, customizable back paddles, and a 30-hour battery.',
    currentPrice: 44.99,
    previousPrice: 69.99,
    discountPercent: 36,
    retailer: 'GameGear',
    destinationUrl: 'https://example.com/redirect/wireless-controller',
    badge: 'BEST PRICE',
    image: 'https://images.pexels.com/photos/16070479/pexels-photo-16070479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 77,
    priceHistory: [
      { date: '2026-08-01', price: 69.99 },
      { date: '2026-09-16', price: 44.99 },
    ],
    retailers: [
      { name: 'GameGear', destinationUrl: 'https://example.com/redirect/p016-gamegear', price: 44.99, previousPrice: 69.99, availability: 'In Stock', dealStatus: 'BEST PRICE' },
      { name: 'TechHub', destinationUrl: 'https://example.com/redirect/p016-techhub', price: 49.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p017',
    slug: 'ergonomic-office-chair-mesh',
    name: 'Ergonomic Mesh Office Chair',
    category: 'office',
    shortDescription: 'Breathable mesh chair with lumbar support and adjustable arms.',
    description:
      'An ergonomic office chair with a breathable mesh back, adjustable lumbar support, padded seat, and 4D armrests. Supports up to 300 lbs with a 360° swivel.',
    currentPrice: 129.99,
    previousPrice: 229.99,
    discountPercent: 43,
    retailer: 'OfficePro',
    destinationUrl: 'https://example.com/redirect/office-chair',
    badge: 'PRICE DROP',
    image: 'https://images.pexels.com/photos/12269763/pexels-photo-12269763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceDropDate: '2026-09-07',
    popularity: 81,
    priceHistory: [
      { date: '2026-08-01', price: 229.99 },
      { date: '2026-09-01', price: 179.99 },
      { date: '2026-09-07', price: 129.99 },
    ],
    retailers: [
      { name: 'OfficePro', destinationUrl: 'https://example.com/redirect/p017-officepro', price: 129.99, previousPrice: 229.99, availability: 'In Stock', dealStatus: 'PRICE DROP' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p017-shopmart', price: 149.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p018',
    slug: 'standing-desk-converter',
    name: 'Adjustable Standing Desk Converter',
    category: 'office',
    shortDescription: 'Convert any desk to a standing desk with one lever.',
    description:
      'A height-adjustable standing desk converter with a spacious work surface, keyboard tray, and gas-spring lift mechanism. Holds up to 35 lbs and adjusts from sitting to standing in seconds.',
    currentPrice: 99.99,
    previousPrice: 169.99,
    discountPercent: 41,
    retailer: 'OfficePro',
    destinationUrl: 'https://example.com/redirect/standing-desk-converter',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 69,
    priceHistory: [
      { date: '2026-08-01', price: 169.99 },
      { date: '2026-09-16', price: 99.99 },
    ],
    retailers: [
      { name: 'OfficePro', destinationUrl: 'https://example.com/redirect/p018-officepro', price: 99.99, previousPrice: 169.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'HomeGoods', destinationUrl: 'https://example.com/redirect/p018-homegoods', price: 119.99, availability: 'Low Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p019',
    slug: 'bluetooth-portable-speaker-ipx7',
    name: 'Waterproof Bluetooth Portable Speaker',
    category: 'electronics',
    shortDescription: 'IPX7 waterproof speaker with 360° sound and 24h battery.',
    description:
      'A rugged IPX7 waterproof Bluetooth speaker with 360° sound, deep bass, and up to 24 hours of playtime. Pair two speakers for stereo sound. Floats on water.',
    currentPrice: 39.99,
    previousPrice: 69.99,
    discountPercent: 43,
    retailer: 'AudioPlus',
    destinationUrl: 'https://example.com/redirect/bluetooth-speaker',
    badge: 'DEAL',
    image: 'https://images.pexels.com/photos/33298190/pexels-photo-33298190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 84,
    priceHistory: [
      { date: '2026-08-01', price: 69.99 },
      { date: '2026-09-01', price: 49.99 },
      { date: '2026-09-16', price: 39.99 },
    ],
    retailers: [
      { name: 'AudioPlus', destinationUrl: 'https://example.com/redirect/p019-audioplus', price: 39.99, previousPrice: 69.99, availability: 'In Stock', dealStatus: 'DEAL' },
      { name: 'ShopMart', destinationUrl: 'https://example.com/redirect/p019-shopmart', price: 44.99, availability: 'In Stock', dealStatus: 'None' },
    ],
  },
  {
    id: 'p020',
    slug: 'air-fryer-6qt-digital',
    name: '6-Qt Digital Air Fryer',
    category: 'appliances',
    shortDescription: 'Healthy frying with 8 presets and digital touch screen.',
    description:
      'A 6-quart digital air fryer with 8 cooking presets, a touch screen, and a non-stick dishwasher-safe basket. Cooks with little to no oil for healthier meals.',
    currentPrice: 59.99,
    previousPrice: 99.99,
    discountPercent: 40,
    retailer: 'HomeGoods',
    destinationUrl: 'https://example.com/redirect/air-fryer',
    badge: 'BEST PRICE',
    image: 'https://images.pexels.com/photos/5041473/pexels-photo-5041473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popularity: 89,
    priceHistory: [
      { date: '2026-08-01', price: 99.99 },
      { date: '2026-09-01', price: 79.99 },
      { date: '2026-09-16', price: 59.99 },
    ],
    retailers: [
      { name: 'HomeGoods', destinationUrl: 'https://example.com/redirect/p020-homegoods', price: 59.99, previousPrice: 99.99, availability: 'In Stock', dealStatus: 'BEST PRICE' },
      { name: 'MegaStore', destinationUrl: 'https://example.com/redirect/p020-megastore', price: 69.99, availability: 'In Stock', dealStatus: 'DEAL' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getPriceDrops(): Product[] {
  return products
    .filter((p) => p.badge === 'PRICE DROP' || (p.priceDropDate && p.previousPrice > p.currentPrice))
    .sort((a, b) => (b.previousPrice - b.currentPrice) - (a.previousPrice - a.currentPrice));
}

export function getTopDeals(limit = 8): Product[] {
  return [...products]
    .filter((p) => p.badge === 'DEAL' || p.badge === 'BEST PRICE')
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, limit);
}

export function getBiggestPriceDrops(limit = 6): Product[] {
  return getPriceDrops().slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.retailer.toLowerCase().includes(q)
  );
}
