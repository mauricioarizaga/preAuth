import { Item } from "../../interfaces/item.interface";
import { qualityValuesMinMaxLengendary } from "./qualityValues";

const qualityValues = qualityValuesMinMaxLengendary();
const isOverMin = (quality: number): Boolean => quality > qualityValues.min;

export const decreaseQuality = (quality: number) =>
  isOverMin(quality) ? quality - 1 : quality;

export const updateQualityItemNormalConjured = (item: Item): Item => {
  item.quality = decreaseQuality(item.quality);
  item.quality =
    item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;
  return item;
};
