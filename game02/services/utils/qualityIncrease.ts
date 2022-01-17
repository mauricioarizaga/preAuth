import { Item } from "../../interfaces/item.interface";
import { qualityValuesMinMaxLengendary } from "./qualityValues";

const qualityValues = qualityValuesMinMaxLengendary();
const isLessThanMax = (quality: number): Boolean => quality < qualityValues.max;

export const increaseQuality = (quality: number) =>
  isLessThanMax(quality) ? quality + 1 : quality;

export const increaseQualityForConcert = (item: Item): number => {
  let quality = increaseQuality(item.quality);
  quality = item.sellIn < 11 ? increaseQuality(quality) : quality;
  quality = item.sellIn < 6 ? increaseQuality(quality) : quality;
  return quality;
};
