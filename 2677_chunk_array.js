/**first situation is if input is 1 the chunks will be like this array [1,2,3,4]
 *  [1] [2] [3] [4] 
 * second situation is if size is 3 and array of length is less greater then size, but last subarray is lesser then size then it will
 * print like this 
 * [1,2,3,4,5] [[1,2,3] [4,5]] chuncked array is less then size
 * this situation is if size === arr.length then chuncked array will be === arr */
var chunk = function(arr, size) {
    const chunks = []
    for(let i=0; i<arr.length; i+=size){
        chunks.push(arr.slice(i, i+size))
    }
    return chuncks
};
