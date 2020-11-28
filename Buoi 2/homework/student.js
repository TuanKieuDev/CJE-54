export class Student{
    name;
    age;
    birthplace;

    constructor(name, age, birthplace) {
      this.name = name;
      this.age = age;
      this.birthplace = birthplace;
    }
  
    displayInfo() {
      console.log(`        Name: ${this.name}
        Age: ${this.age}
        Birthplace: ${this.birthplace}\n`)
    }
  }

