function getUniqArray(arr) {
  if (
    !Array.isArray(arr) ||
    arr.some((el) => Number.isNaN(el) || typeof el !== 'number')
  )
    throw new Error(
      'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел.'
    );

  return Array.from(new Set(arr));
}
