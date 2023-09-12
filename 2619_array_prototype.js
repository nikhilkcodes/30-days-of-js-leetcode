Array.prototype.last = function() {
    const arr = [];
    return this.length ? this[this.length-1] : -1;
};