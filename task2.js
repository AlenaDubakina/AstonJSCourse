function Company(name, salary) {
  const staff = {
    name,
    income: 0,
  };
  this.income = function (value) {
    staff.income += value - salary;
    Company.store.money += value - salary;
  };
  this.spend = function (value) {
    staff.income -= value;
    Company.store.money -= value;
  };
  Company.addStaff(staff);

  Object.defineProperty(this, 'name', {
    value: name,
    writable: false,
  });
  Object.defineProperty(this, 'salary', {
    value: salary,
    writable: false,
  });
}
Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};
Company.addStaff = function (staff) {
  Company.store.staffList.push(staff);
  Company.store.countStaff++;
};
Company.getLeaders = function () {
  const maxIncome = Company.store.staffList.reduce((x, y) =>
    x.income > y.income ? x : y
  );
  const maxIncomeArr = Company.store.staffList.filter(
    (staff) => staff.income >= maxIncome.income
  );
  return maxIncomeArr;
};
