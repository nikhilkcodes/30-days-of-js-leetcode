/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
    const transformedValue = fn(arr[i], i); // Apply the provided function to each element
    returnedArray.push(transformedValue);    // Add the result to the new array
  }
  return returnedArray;
};