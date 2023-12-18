function Emp(name, email, salary) {
    this.name = name;
    this.email = email;
    this.salary = salary;
}

Emp.prototype.addDesignation = function(designation) {
    this.designation = designation;
}

const employee1 = new Emp("Raj", "raj@example.com", 50000);
employee1.addDesignation("Software Engineer");

const employee2 = new Emp("Dhruvil", "dhruvil@example.com", 60000);
employee2.addDesignation("Data Analyst");

console.log("Employee 1:");
console.log("Name:", employee1.name);
console.log("Email:", employee1.email);
console.log("Salary:", employee1.salary);
console.log("Designation:", employee1.designation || "No designation set");

console.log("\nEmployee 2:");
console.log("Name:", employee2.name);
console.log("Email:", employee2.email);
console.log("Salary:", employee2.salary);
console.log("Designation:", employee2.designation || "No designation set");