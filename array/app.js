//let student=["nabin","sathi","mohan"];

// let fruit=["mango","lichi","coconut"];

// let month=["january","july","march","august"];

// let primary=["red","yellow","blue"];


//for each loop
// let arr=[9,7,5,3,1];
// function print(ele){
//     console.log(ele);
// }
// arr.forEach(print);


//arr.map function
// let arr=[2,3,4,5,6,7];
//  function square (ele){
//          console.log(ele*ele);
//     }
// let double=arr.map(square);

// let student=[
//     {
//     name:"sathi",
//     marks:98
//     },
//     {
//     name:"nabin",
//     marks:78
//     },
//     {
//     name:"payal",
//     marks:90
//     }
// ];

// student.forEach(function(student){
//     console.log(student.marks)
// });

// student.forEach((student)=>{
//     console.log(student.marks);
// }
// )

// let gpa=student.map((ans)=>{
//     return ans.marks/10;
// })

//filter function in an array
// let num=[2,4,5,9,70,6,8];

// let newnum=num.filter(function even(num){
//     return (num%2==0);
// })

// let newnum=num.filter((num)=>{
//     return (num%2==0);
// })

// let p=num.every(function ele(num){
//     return num%2!=0;
// })

//reduce function
// let arr=[1,2,3,4,5];
// let p=arr.reduce((ans,ele)=>{
//     return ans+ele;
// })

// let arr=[2,8,3,9,1];
// let max=0;
// let greater=function(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }

//reduce method to find an greatest element in an array
// let arr=[2,8,3,9,1];
// let ans=arr.reduce((res,ele)=>{
//     if(res>ele){
//         return res;
//     }
//     else{
//         return ele;
//     }
// })


//q)check all numbers are multiple of 10 or not in an array
//let arr=[10,20,78,30,40,50];
// let ans=arr.every((ele)=>{
//     return(ele%10==0);
// })

//create a function to find minimum number in an array

// let arr=[10,20,7,78,30,40,50];
// let ans=arr.reduce((res,ele)=>{
//     if(ele<res){
//         return ele;
//     }
//     else{
//         return res;
//     }
// })

// let arr=[1,2,3,4,5];
// let newarr=[...arr];

// let char=[..."nabin"];

// let odd=[1,3,5,7];
// let even=[2,4,6,8];
// let num=[...odd,...even];

// let data={
//     email:"nabinkumarshaw123@gmail.com",
//     password:"abcd"
// };

// let datacopy={...data,phone:9905042797};

// let odd=[1,3,5,7];
// let obj={
//     ...odd
// }


//rest method in an array

// function sum(...arr){
//     return arr.reduce((sum,el)=>{
//         return sum+el
//     });
// }

//Destructuring in array
// const name=["nabin","sathi","pinku","raja","vishal"];
// const [winner,runnerup,...others]=name;
// console.log(winner);
// console.log(runnerup);
// console.log(others);

//Destructuring in objects
// let student = {
// name:"nabin",
// age:19,
// class:12,
// marks:[23,89,67,98,64],
// sub:["hindi","english","math","science"],
// city:"jamshedpur"
// };

// let{name,city:place}=student;

//q1)square and sum the array element using the array function then find out the average
// let arr=[2,3,4,5];
// let sum=0;
// let avg=0;
// let newarr=arr.map((el)=>{
//     return el*el;
// })
// let ans=((newarr)=>{
//     for(num of newarr){
//     sum+=num;
//     }
//     avg=sum/newarr.length;
//     return avg;
// })


// let arr=[1,4,8,5,10];
// let newarr=arr.map((el)=>{
//     return el+5;
// })

// let arr=['n','a','b','i','n'];
// let uparr=arr.map((el)=>{
//     return el.toUpperCase();
// })

//we have to create two objects and merge them in one objects
// let obj1={
//     name:"nabin",
//     age:19,
//     vill:"mohulishole",
//     mark:92
// }
// let obj2={
//     name:"sathi",
//     age:18,
//     vill:"manusmuria",
//     mark:95
// }

// let mergeobject={obj1,obj2};


