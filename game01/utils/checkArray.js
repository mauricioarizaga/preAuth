export const isArray = (arr) => {
  const isArray = Array.isArray(arr);
  if (!isArray) {
    console.log({ error: "Argument is not an Array" });
    return;
  }
  return true;
};

export const isArrayIntegers = (arr) => {
  return arr.filter((element) => {
    return !Number.isInteger(element);
  }).length;
};
export const isArrayMiddleware = (arr) => {
  isArray(arr);
  if (isArrayIntegers(arr) === 0) {
    if (arr.length < 2) {
      console.log({ error: "The Array is empty or has one element" });
      return;
    } else {
      return true;
    }
  } else {
    console.log({ error: "Some Array elements are not integers" });
    return;
  }
};
export const isNumberInteger = (number) => {
  return Number.isInteger(number);
};
