class Person{
constructor(name,age,height){
    this.name = name;
    this.age = age;
    this.height= height;
    
};
greet(){
    console.log("Hello");
};
}
let person = new Person("Hannah",50,"5ft 8 inches");
console.log(person);
person.greet();

class Child extends Person{
    constructor(name,age,height){
    super(name,age,height);
    this.brain="brains";
    }
}
let firstChild= new Child("Jane",2,"2ft","smart");
console.log(firstChild);

class Sister extends Person{
    constructor(name,age,height){
    super(name,age,height);
    this.brains= brains;
    this.height="7ft";
    }
}
let sister= new Child("Maria",16,"5ft","smart");
console.log(sister);