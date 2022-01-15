export const isArrayIntegers = (arr) => {
  let filterResult;
  const isArray = Array.isArray(arr);
  if (isArray) {
    filterResult = arr.filter((element) => {
      return !Number.isInteger(element);
    }).length;
  } else {
    console.log({ error: "Argument is not an Array" });
    return;
  }
  return filterResult;
};
