function getNumberRadix(number, radix) {
  if (
    Number.isNaN(+number) ||
    !Number.isInteger(+number) ||
    typeof radix !== 'number' ||
    +number < 0 ||
    radix < 2 ||
    radix > 16
  )
    throw new Error(
      'Функция getNumberRadix была вызвана с некорректными параметрами'
    );

  return (+number).toString(radix);
}
