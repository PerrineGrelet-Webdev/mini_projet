export type ObjectiveKey =
  | "sedentary"
  | "endurance"
  | "maintenance"
  | "muscleGain";

export const OBJECTIVES = {
  sedentary: { label: "Sédentaire", min: 0.8, max: 1.0 },
  endurance: { label: "Endurance", min: 1.2, max: 1.6 },
  maintenance: { label: "Conservation masse musculaire", min: 1.6, max: 1.8 },
  muscleGain: { label: "Prise de masse musculaire", min: 1.8, max: 2.2 },
};
