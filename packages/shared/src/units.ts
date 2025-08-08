// Birim dönüşümleri ve hesaplamalar için placeholder
export function sodiumToSalt(sodiumMg: number): number {
  return (sodiumMg || 0) * 2.5 / 1000;
}
