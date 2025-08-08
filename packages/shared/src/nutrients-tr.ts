export type NutrientKey =
  | "energy_kcal"
  | "protein_g"
  | "fat_g"
  | "sat_fat_g"
  | "carb_g"
  | "sugars_g"
  | "fiber_g"
  | "salt_g"
  | "sodium_mg"
  | "vit_a_rae_µg"
  | "vit_c_mg"
  | "vit_d_µg"
  | "calcium_mg"
  | "iron_mg"
  | "folate_µg_dfe";

export interface NutrientDef {
  key: NutrientKey;
  name_tr: string;
  unit: "kcal" | "g" | "mg" | "µg";
  fdcIds?: number[]; // eşleşen FDC nutrient id’leri
  compute?: (v: Record<string, number>) => number; // Na→Tuz vb.
}

export const NUTRIENTS_TR: NutrientDef[] = [
  { key: "energy_kcal", name_tr: "Enerji", unit: "kcal" },
  { key: "protein_g", name_tr: "Protein", unit: "g" },
  { key: "fat_g", name_tr: "Toplam Yağ", unit: "g" },
  { key: "sat_fat_g", name_tr: "Doymuş Yağ", unit: "g" },
  { key: "carb_g", name_tr: "Karbonhidrat", unit: "g" },
  { key: "sugars_g", name_tr: "Şeker", unit: "g" },
  { key: "fiber_g", name_tr: "Lif", unit: "g" },
  { key: "sodium_mg", name_tr: "Sodyum", unit: "mg" },
  {
    key: "salt_g",
    name_tr: "Tuz",
    unit: "g",
    compute: (v) => (v["sodium_mg"] || 0) * 2.5 / 1000, // mg Na → g Tuz
  },
  { key: "calcium_mg", name_tr: "Kalsiyum", unit: "mg" },
  { key: "iron_mg", name_tr: "Demir", unit: "mg" },
  { key: "vit_c_mg", name_tr: "C Vitamini", unit: "mg" },
  { key: "vit_d_µg", name_tr: "D Vitamini", unit: "µg" },
  { key: "vit_a_rae_µg", name_tr: "A Vitamini (RAE)", unit: "µg" },
  { key: "folate_µg_dfe", name_tr: "Folat (DFE)", unit: "µg" },
];
