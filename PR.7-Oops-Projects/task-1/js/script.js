class School {
  constructor(name, email, contact) {
    this.name = name;
    this.email = email;
    this.contact = contact;
  }

  printInfo() {
    console.log(
      `Name: ${this.name}, Email: ${this.email}, Contact: ${this.contact}`
    );
  }
}

class Student extends School {
  constructor(name, email, contact) {
    super(name, email, contact);
  }

  printInfo() {
    super.printInfo();

  }
}

class Faculty extends School {
  constructor(name, email, contact, department) {
    super(name, email, contact);
    this.department = department;
  }

  printInfo() {
    super.printInfo();
    console.log(`Department: ${this.department}`);
  }
}

class Peon extends School {
  constructor(name, email, contact, duty) {
    super(name, email, contact);

    this.duty = duty;
  }

  printInfo() {
    super.printInfo();

    console.log(`Duty: ${this.duty}`);
  }
}

let stu1 = new Student("Dhruvil", "dhruvil@gmail.com", "1234567890");
let stu2 = new Student("Hardik", "hardil@yahoo.com", "0987654321");
let fac1 = new Faculty("Keyur", "Keyur@edu.com", "1111111111", "Full Stack Developer ");
let fac2 = new Faculty("Reena", "reena@edu.com", "2222222222", "Science");
let peo1 = new Peon("Amit", "amit@school.com", "3333333333", "Cleaning");
let peo2 = new Peon("Raj", "raj@school.com", "4444444444", "Security");

stu1.printInfo();
stu2.printInfo();
fac1.printInfo();
fac2.printInfo();
peo1.printInfo();
peo2.printInfo();
