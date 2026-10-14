/**
 * Datos demo Brasa Fina — dashboard de restaurante.
 * 100% local. Editar para cambiar KPIs y series sin tocar la UI.
 */

export const restaurantMeta = {
  name: 'Brasa Fina',
  tagline: 'Restaurante elegante · dashboard demo',
  disclaimer: 'Datos de ejemplo generados para la demo de Humo. No es un restaurante real.',
};

export type DayPoint = {
  label: string;
  sales: number;
  tickets: number;
};

export type DishRank = {
  name: string;
  qty: number;
  revenue: number;
};

export const weekSeries: DayPoint[] = [
  { label: 'Lun', sales: 12400, tickets: 42 },
  { label: 'Mar', sales: 11850, tickets: 39 },
  { label: 'Mié', sales: 15200, tickets: 51 },
  { label: 'Jue', sales: 14100, tickets: 48 },
  { label: 'Vie', sales: 19800, tickets: 67 },
  { label: 'Sáb', sales: 22450, tickets: 74 },
  { label: 'Dom', sales: 18620, tickets: 61 },
];

export const monthSeries: DayPoint[] = [
  { label: 'Sem 1', sales: 82000, tickets: 280 },
  { label: 'Sem 2', sales: 91000, tickets: 305 },
  { label: 'Sem 3', sales: 87500, tickets: 298 },
  { label: 'Sem 4', sales: 96800, tickets: 322 },
];

export const todayKpis = {
  sales: 18420,
  tickets: 58,
  avgTicket: 318,
  tablesOpen: 28,
  vsYesterdayPct: 12,
};

export const topDishes: DishRank[] = [
  { name: 'Rib eye a la brasa', qty: 42, revenue: 18900 },
  { name: 'Pasta trufa', qty: 31, revenue: 10850 },
  { name: 'Tiramisú casa', qty: 27, revenue: 4050 },
  { name: 'Vino reserva', qty: 19, revenue: 7600 },
  { name: 'Ensalada burrata', qty: 16, revenue: 3840 },
];

export function toCsv(range: 'week' | 'month'): string {
  const series = range === 'week' ? weekSeries : monthSeries;
  const lines = ['periodo,ventas,tickets'];
  for (const p of series) {
    lines.push(`${p.label},${p.sales},${p.tickets}`);
  }
  lines.push('');
  lines.push('plato,cantidad,ingresos');
  for (const d of topDishes) {
    lines.push(`"${d.name}",${d.qty},${d.revenue}`);
  }
  return lines.join('\n');
}
