import { Item } from "../interfaces/item.interface";
import { qualityValuesMinMaxLengendary } from "./qualityValues";

const qualityValues = qualityValuesMinMaxLengendary();
const isLessThanMax = (quality: number): Boolean => quality < qualityValues.max;
const isOverMin = (quality: number): Boolean => quality > qualityValues.min;

export const increaseQuality = (quality: number) =>
  isLessThanMax(quality) ? quality + 1 : quality;

export const decreaseQuality = (quality: number) =>
  isOverMin(quality) ? quality - 1 : quality;

export const increaseQualityForConcert = (item: Item): number => {
  let quality = increaseQuality(item.quality);
  quality = item.sellIn < 11 ? increaseQuality(quality) : quality;
  quality = item.sellIn < 6 ? increaseQuality(quality) : quality;
  return quality;
};

export const updateQualityItemNormalConjured = (item: Item): number => {
  item.quality = decreaseQuality(item.quality);
  item.quality =
    item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;
  return item.quality;
};

export const updateConjuredQuality = (item: Item): Item => {
  item.quality = updateQualityItemNormalConjured(item);
  item.quality = updateQualityItemNormalConjured(item);
  return item;
};
