export function calculatePercentage(value: number, dailyValue: number): number {
  if (!dailyValue) return 0;
  return value / dailyValue * 100;
}
