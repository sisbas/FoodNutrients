export interface Profile {
  id: string;
  label_tr: string;
  age_range: string;
  sex?: "female" | "male" | "unisex";
  energy_kcal?: number; // TBC
  dv: Partial<Record<string, number>>; // anahtarlar NutrientKey ile uyumlu
}

export const PROFILES: Profile[] = [
  { id: "general_ri", label_tr: "Genel RI (Etiket)", age_range: "—", sex: "unisex", dv: {
    fat_g: 70, sat_fat_g: 20, carb_g: 260, sugars_g: 90, protein_g: 50, salt_g: 6, fiber_g: 25,
    // Diğerleri TBC: vit_a_rae_µg, vit_c_mg, vit_d_µg, calcium_mg, iron_mg, folate_µg_dfe, ...
  } },
  { id: "adult_female_19_50", label_tr: "Yetişkin Kadın (19–50)", age_range: "19–50", sex: "female", dv: { /* TBC */ } },
  { id: "adult_male_19_50",   label_tr: "Yetişkin Erkek (19–50)",  age_range: "19–50", sex: "male",   dv: { /* TBC */ } },
  { id: "adult_female_51_plus", label_tr: "Yetişkin Kadın (51+)", age_range: "51+", sex: "female", dv: { /* TBC */ } },
  { id: "adult_male_51_plus",   label_tr: "Yetişkin Erkek (51+)",  age_range: "51+", sex: "male",   dv: { /* TBC */ } },
  { id: "adolescent_14_18", label_tr: "Adölesan (14–18)", age_range: "14–18", sex: "unisex", dv: { /* TBC */ } },
  { id: "child_9_13", label_tr: "Çocuk (9–13)", age_range: "9–13", sex: "unisex", dv: { /* TBC */ } },
  { id: "child_4_8",  label_tr: "Çocuk (4–8)",  age_range: "4–8",  sex: "unisex", dv: { /* TBC */ } },
];
