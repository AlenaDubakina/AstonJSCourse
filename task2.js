const isNumber = (num) => !Number.isNaN(num) && typeof num === 'number';
const isNumberArr = (arr) =>
  Array.isArray(arr) && !arr.some((el) => !isNumber(el));
const messageErrorNumberArr = (param) =>
  `В функцию getInterval были переданы невалидные параметры. Параметр ${param} должен содержать только числовые значения`;
const messageErrorNumber = (param) =>
  `В функцию getInterval были переданы невалидные параметры. Параметр ${param} должен быть числом`;
const error = ({ arr, from, to }) => {
  if (!isNumberArr(arr)) throw new Error(messageErrorNumberArr('arr'));
  if (!isNumber(from)) throw new Error(messageErrorNumber('from'));
  if (!isNumber(to)) throw new Error(messageErrorNumber('to'));
};
function getInterval(arr, from, to) {
  let paramObj = { arr, from, to };
  error(paramObj);

  const start = Math.min(from, to);
  const end = Math.max(from, to);
  const newArr = arr.filter((el) => el >= start && el <= end);
  return newArr;
}
