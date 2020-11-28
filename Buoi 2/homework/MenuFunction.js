export class MenuFunction{
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