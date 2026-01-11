import { ARCH_DATA } from './benchmarks';

export function refereeVerdict(weights: { scale: number, budget: number }) {
  return Object.entries(ARCH_DATA).map(([name, stats]) => {
    const score = (stats.scalability * weights.scale) + (stats.cost_efficiency * weights.budget) - stats.complexity_penalty;
    return { name, score: score.toFixed(2) };
  }).sort((a, b) => Number(b.score) - Number(a.score));
}
