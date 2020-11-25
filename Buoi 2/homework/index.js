class Student{
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
  
class MenuFunction{
    listStudent;
    constructor() {
      this.listStudent = [];
    }
  
    show() {
      this.listStudent.map((student) => student.displayInfo())
    }
  
    add(student) {
      this.listStudent.push(student)
    }
  
    findByAge(age) {
      this.listStudent
        .filter((student) => student.age === age)
        .map((student) => student.displayInfo());
    }
  
    findByPlace(place) {
        this.listStudent
          .filter((student) => student.birthplace === place)
          .map((student) => student.displayInfo());
      }

    findByAgeAndPlace(age,place) {
      this.listStudent
      .filter((student) => student.age === age && student.birthplace === place)
      .map((student) => student.displayInfo());
    }
  
    findByName(name) {
      this.listStudent
        .filter((student) => student.name.toLowerCase().includes(name.toLowerCase()))
        .map((student) => student.displayInfo());
    }
  }
  


  const menuFunction = new MenuFunction();
  const student1 = new Student('Nguyen Van A', 20, 'Namdinh');
  const student2 = new Student('Pham Thi B', 15, 'Hanoi');
  const student3 = new Student('Tran Van C', 18, 'Hanoi');
  const student4 = new Student('Mai Anh D',15,'Hochiminh');

  menuFunction.add(student1);
  menuFunction.add(student2);
  menuFunction.add(student3);
  menuFunction.add(student4);

  console.log("Class:");
  menuFunction.show();
  console.log("15 years old:");
  menuFunction.findByAge(15);
  console.log("Hochiminh:");
  menuFunction.findByPlace("Hochiminh");
  console.log("18 years old, Hanoi:");
  menuFunction.findByAgeAndPlace(18,"Hanoi");
  console.log("Name:");
  menuFunction.findByName("Nguyen")