function Person(name,age,height){
    this.name=name;
    this.age=age;
    this.height=height;
    this.greet= function(){
        console.log("Hello");
    }
};

let adam= new Person("Adam",32,"6ft");
console.log(adam);
adam.weight="50kgs";
console.log(adam);

let eve= new Person("Eve",23,"5ft");
console.log({eve});

Person.prototype.race = "Black";
console.log(adam.race);
console.log({eve});


Person.prototype.nationality = "Rwandan";
console.log(eve.nationality);
console.log(adam.nationality = "Kenyan");

Person.prototype.yearOfBirth=function(){
       let year = new Date().getFullYear();
    let birth = year - this.age;
    console.log(birth);
}
 adam.yearOfBirth();