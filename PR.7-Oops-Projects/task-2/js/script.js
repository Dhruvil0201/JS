class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Father extends Person {
  constructor(name, age) {
    super(name, age);
  }

  printInfo() {
    super.printInfo();

    console.log(`Role: Father`);
  }
}

class Child extends Person {
  constructor(name, age) {
    super(name, age);
  }

  printInfo() {
    super.printInfo();

    console.log(`Role: Child`);
  }
}

let father = new Father("Dhruvil", 60);
let child = new Child("Radhe", 20);

father.printInfo();
child.printInfo();
