import { Item } from "./interfaces/item.interface";
import {
  updateQualityForAgedBrie,
  updateQualityForConcert,
  updateQualityForSulfuras,
  updateQualityForConjured,
  updateQualityForNormalItem,
} from "./updateQuality";
const objectNames = {
  nameAB: "Aged Brie",
  nameConcert: "Backstage passes to a TAFKAL80ETC concert",
  nameSulfuras: "Sulfuras, Hand of Ragnaros",
  nameConjured: "Conjured",
};
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    this.items.forEach((currentItem) => {
      if (currentItem.name === objectNames.nameAB) {
        currentItem = updateQualityForAgedBrie(currentItem);
      }
      if (currentItem.name === objectNames.nameConcert) {
        currentItem = updateQualityForConcert(currentItem);
      }
      if (currentItem.name === objectNames.nameSulfuras) {
        currentItem = updateQualityForSulfuras(currentItem);
      }
      if (currentItem.name === objectNames.nameConjured) {
        currentItem = updateQualityForConjured(currentItem);
      } else {
        currentItem = updateQualityForNormalItem(currentItem);
      }
    });
    return this.items;
  }
}
