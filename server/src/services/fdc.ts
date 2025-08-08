import fetch from "node-fetch";
import { NUTRIENTS_TR, PROFILES } from "@shared";

const SEED_URL = process.env.SEED_JSON_URL!;
const FDC_API_KEY = process.env.FDC_API_KEY;

// Basit in-memory cache (PoC); prod’da Redis/Edge KV kullanın
const memory = new Map<string, any>();

export async function searchFoods(q: string, category: string, lang: string, limit: number) {
  // 1) Seed’ten basit arama
  const seed = await loadSeed();
  const items = seed.filter((x: any) => String(x.description || "").toLowerCase().includes(q.toLowerCase())).slice(0, limit);
  // 2) (Opsiyon) FDC API çağrısı ile zenginleştirme…
  return items.map((x: any) => ({ fdcId: x.fdcId, name_en: x.description }));
}

export async function getFoodDetail(fdcId: string, measure: string, grams: number | undefined, profileId: string) {
  const seed = await loadSeed();
  const item = seed.find((x: any) => String(x.fdcId) === String(fdcId));
  if (!item) throw new Error("Food not found");

  // çok basit normalizasyon (PoC): 100 g değerlerini çıkar
  const per100: Record<string, number> = {};
  for (const n of item.foodNutrients || []) {
    // burada FDC nutrient id → internal key eşleme yapılmalı (NUTRIENTS_TR ile)
    // PoC’ta enerji/protein/yağ/kh gibi alanları tahmini anahtarlarla doldurun.
  }

  const gramsFinal = measure === "custom" && grams ? grams : (measure === "serving" ? 100 : 100); // PoC olarak 100g kabul
  const scaled: Record<string, number> = {};
  Object.entries(per100).forEach(([k, v]) => { scaled[k] = v * gramsFinal / 100; });

  const profile = PROFILES.find(p => p.id === profileId) || PROFILES[0];
  const percentages: Record<string, number> = {};
  Object.entries(scaled).forEach(([k, v]) => {
    const dv = (profile as any).dv[k];
    if (typeof dv === "number" && dv > 0) percentages[k] = v / dv * 100;
  });

  return { fdcId, measure, grams: gramsFinal, per100, values: scaled, percentages, profile: profile.id };
}

async function loadSeed(): Promise<any[]> {
  if (memory.has("seed")) return memory.get("seed");
  const res = await fetch(SEED_URL);
  const json = await res.json();
  memory.set("seed", json);
  return json;
}
