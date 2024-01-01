// function hello(){
//     console.log("hello");
// }
// function printname(){
//     for(let i=1;i<=5;i++){
//     console.log(i);
//     }
// }
// printname();

// function poem(){
//     console.log("Twinkle Twinkle Little star");
//     console.log("How i wonder what you are")
// }
// poem();

//create a function to roll a dice and always show the value
// function dice(){
//     let roll=Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }
// dice();

//average of three num
// function average(a,b,c){
//     let sum=a+b+c;
//     let avg=sum/3;
//     console.log(avg);
// }

// average(10,20,30);

//multiplication table

// function table(num){
//     for(let i=1;i<=10;i++){
//         console.log(num +"*"+ i +"="+num*i);
//     }
// }
// table(10);

//return sum of a number from 1 to n
// function sum(){
//     let s=0;
//     for(let i=1;i<=20;i++){
//         s+=i;
//     }
//     return s;
// }

//return concatanation of all string in an array
// let arr=["my", "name" ,"is", "nabin","kumar","shaw"];
// let stm="";
// function concate(arr){
//     for(let i=0;i<arr.length;i++){
//      stm+=arr[i];
//     }
//      return stm;
// }

//Function Expression
// let sum = function(a,b){
//     return a+b;
// }

// let mssg=function(){
//     console.log("hello bro");
// }

//higher order function taking function as a parameter

// function multiplegreet(func,n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("Namaste");
// }
// multiplegreet(greet,4);


//higher order function returning function as a parameter


//  function oddevenfactory(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("wrong request");
//     }
    
// }
// let request="even";

//calculator with the help of objects and methods
// const calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     subtract:function(a,b){
//         return a-b;
//     },
//     multiply:function(a,b){
//         return a*b;
//     }
// };

//calculator shorthand
// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     subtract(a,b){
//         return a-b;
//     },
//     multiply(a,b){
//         return a*b;
//     }
// };


//practice problem 1
// let arr=[3,89,76,5,90];

// let larger=function(number){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>number){
//             console.log(arr[i]);
//         }
//     }
// }
//  larger(89);

//practice problem 2(//unique character from a string)
// let str="abcdabcdefgggh";
// function unique(str){
//    let ans="";
//    let currchar=str[0];
//    for(let i=1;i<str,length;i++){
//     if(currchar==str[i]){

//     }
//    }
// }

//practice problem 3
// let country = ["india","puppa new gineua","Australia", "Germany", "United States of America"] ;
// // console.log(country[0].length);
// let greatestlength=0;
// idx=0;
// function greatest(country){
// for(let i=0;i<country.length;i++){
// if(country[i].length>greatestlength){
//     greatestlength=country[i].length
//     idx=country[i];
// }
// }
// return idx;
// }

//practice problem 4
// let str="ruma rani shaw";
// let count=0;
// function countvowel(str){
// for(let i=0;i<str.length;i++){
//     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//     count++;
//     }
// }
// return count;
// }

//practice problem 4(random number with start or an end)

// function genrandom(start,end){
//     let random=Math.floor(Math.random()*(end-start))+start;
//     return random;
// }


