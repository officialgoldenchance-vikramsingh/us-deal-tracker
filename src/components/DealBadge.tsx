import type { DealBadgeType } from '@/types';

const badgeStyles: Record<DealBadgeType, string> = {
  'DEAL': 'bg-emerald-600 text-white',
  'PRICE DROP': 'bg-orange-500 text-white',
  'BEST PRICE': 'bg-blue-600 text-white',
  'POPULAR': 'bg-slate-700 text-white',
};

interface DealBadgeProps {
  badge: DealBadgeType;
  size?: 'sm' | 'md';
}

export function DealBadge({ badge, size = 'sm' }: DealBadgeProps) {
  const sizeClass = size === 'md' ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]';
  return (
    <span
      className={`inline-flex items-center rounded font-bold uppercase tracking-wide ${badgeStyles[badge]} ${sizeClass}`}
    >
      {badge}
    </span>
  );
}
