/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    //  if(this.length==0) return -1
     return this.length==0 ? -1 : this[this.length-1]
};

