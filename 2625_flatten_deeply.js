// Define a function called 'flat' that takes an array 'arr' and a depth 'n' as arguments.
var flat = function (arr, n) {
    // Create an empty array 'res' to store the flattened result.
    const res = [];

    // Define a helper function 'helper' that takes an array 'arr' and a 'depth' as arguments.
    function helper(arr, depth) {
        // Iterate through each value in the input array 'arr'.
        for (const val of arr) {
            // Check if the value is an object and the current depth is less than 'n'.
            if (typeof(val) === 'object' && depth < n) {
                // If the value is an object and depth is less than 'n', recursively call 'helper' on the value.
                helper(val, depth + 1);
            } else {
                // If the value is not an object or the depth is equal to 'n', add the value to the result array 'res'.
                res.push(val);
            }
        }
        // Return the result array after processing the input array.
        return res;
    }

    // Start the flattening process by calling the 'helper' function with initial depth 0.
    return helper(arr, 0);
};
