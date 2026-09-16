export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function formatDiscount(percent: number): string {
  return `-${percent}%`;
}
