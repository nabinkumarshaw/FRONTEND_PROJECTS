//creation of a factory function
// function personmaker(name,age){
//     let person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my nmame is ${name} and my age  is ${age}`);
//         }
//     };
//     return person;
// }

//constructor in JS
// function person(name,age){
//     this.name=name;
//     this.age=age;
//     this.talk=function(){
//         console.log(`This is ${name}`);
//     }
// }
// let p1=new person("nabin",34);
// let p2=new person("sathi",19);


//inheritance in js
// class human{
//     constructor(name,age){
        
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`my name is ${this.name}`);
//     }
// }
// class student extends human{
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks=marks;
//     }
// }
// class teacher extends human{
//     constructor(name,age,subject){
//         super(name,age);
//         this.subject=subject;
//     }
// }

//APIS through js

// const add="https://catfact.ninja/fact";

//fetch method return a promise so we can use then and catch method 
// fetch(add)
// .then((request)=>{
//     // console.log(request);      
//     return request.json()          //this also return a promise
//     })
//     .then((data)=>{
//         console.log("data1 is:",data);
//         return fetch(add)
// })
// .then((request)=>{
//     return request.json()
// })
// .then ((data)=>{
//     console.log("data2 is",data);
// })
// .catch((error)=>{
//     console.log(error);
// })

//Apis throgh async and await 

// const url="https://catfact.ninja/fact";
// async function getfact(){
// try{
//         let facts1=await fetch(url);
//         let data1=await facts1.json();
//         console.log(data1);

//         let facts2=await fetch(url);
//         let data2=await facts2.json();
//         console.log(data2);

//         }

// catch(err){
//     console.log("the error is ",err);
// }
// }

//Axios -->same like fatch but it converts directly into json file
// const url="https://catfact.ninja/fact";
// async function getfact(){
//     try{
//         let fact= await axios.get(url);
//         return fact.data.fact;
//     }
//     catch(err){
//         console.log("error is ",err);
//         return "some error!fact not showing";
//     }

// }

// let para=document.querySelector("p");
// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let info= await getfact();
//     console.log(info);
//     para.innerText=info;
// })

//dog api=dog.ceo/api/breeds/image/random
// let url="https://dog.ceo/api/breeds/image/random";
// async function getdog(){
//     try{
//         let dog=await axios.get(url);
//         console.log(dog.data.message);
//         return dog.data.message;
//     }
//     catch(err){
//         console.log(err);
//         return "some error!image not showing";
//     }
    
//  }
// let picture=document.querySelector("#pic");
// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let link= await getdog();
//     console.log(link);
//    picture.setAttribute("src",link);
// })

//factory function
// function student(name,age){
// let stu={
//     name:name,
//     age:age,
//  f1:function print(){
//     console.log(`My Name is ${name} and I am ${age} years old.`)
// }
// }
// return stu;
// };

// function createrec(length,breadth){
// let rectangle={
// length:length,
// breadth:breadth,
// f1:function area(){
//     console.log(`the area of a rectangle is ${length*breadth}`);
// }
// }
// return rectangle;
// }

//higher order function
//if both numbers are even then find sum if both are odd then find the difference
// and if 1 odd 1 even then multiply
// function calculate(a,b){
//     if(a%2==0 && b%2==0){
//         return function(a,b){
//             console.log(a+b);
//         }
//     }
//     else if(a%2!=0 && b%2!=0){
//         return function(a,b){
//             console.log(a-b);
//         }
//     }
//     else{
//         return (()=>{
//             console.log(a*b);
//         })
           
//         }
//     }

//reduce method of an array
// let arr=[3,5,4,2,7];
// //  let sum=arr.reduce((s,p)=>{
// //     return(s+p);
// //  })
// let min=Math.min(...arr);

//spread with object literals
// let student={
//     name:"nabin",
//     age:20,
//     marks:93
// }

// let stu={...student,personality:"good"};

// let arr=["nabin","sathi","anuj","sanju"];
// let[winner,runnerup]=arr;
// console.log(winner);
// console.log(runnerup);

// let student={
//          name:"nabin",
//          age:20,
//          marks:93
//      }

//      let{name,marks:mark}=student;

// let mssg=`this is ${my} first ${message}`;
// console.log(mssg);

// let dat=new Date();
// console.log(dat);
    
//creting objects of object
// let student={
//     nabin:{
//         age:20,
//         class:12
//     },
//     sathi:{
//         age:20,
//         class:12
//     }
// }

//creating array of objects
// let student=[
//     {
//      name:"nabin",
//      age:20
//     },
//     {
//      name:"sathi",
//      age:10
//     }
// ];

// // let ans=student.find((stu)=>{
// //     return stu.name=="sathi";
// // })

// console.log(student[1].name)

// let num=[12,2,3,4,5,6];
// //num.splice(0,num.length);
// num.length=0;
// console.log(num);

// let first=[1,2,3];
// let second=[4,5,6];
//  let combinearr=[...first,...second];
// let combinearr2=first.concat(second);
// console.log(combinearr);
// console.log(combinearr2);
// console.log(combinearr.slice(2,4));

//join and split method
// let mssg="hello everyon kaisey ho sv";
// let splitmsg=mssg.split(' ');
// console.log(splitmsg);
// let join=splitmsg.join('_');
// console.log(join);

// let num=[1,4,-8,-4,-3];
// let posnum=num.filter((num)=>{
//     return (num>0);
// })
// console.log(posnum);

function sum(){
    let total=0;
    for(let value of arguments){
        total+=value;
    }
    return total;
}
console.log(`the sum of all the number is ${sum(1,2,3,4,5,6)}`);






