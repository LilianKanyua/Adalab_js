let person={
    name:"Anne",
    age:25,
    introduce :function(){
        console.log("Hello");
        console.log(`Hello my name is ${this.name}`);
    }
   
}
person.introduce();

person.greet=()=>{
    console.log("How are you doing?");
    console.log(`I am ${person.name}`);
}
person.greet();
