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
/**
let conter=0;
while(conter <= 5){
    conter+=1;
    console.log("while: ", conter);
}

for(let i=0; i<=4; i++){
    console.log("for: ", i);
}
*/
/**
let age1=25;
let age2=30;
let age3=35;
console.log(age1, age2, age3);//25 30 35

let ages=[25,30,35];
console.log(ages);//[25,30,35]
console.log(ages[1]);//30

//แทนคที่ค่าในอาเรย์
ages=[40,45,50];
console.log(ages);//[40,45,50]

//ต่ออาเรย์
ages.push(55);
console.log(ages);//[40,45,50,55]

//ความยาวของอาเรย์
console.log(ages.length);//4

//ลบสมาชิกตัวสุดท้ายของอาเรย์
ages.pop();
console.log(ages);//[40,45,50]

if(ages.includes(45)){//true
    console.log("เจออายุ 45 ในอาเรย์");//พบ 45 ในอาเรย์
}

let numbers=[90,60,80,40,50];
numbers.sort();
console.log(numbers);//[40,50,60,80,90]

let names=["John","Jane","Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

for (let i=0; i< names.length; i++){//ถ้าไม่มี index ไม่มีอยู่จริงจะได้ค่า undefined
    console.log(names[i]);
}

let student=[{
    age:20,
    name:"Emma",
    grade:"A"
},{
    age:22,
    name:"Liam",
    grade:"B"
}];
console.log(student);
for(let i=0; i<student.length; i++){
    console.log("Student" + (i+1)+":");
    console.log("Name:", student[i].name);
    console.log("Age:", student[i].age);
    console.log("Grade:", student[i].grade);
}   
 student.push({
    age:21,
    name:"Olivia",
    grade:"A"
});
console.log(student);
*/

//ประกาศ func
/** 
function calculate_grade(score){
    if (score >= 90){
        grade= "A";
    } else if (score >= 80){
        grade= "B";
    } else if (score >= 70){
        grade= "C";
    } else if (score >= 60){
        grade=  "D";
    } else {
        grade= "F";
    }
    return grade;
}

//เรียกใช้ func
let student_score = 85;
let student_grade= calculate_grade (student_score);
console.log("Student's grade:",student_grade);
*/

/**
let score=[10,20,30,40,50];
for (let i=0; i<score.length; i++){
    console.log('Score at index' + i + ' is' + score[i]);
    console.log('Score at index ${i} is ${score[i]}');
}

score=score.map((s)=>{
    return s * 2;
})

score.forEach((s)=>{
    console.log('new score:', s);
})
*/
/** 
let score=[10,20,30,40,50];

let newScore=[];

for (let index=0; index<score.length; index++){
    console.log('score: ', score[index]);
    if (score[index]>=30){
        newScore.push(score[index])
    }
}

console.log('new score :', newScore);

newScore.forEach((ns)=>{
    console.log('new score: ', ns);
});
*/
/** 
let score=[10,20,30,40,50];

for (let index=0; index<score.length; index++){
    console.log('score: ', score[index]);
}

let newScore=score.filter((s)=>{
    if (s >=30){ // หรือ return s>=30;
        return true;
    } else {
        return false;
    }
})

newScore.forEach((ns)=>{
    console.log('new score: ', ns);
});
*/
let students=[
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },
    {
        name: 'bb',
        score: '60',
        grade: 'B'
    }
]

console.log('Student: ',students[0])

let student= students.find((s)=>{
    if(s.name=='bb'){
        return true;
    }
})

let doublescore_student= students.map((s)=>{
    s.score=s.score*2;
    return s;
})

console.log('student: ', student);
console.log('doublescore_student: ', doublescore_student);

let hightScore_student=students.filter((s)=>{
    if(s.score>=110){
        return true;
    }
})
console.log('hightScore_student: ', hightScore_student);