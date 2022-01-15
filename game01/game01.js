import { isArrayIntegers } from "./utils/checkArray.js";
const game01 = (arr, number) => {
  try {
    if (isArrayIntegers(arr) === 0) {
      if (arr.length < 2) {
        console.log({ error: "The Array is empty or has one element" });
        return;
      }
      if (!Number.isInteger(number)) {
        console.log({ error: "The number is not an integer" });
        return;
      }
    } else {
      console.log({ error: "Some Array elements are not integers" });
      return;
    }
    let flagStopWhile = true;
    arr.forEach((element) => {
      let j = 0;
      while (j < arr.length - 2 && flagStopWhile) {
        if (element + arr[j + 1] == number) {
          console.log(
            `The pair of elements in ${arr} who sums ${number} are `,
            [element, arr[j + 1]]
          );
          flagStopWhile = false;
          break;
        }
        ++j;
      }
    });
    if (flagStopWhile)
      console.log(`There is not pair of elements in ${arr} who sums ${number}`);
    return;
  } catch (error) {
    throw error;
  }
};
let arr = [1, 2, 3, 5, 3];
game01(arr, 4);
