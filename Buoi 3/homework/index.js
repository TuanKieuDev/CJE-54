import {Student} from './student.js'
import {MenuFunction} from './MenuFunction.js'
  


  const menuFunction = new MenuFunction();
  const student1 = new Student('https://i.pinimg.com/564x/6f/3b/8f/6f3b8f2937e5c326da3f327112cf819f.jpg','Nguyen Van A', 20, 'Namdinh');
  const student2 = new Student('https://i.pinimg.com/564x/35/d5/39/35d539ab71b3dd05457e0d814dc977ae.jpg','Pham Thi B', 15, 'Hanoi');
  const student3 = new Student('https://i.pinimg.com/564x/3d/72/9d/3d729d49e433bfc79014e68c1c43eaac.jpg','Tran Van C', 18, 'Hanoi');
  const student4 = new Student('https://i.pinimg.com/564x/60/ae/41/60ae41481bb13170e574f6016c4980bd.jpg','Mai Anh D',15,'Hochiminh');

  menuFunction.add(student1);
  menuFunction.add(student2);
  menuFunction.add(student3);
  menuFunction.add(student4);

  console.log("Class:");
  menuFunction.show();
  console.log(MenuFunction);
  // console.log("15 years old:");
  // menuFunction.findByAge(15);
  // console.log("Hochiminh:");
  // menuFunction.findByPlace("Hochiminh");
  // console.log("18 years old, Hanoi:");
  // menuFunction.findByAgeAndPlace(18,"Hanoi");
  // console.log("Name:");
  // menuFunction.findByName("Nguyen")