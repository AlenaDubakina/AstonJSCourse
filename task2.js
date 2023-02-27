const addElementsToArray = (arr, index = arr.length) => {
  if (!Number.isInteger(index) || index < 0) {
    throw new Error(
      'the index cannot be a negative number or a fractional number'
    );
  }

  return (...elems) => {
    const newArray = [...arr];
    newArray.splice(index, 0, ...elems);
    return newArray;
  };
};
