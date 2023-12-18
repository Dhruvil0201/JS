class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  printMessage() {
    console.log(
      `Hello, I am ${this.name} and I earn ${this.salary} per month.`
    );
  }
}

let emp1 = new Employee("Dhruvil", 50000);

emp1.printMessage();
