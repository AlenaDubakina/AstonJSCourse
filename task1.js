const deleteElementFromArray = (arr, elem) => {
  const newArray = [...arr];
  const index = newArray.indexOf(elem);
  if (index !== -1) newArray.splice(index, 1);

  return newArray;
};
