export function generateWeights(min: number, max: number, rows: number): number[] {
  if (rows <= 1 || max <= min) return [min];

  const step = (max - min) / (rows - 1);
  const weights: number[] = [];

  for (let i = 0; i < rows; i++) {
    weights.push(Math.round(min + step * i));
  }

  return weights;
}

export function formatProteinRange(weight: number, min: number, max: number): string {
  const minG = Math.round(weight * min);
  const maxG = Math.round(weight * max);
  return `${minG} – ${maxG} g/jour`;
}
