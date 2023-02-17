function getNumberRadix(number, radix) {
  try {
    if (+number < 0 || radix < 2 || radix > 16) {
      throw new Error(
        'Функция getNumberRadix была вызвана с некорректными параметрами'
      );
    }
    return (+number).toString(radix);
  } catch (error) {
    console.log(error);
  }
}
