import { NUTRIENTS_TR } from "@shared";

const NAME_UNIT_MAP: Record<string, string> = {
  "Energy|kcal": "energy_kcal",
  "Protein|g": "protein_g",
  "Total lipid (fat)|g": "fat_g",
  "Carbohydrate, by difference|g": "carb_g",
  "Fiber, total dietary|g": "fiber_g",
  "Sodium, Na|mg": "sodium_mg",
};

export interface FdcNutrient {
  nutrient: { name: string; unitName: string };
  amount: number;
}

export function mapFdcNutrients(list: FdcNutrient[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of list) {
    const key = NAME_UNIT_MAP[`${item.nutrient.name}|${item.nutrient.unitName}`];
    if (key) out[key] = item.amount;
  }
  const saltDef = NUTRIENTS_TR.find(n => n.key === "salt_g");
  if (saltDef?.compute) out["salt_g"] = saltDef.compute(out);
  return out;
}
