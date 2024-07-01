/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  //  if(this.length==0) return -1
  const len = this.length;
  return len == 0 ? -1 : this[len - 1];
};
