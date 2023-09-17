Array.prototype.groupBy = function(fn) {
    let result = {};
    this.forEach(element => {
      let key = fn(element);
      if (result.hasOwnProperty(key)) {
        result[key].push(element);
      } else {
        result[key] = [element];
      }
    });
    return result;
  };
  
 