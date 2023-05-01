let num=[10,30,3,8,7,16,45];
let i=0;
let sum=0;
let multiply=1;
while(i<num.length){
    console.log(num[i]);
    console.log(sum+=num[i]);
    console.log(multiply*=num[i]);
    i++;
};
console.log(sum);
console.log(multiply);


function fourthIndex(arrNum){  
      let i=0;         
      while(i<arrNum.length){ 
                           if(i===4){      
                     break;         
                    }  
                    i++;
                 }  
             console.log({"num":arrNum[i]});
                     } 
                        let arrNum = [1,2,3,4,5,6,7,8,9];
                    fourthIndex(arrNum);


function sumEven(myArr){
    let sum=0;
    for(let i=0;i<myArr.length;i++){
        if(i%2===0){
            sum+=myArr[i];
        }
    console.log(sum);
    }
}
let myArr=[20,13,45,67];
console.log(sumEven(myArr));
