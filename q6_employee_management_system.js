"use strict";

// Q6: Employee Management System (Classes + Object Methods)
// - Employee with id, name, department, salary
// - Methods: getAnnualSalary(), applyBonus(percent)
// - Create 5 employees, compute annual salary for each and total payout using reduce()

class Employee {
  constructor(id, name, department, salaryMonthly) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salaryMonthly = Number(salaryMonthly);
  }

  getAnnualSalary() {
    return Number((this.salaryMonthly * 12).toFixed(2));
  }

  applyBonus(percent) {
    if (typeof percent !== 'number' || percent < 0) throw new Error('Invalid bonus percent');
    const bonusAmount = (this.salaryMonthly * percent) / 100;
    this.salaryMonthly = Number((this.salaryMonthly + bonusAmount).toFixed(2));
    return this.salaryMonthly;
  }
}

const employees = [
  new Employee(101, 'Alice', 'Engineering', 8000),
  new Employee(102, 'Bob', 'Sales', 6000),
  new Employee(103, 'Clara', 'HR', 7000),
  new Employee(104, 'Dan', 'Marketing', 6500),
  new Employee(105, 'Eve', 'Support', 5000),
];

console.log('\n=== Employee Annual Salaries ===');
employees.forEach((emp) => {
  console.log(`${emp.name} (${emp.department}) — Monthly: ${emp.salaryMonthly} => Annual: ${emp.getAnnualSalary()}`);
});

// Apply a company-wide 5% bonus
console.log('\nApplying 5% bonus to all employees...');
employees.forEach((emp) => emp.applyBonus(5));

console.log('\n=== After Bonus: Annual Salaries ===');
employees.forEach((emp) => {
  console.log(`${emp.name} — Monthly: ${emp.salaryMonthly} => Annual: ${emp.getAnnualSalary()}`);
});

// Calculate total annual payout
const totalAnnualPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log('\nTotal Annual Payout: ', Number(totalAnnualPayout.toFixed(2)));

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Employee, employees };
}
