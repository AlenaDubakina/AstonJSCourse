function deepCopyObject(obj) {
  let clone = {};
  for (let prop in obj) {
    typeof obj[prop] === 'object' && obj[prop] !== null
      ? (clone[prop] = deepCopyObject(obj[prop]))
      : (clone[prop] = obj[prop]);
  }
  return clone;
}

// проверка пример объекта
const staff = {
  name: 'Alex',
  age: 20,
  skills: [
    {
      id: 1,
      value: 'html',
    },
    {
      id: 2,
      value: 'js',
    },
    {
      id: 3,
      value: 'css',
    },
  ],
  cost: undefined,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
  knowledge: [
    {
      label: 'React JS',
      score: 7,
    },
    {
      label: 'JS',
      score: 7,
    },
    {
      label: 'CSS',
      score: 9,
    },
    {
      label: 'HTML',
      score: 10,
    },
  ],
  avatar: null,
};

const newStaff = deepCopyObject(staff);
console.log(newStaff);
newStaff.avatar = '1'; // изменение свойства в клонируемом объекте
console.log(newStaff.avatar, staff.avatar); // проверка поменялось ли это свойство в первоначальном объекте
