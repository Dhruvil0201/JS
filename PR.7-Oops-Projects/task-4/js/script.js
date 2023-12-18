class Shape {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`This is a ${this.name}.`);
  }

  calculateArea() {
    throw new Error("This method must be implemented by the subclass.");
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);

    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);

    this.radius = radius;
  }

  calculateArea() {
    return 3.14 * this.radius * this.radius;
  }
}

let rect = new Rectangle("Rectangle", 10, 20);
let circ = new Circle("Circle", 5);

rect.printName();
console.log(`The area is ${rect.calculateArea()}.`);
circ.printName();
console.log(`The area is ${circ.calculateArea()}.`);
