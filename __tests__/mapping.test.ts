import { mapFdcNutrients } from '@server/services/mapping';
import { describe, it, expect } from 'vitest';

describe('mapping', () => {
  it('maps known nutrients', () => {
    const list = [
      { nutrient: { name: 'Energy', unitName: 'kcal' }, amount: 100 },
      { nutrient: { name: 'Protein', unitName: 'g' }, amount: 10 },
      { nutrient: { name: 'Sodium, Na', unitName: 'mg' }, amount: 200 },
    ];
    const result = mapFdcNutrients(list);
    expect(result.energy_kcal).toBe(100);
    expect(result.protein_g).toBe(10);
    expect(result.sodium_mg).toBe(200);
    expect(result.salt_g).toBeCloseTo(0.5);
  });
});
