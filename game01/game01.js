import { isArrayMiddleware, isNumberInteger } from "./utils/checkArrayJS";

const game01 = (arr, number) => {
  if (!isNumberInteger(number)) {
    return { error: "The number is not an integer" };
  }
  if (isArrayMiddleware(arr)) {
    let s = new Set();
    for (let i = 0; i < arr.length; ++i) {
      let temp = number - arr[i];
      if (s.has(temp)) {
        let resultSubSetArray = [];
        resultSubSetArray.push(temp, arr[i]);
        return { result: resultSubSetArray };
      }
      s.add(arr[i]);
    }
    return { result: `there is not a pair in array who sum ${number}` };
  }
};
let arr = "[1, 4, 3, 5, 3]";
console.log(game01(arr, 5));
