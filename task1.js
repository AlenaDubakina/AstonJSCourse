function deepCopyObject(obj) {
  let clone = {};
  if (obj === null || typeof obj !== 'object' || typeof obj === 'function')
    return obj;
  if (Array.isArray(obj)) {
    const arr = [];
    obj.forEach((el, index) => {
      arr[index] = deepCopyObject(el);
    });
    return arr;
  }
  Object.entries(obj).forEach(([key, value]) => {
    clone[key] = deepCopyObject(value);
  });
  return clone;
}
