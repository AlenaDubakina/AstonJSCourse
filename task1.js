Array.prototype.filterArray = function (cb, thisArg) {
  let filterArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) filterArr.push(this[i]);
  }
  return filterArr;
};
