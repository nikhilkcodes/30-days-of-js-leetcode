var sortBy = function(arr, fn) {
    const sortedArr = arr.sort((a, b) => fn(a) - fn(b));
    return sortedArr;
};