import { sodiumToSalt } from '@shared';
import { calculatePercentage } from '@server/services/dv';
import { describe, it, expect } from 'vitest';

describe('unit conversions', () => {
  it('converts sodium to salt', () => {
    expect(sodiumToSalt(400)).toBeCloseTo(1);
  });
});

describe('%DV calculations', () => {
  it('computes percentage', () => {
    expect(calculatePercentage(5, 10)).toBe(50);
  });
});
