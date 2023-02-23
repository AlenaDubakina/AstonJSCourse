function getUniqArray(arr) {
  try {
    if (!arr.every((el) => typeof el === 'number')) {
      throw new Error(
        'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел.'
      );
    }
    return Array.from(new Set(arr));
  } catch (error) {
    console.log(error);
  }
}

// проверка
console.log(getUniqArray([1, 2, 3, 8, 3, 2, 8]));
