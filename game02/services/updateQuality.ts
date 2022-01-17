import { Item } from "../interfaces/item.interface";
import { updateQualityItemNormalConjured } from "./utils/qualityDecrease";
import {
  increaseQuality,
  increaseQualityForConcert,
} from "./utils/qualityIncrease";
import { qualityValuesMinMaxLengendary } from "./utils/qualityValues";
const qualityValues = qualityValuesMinMaxLengendary();

export const updateQualityForAgedBrie = (item: Item): Item => {
  item.quality = increaseQuality(item.quality);
  item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
  item.sellIn -= 1;
  return item;
};
export const updateQualityForSulfuras = (item: Item) => {
  item.quality = qualityValues.legendary;
  return item;
};

export const updateQualityForConcert = (item: Item): Item => {
  item.quality = item.sellIn === 0 ? 0 : increaseQualityForConcert(item);
  item.sellIn -= 1;
  return item;
};

export const updateQualityConjured = (item: Item): Item => {
  item = updateQualityItemNormalConjured(item);
  item = updateQualityItemNormalConjured(item);
  return item;
};

export const updateQualityForConjured = (item: Item): Item => {
  if (item.sellIn === 5) {
    item.quality -= 3;
  } else {
    item = updateQualityItemNormalConjured(item);
    item = updateQualityItemNormalConjured(item);
  }
  item.sellIn -= 1;

  return item;
};

export const updateQualityForNormalItem = (item): Item => {
  item = updateQualityItemNormalConjured(item);
  item.sellIn -= 1;

  return item;
};
