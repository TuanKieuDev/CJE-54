
export class Student{
    img;
    name;
    age;
    birthplace;

    constructor(img,name, age, birthplace) {
      this.img = img;
      this.name = name;
      this.age = age;
      this.birthplace = birthplace;
    }
  
    displayInfo() {
      return `
        <card-container imgSrc = "${this.img}" name = "${this.name}" age = "${this.age}" birthplace = "${this.birthplace}"></card-container>
        `
    }
  }

