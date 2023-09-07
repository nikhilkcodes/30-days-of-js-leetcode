var filter = function(arr, fn){
    var filterArr = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

