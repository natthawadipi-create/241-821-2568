//String,Number,Boolean,Null,Object,Array
/**
//String
let fname = "John"; //String
console.log("Name:", fname);
//Number
let age = 30; //Number
let height = 5.9; //Number

fname="Jane";
console.log("Name:", fname);
console.log("Age:", age);
console.log("Height:", height);
*/

/** 
 + = บวก
 - = ลบ
 * = คูณ
 / = หาร
 % = หารเอาเศษ
 */
/**
let number1 = '10';
let number2 = '3';

let result = number1 + number2;
console.log("ผลบวก:", result);
*/

/**
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ
*/
/** 
let number1 = 5;
let number2 = 5;
*/
/** 
let condition = number1 <= number2; //Boolean ค่า true หรือ false
console.log("condition:", condition);
*/
/** 
// If - else condition
if(number1 > number2){
    console.log("this is if.");
}
else if(number1 < number2){
    console.log("this is else if.");
}
else {
    console.log("this is else.");
}
*/
/**
let score = prompt("Enter your score: ");
if(score >= 80){
    console.log("Grade: A");
} 
else if(score >= 70){
    console.log("Grade: B");
}
else if(score >= 60){
    console.log("Grade: C");
}
else if(score >= 50){
    console.log("Grade: D");
}
else{
    console.log("Grade: F");
}
*/
/**
&& = และ
|| = หรือ
! = not หรือ ไม่
 */
/**
let number1 = 5;
let number2 = 10;
let condition1 = (number1 > 0) && (number2 > 0); //true && true = true
console.log("condition:", condition1);

let age = 25;
let gender = "female";
if(age >= 18 && gender == "female"){
    console.log("คุณสามารถเข้าร่วมกิจกรรมนี้ได้");
}
*/
/**
while
for
 */
let conter=0;
while(conter <= 5){
    conter+=1;
    console.log("while: ", conter);
}

for(let i=0; i<=4; i++){
    console.log("for: ", i);
}