import { Scale, ScaleType } from "tonal";

export const getAllScales = () => {
  return ScaleType.all();
};

export const getScaleInfo = (scale: string) => {
  return Scale.get(scale);
};

export const getScaleChords = (scale: string) => {
  return Scale.scaleChords(scale);
};
