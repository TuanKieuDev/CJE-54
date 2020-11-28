import {Student} from './student.js'
import {MenuFunction} from './MenuFunction.js'
  


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