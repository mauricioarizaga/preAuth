export const isArrayIntegers = (arr: number[]): number => {
  return arr.filter((element) => {
    return Number.isInteger(element);
  }).length;
};
export const isArrayMiddleware = (arr: number[]) => {
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
