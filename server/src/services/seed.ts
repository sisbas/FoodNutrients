import fetch from "node-fetch";

// Placeholder for seed JSON loader
export async function loadSeedFromUrl(url: string): Promise<any[]> {
  const res = await fetch(url);
  return res.json();
}
