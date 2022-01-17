import { isArrayMiddleware, isNumberInteger } from "./utils/checkArray.js";

const game01 = (arr, number) => {
  if (!isNumberInteger(number)) {
    console.log({ error: "The number is not an integer" });
    return;
  }
  if (isArrayMiddleware(arr)) {
    let resultSubSetArray = [];
    let s = new Set();
    for (let i = 0; i < arr.length; ++i) {
      let temp = number - arr[i];
      if (s.has(temp)) {
        resultSubSetArray.push(temp, arr[i]);
        console.log(resultSubSetArray);
        return;
      }
      s.add(arr[i]);
    }
    console.log({ message: `there is not a pair in array who sum ${number}` });
  }
};
let arr = [1, 4, 3, 5, 3];
game01(arr, 1);
