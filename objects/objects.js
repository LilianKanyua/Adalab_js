 let person= {
     name:"Anne",
     age:20,
     height:"5ft",
     friend:{
         name:"Berly",
         age:25,
     }

 }
 let person1= new Object();
 console.log(person1);
 person1.name="Edith";
 console.log(person1);
 person1.age=40;

 console.log(person1);
 console.log(person.age);
 person["age"]=30;
 console.log(person.age);

 console.log(person.friend.age);
 delete person.age;
 console.log({person});
 