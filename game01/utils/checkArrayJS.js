export const isArrayIntegers = (arr) => {
  return arr.filter((element) => {
    return Number.isInteger(element);
  }).length;
};
export const isArrayMiddleware = (arr) => {
  if (isArrayIntegers(arr) === 0) {
    if (arr.length < 2) {
      return { error: "The Array is empty or has one element" };
    } else {
      return true;
    }
  } else {
    return { error: "Some Array elements are not integers" };
  }
};
export const isNumberInteger = (number) => {
  return Number.isInteger(number);
};
