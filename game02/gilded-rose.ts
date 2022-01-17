import { Item } from "./interfaces/item.interface";
import {
  updateQualityForAgedBrie,
  updateQualityForConcert,
  updateQualityForSulfuras,
  updateQualityForConjured,
  updateQualityForNormalItem,
} from "./services/updateQuality";
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
      switch (currentItem.name) {
        case objectNames.nameAB:
          currentItem = updateQualityForAgedBrie(currentItem);
          break;
        case objectNames.nameConcert:
          currentItem = updateQualityForConcert(currentItem);
          break;
        case objectNames.nameSulfuras:
          currentItem = updateQualityForSulfuras(currentItem);
          break;
        case objectNames.nameConjured:
          currentItem = updateQualityForConjured(currentItem);
          break;
        default:
          currentItem = updateQualityForNormalItem(currentItem);
          break;
      }
    });
    return this.items;
  }
}
