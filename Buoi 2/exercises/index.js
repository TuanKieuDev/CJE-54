class User{
    name;
    age;
    gender;
    description;
    image;
    constructor(name,age,gender,description,image){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }
    like(){

    }
    unlike(){

    }
    update(name,age,gender,description,image){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }
    toHTML(){
        return`
        <div class = "user-container">
            <div class="previous"> < </div>

            <img src="${this.image}"/>
            <div class = "info">
                ${this.name}<br>
                ${this.age}<br>
                ${this.description}
            </div>
            <div class="next"> > </div>
        </div>
        `
    }
}

class UserCollection{
    listUser;
    current;
    constructor(){
        this.listUser = [];
        this.current = 0;
    }
    addUser(user){
        this.listUser.push(user)
    }
    removeUser(index){
        this.listUser.splice(index,1)
    }
    show(){
        document.querySelector('#app').innerHTML = this.listUser[0].toHTML();
        this.listenUserClick();
    }
    previous(){
        if(this.current>0){
            this.current--;
            document.querySelector('#app').innerHTML = this.listUser[this.current].toHTML();
            this.listenUserClick();
        }
    }
    next(){
        if(this.current<this.listUser.length-1){
            this.current++;
            document.querySelector('#app').innerHTML = this.listUser[this.current].toHTML();
            this.listenUserClick();
        }
    }
    listenUserClick(){
        document.querySelector('.previous').addEventListener('click', () =>{
            userCollection.previous();
        })
        document.querySelector('.next').addEventListener('click', () =>{
            userCollection.next();
        })
    }
}

const userCollection = new UserCollection()
const user1 = new User('Nguyen Van A', 20, 'Male', 'Humorous, Hardworking', 'https://img.icons8.com/bubbles/2x/user-male.png')
const user2 = new User('Phan Thi V', 25, 'Female', 'Sleepy, Honest', 'https://soulprism.in/img/female.png')
userCollection.addUser(user1);
userCollection.addUser(user2);
userCollection.show();
document.querySelector('.previous').addEventListener('click', () =>{
    userCollection.next();
})
document.querySelector('.next').addEventListener('click', () =>{
    userCollection.next();
})