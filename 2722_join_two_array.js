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

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
      
   const combinedArray = arr1.concat(arr2); // first we will combine array1 and array2
   const merged = {}; // declare merged which is object
  
    combinedArray.forEach((obj) => {
      const id = obj.id;
      if (!merged[id]) {
        merged[id] = { ...obj };
      } else {
        merged[id] = { ...merged[id], ...obj };
      }
    });
  
    const joinedArray = Object.values(merged);
    joinedArray.sort((a, b) => a.id - b.id);
  
    return joinedArray;
  };