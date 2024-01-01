// for(let i=1;i<=10;i++){
//     console.log("5 * " + i + "=" + 5*i);
// }

// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let favmovie="avtar";

// let userguess=prompt("guess the movie");

// while(userguess!=favmovie){
//     if(userguess=="quit"){
//     break;
// }
//     userguess=prompt("guess the movie again");
   
// }
// if(userguess==favmovie){
//     console.log("congraculation");
// }

//loops with array

// let fruits=["watermeelon","licchi","graphes","mango","apple"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

//for of loop
//  let cricketer=["rohit","subhman","kohli","ishan","shreyas","hardik","jadeja","kuldeep","samhi","bumrha","siraj"];
//  for(cricket of cricketer){
//     console.log(cricket);
//  }

// let arr=[-2,8,6,5,0];
// for(let i=arr.length-1;i>arr.length-4;i--){
//    console.log(arr[i]);
// }

// let str="sathi";
// if(str.length==0){
//    console.log("string is empty");
// }
// else{
//    console.log("string is not empty");
// }

// let string="nabin kumar shaw"
// console.log(string.includes("s"));

// let string="    nabin     "
// console.log(string.trim());

// let arr=[4,8,5,0,8,2,1];
// console.log(arr.includes(-8));

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//    if(arr[i]==num){
//       arr.splice(i,1);
//    }
// }
//    console.log(arr);

// let num=prompt("enter a number please");
// let count=0;
// while(num>10){
//     num=num/10;
//     count++;
// }
// console.log(count+1);

//sum of a digit
// let num=prompt("enter a number please");
// let sum=0;
// while(num>0){
//     let rem=num%10;
//     sum+=rem;
//     num=Math.floor(num/10);
// }
// console.log(sum);

//factorial of a number
// let num=prompt("enter a number please");
// let fact=1;
// for(let i=1;i<=num;i++){
//     fact=fact*i;
// }
// console.log(fact);

// let arr=[1289,54,230,67,10900];
// let greatest=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>greatest){
//         greatest=arr[i];
//     }
// }
// console.log(greatest);


// TO-Do-List
let todo=[];
let user=prompt("enter what task you want to do");
 while(true){
    if(user=="quit"){
        console.log("quiting app");
        break;
    }
    if(user=="list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
        }
    console.log("----------");
    }
    else if(user=="add"){
    let task=prompt("enter your task");
    todo.push(task);
    console.log("task added");
    }
    else if(user=="delete"){
    let idx=prompt("which index you want to delete");
    todo.splice(idx,1);
    console.log("task deleted");
    }
    else{
    console.log("wrong request");
    }
    user=prompt("enter what task you want to do");
    }


   

