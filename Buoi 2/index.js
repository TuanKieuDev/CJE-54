class Person{
    name;
    age;
    address;
    gender;
    constructor(name,age,address,gender){
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
    speak(){
        console.log(`Hello World, I'm + ${this.name}, ${this.age}
    I'm come from ${this.address}
        `);
    }
}

// const tuan = new Person('Tuan', 19, 'Hanoi', 'Male');

// const ab = new Person('sf',23,'NY','Female');
// console.log(tuan);
//  console.log(ab);
// tuan.speak();


//Class: Animal
//Species, color, numberOfLeg, Gender
//eat => con + name + dang an
//speak => con + name + dang keu
//isDangerous => so chan > 4 or = 0, in ra co nguy hiem hay khong

class Animal{
    species;
    color;
    numberOfLeg;
    gender;
    constructor(species,color,numberOfLeg,gender){
        this.species = species;
        this.color = color;
        this.numberOfLeg = numberOfLeg;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.species} are eating`);
    }
    speak(){
        console.log(`${this.species} are speaking`);
    }
    isDangerous(){
        if(this.numberOfLeg>4||this.numberOfLeg==0) console.log(`${this.species} are dangerous`);
        else console.log(`${this.species} are not dangerous`);
    }
}

const cat = new Animal('cat', 'black', 4, 'Female');
console.log(cat);
cat.isDangerous();

const snake = new Animal('snake','green',0,'Male');
console.log(snake);
snake.isDangerous();


class MyMath{
    static sum(a,b){
        return a+b;
    }
}

console.log(MyMath.sum(2,5));

//ke thua

class Employee extends Person{
    salary;
    constructor(name,age,address,gender,salary){
        super(name,age,address,gender);
        this.salary = salary;
    }
    meme(){
        console.log("J4F");
    }
}

const myEmployee = new Employee('Nam', 24, 'Hanoi','Male',10e6);
//myEmployee.meme();
 
//tao class dog ke thua animal, speak gâu gâu

class Dog extends Animal{
    constructor(species,color,numberOfLeg,gender){
        super(species,color,numberOfLeg,gender);
    }
    speak(){
        console.log("Gâu gâu");
    }
}
const myPet = new Dog('dog','black',4,'male');
myPet.speak();