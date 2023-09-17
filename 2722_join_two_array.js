/**
 * given two arrays one is arr1 and second is ``arr2``  - done
 * return a new array which will we called ``joinedArray`` - done
 * all the objects in each of the two inputs arrays will contain id field that has
 * an integer value. - done 
 * ``joinedArray`` is an array formed by merging ``arr1`` and ``arr2`` based on their id key
      
* the length of ``joinedArray`` should be the length of unique values of ``id`` 
 * the returned array should be sorted in ascending order based on the ``id`` key.
 *  -- if given ``id`` exists in one array but not the other, 
 * the single object id should be included in the result array without modification
 * -- if two objects share an ``id``, their properties should be merged into a single object
 * -- if only key only exists in one object, that single key-value pair should be included in the object.
 * -- if a key is included in both objects, the value in the object from ``arr2`` should override the value from ``arr``.
 */
var join = function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2); // Combine arr1 and arr2 into a single array.
    const merged = {}; // Initialize an empty object for merging.
 
    combinedArray.forEach((obj) => { // Iterate through each object in the combined array.
       const id = obj.id; // Get the 'id' property of the current object.
       if (!merged[id]) { // If 'id' is not already in the merged object.
         merged[id] = { ...obj }; // Add the current object to merged using 'id' as the key.
       } else {  
         merged[id] = { ...merged[id], ...obj }; // Merge the current object with the existing one.
       }
     });
   
     const joinedArray = Object.values(merged); // Create an array from the values of the merged object.
 
     // Example:
     // If arr1 = [{ id: 1, name: 'Alice' }] and arr2 = [{ id: 2, name: 'Bob' }, { id: 1, age: 30 }],
     // combinedArray will be [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, age: 30 }].
     // After merging and removing duplicates, joinedArray will be:
     // [{ id: 1, name: 'Alice', age: 30 }, { id: 2, name: 'Bob' }] and returned as the result.
 
     joinedArray.sort((a, b) => a.id - b.id); // Sort the array based on the 'id' property.
 
     return joinedArray; // Return the final merged and sorted array.
 };
 