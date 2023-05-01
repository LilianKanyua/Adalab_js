//string to a number implicit internal coercion, explicit external coercion
let a=10;
let b="10";
//implicit coercion 
let c=b+a;
console.log(c)
console.log("Turn to a number",b*1);
let d= b*1;
console.log(d+a);
let e=+b+a;
console.log(e);



//explicit
console.log({"number":Number(b)});
console.log(b);
console.log({"string":String});
console.log({"array":Array});
console.log(b);
 