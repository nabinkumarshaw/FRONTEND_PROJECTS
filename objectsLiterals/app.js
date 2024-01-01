// let student={name:"nabin",
//                 age:19,
//                     marks:92.8,
//                         city:["jsr","bbsr"]};


// const threads={
//     username:"#nabinkumarshaw",
//     content:"javascript as my #@1stpost",
//     like:23,
//     reposts:"12",
//     tags:"@sathighatuary",
//     undefined:"kojoj"
// };

// let student={name:"sathi",marks:91.8,city:"jsr",age:19};

//object of objects
// const info={
//     nabin:{
//         age:19,
//         marks:'A+'
//     },
//     prabin:{
//         age:21,
//         marks:'A'
//     },
//     shradha:{
//         age:23,
//         marks:'A++'
//     }
// }

//Array of objects
// const info=[
//     {
//         name:"nabin",
//         age:19
//     },
//     {
//         name:"sathi",
//         age:21
//     },
//     {
//         name:"priti",
//         age:34
//     }
// ]


//playing with some Math function and properties

//A guessing game where first user gives a maximum value upto which random number generates then one 
//random number is generated then user have to guess that number until he did not guess the correct 
//number or else he had to quit the game.

// let limit=prompt("please provide the range");
// let randomgen=Math.floor(Math.random()*limit)+1;
// let userguess=prompt("guess the number");
// while(true){
//     if(userguess=="quit"){
//         console.log("quiting the game");
//         break;
//     }
//     if(userguess==randomgen){
//     console.log("congrates!correct guess and the random number is "+randomgen);
//     break;
//     }
//     else if(userguess>randomgen){
//        userguess= prompt("you have entered a larger number");
//     }
//     else if(userguess<randomgen){
//         userguess= prompt("you have entered a smaller number");
//     }  
// }


//create a guess between 1 to 6 in a dice game

// let dice=Math.floor(Math.random()*6)+1;
//  alert(`you are with ${dice}.`)
// console.log(dice);

// let car={
//     name:"Xuv",
//     model:"new345",
//     color:"black"
// };

// let person={
//     name:"nabin",
//     age:18,
//     city:"delhi"
// };

// let rectangle={
//     length:10,
//     breadth:4,

//      draw:function(){
//         console.log("draw");
//     }
// };


// //factory function
// function createRectangle(length,breadth){
//     let rectangle={
//          len:length,
//          bre:breadth,
//          draw:function(){
//             console.log("draw");
//         }
//     }
//     return rectangle;
// }


// let ans1=createRectangle(2,4);
// let ans2=createRectangle(3,40);
// let ans3=createRectangle(22,45);
// let ans4=createRectangle(26,4);


//constructor function
//  function rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log("draw a rectangle");
//     }
//  }

//  let rec=new rectangle(5,8);

// let rectangle={
//     length:12,
//     breadth:4
// };

// for(key in rectangle){
//     console.log(key);
// }



// const student={
//     name:"shrada",
//     age:23,
//     // eng:95,
//     // math:93,
//     // phy:97,

//     avg:function (eng,math,phy){
//         this.eng=eng;
//         this.math=math;
//         this.phy=phy;
//         average=(eng+phy+math)/3;
//         console.log(average);
//     }

// };

//Arrow Function

// const sum=(a,b)=>{
//     console.log(a+b);
// }

// const cube=(num)=>{
//     console.log(num*num*num);
// }

// const power=(a,b)=>{
//     return a**b;
// }
// const mul=(a,b)=>(
//     a*b
// );

//setTimeout function
// console.log("Hii there!")
// setTimeout(()=>{
//     console.log("Apna college");
// },4000)
// console.log("welcome to")

//setInterval

// let id=setInterval(()=>{
//     console.log("nabin kumar shaw");
//         },2000);
//         console.log(id);

//square of a number using normal function and arrow function
// let square=function(num){
//     return num*num;
// }
// function square(num){
//     return num*num;
// }
// const sq=(num)=>{
//     return num*num;
// }

// let id=setInterval(()=>{
//     console.log("Hello World!")
// },2000);
// console.log(id);

// setTimeout(()=>{
//     clearInterval(id)
// },10000);

// const arravg=(arr)=>{
//     let avg;
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//         avg=sum/arr.length;
//     }
//     return avg;
// }
// const arr=[1,2,3,4,5];


//using arrow function determine even or not
// let check=(num)=>{
//     if(num%2==0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }
// }



        





