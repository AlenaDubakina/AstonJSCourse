function getInterval(arr, from, to) {
  if (!arr.every((el) => typeof el === 'number')) {
    throw new Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
    );
  } else if (typeof from !== 'number') {
    throw new Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.'
    );
  } else if (typeof to !== 'number') {
    throw new Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.'
    );
  } else {
    let array = [];
    const start = Math.min(from, to);
    const end = Math.max(from, to);
    for (let i = start; i <= end; i++) {
      arr.includes(i) ? array.push(i) : array;
    }

    return array;
  }
}

// проверка
console.log(getInterval([5, 6, 9, 45], 8, 25));
// console.log(getInterval([5, '6', 9, 45], 8, 25));
// console.log(getInterval([5, 6, 9, 45], '8', 25));
// console.log(getInterval([5, 6, 9, 45], 8, '25'));
