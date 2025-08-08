// Simple in-memory cache placeholder
const cache = new Map<string, any>();

export function getCache<T>(key: string): T | undefined {
  return cache.get(key);
}

export function setCache(key: string, value: any) {
  cache.set(key, value);
}
