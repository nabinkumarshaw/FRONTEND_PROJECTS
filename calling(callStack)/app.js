// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans=two() + one();
//    console.log(ans);
// }

// three();

// let heading=document.querySelector("h1");
// setTimeout(()=>{
//     heading.style.color="red";
// },1000);

// setTimeout(()=>{
//     heading.style.color="orange";
// },2000);

// setTimeout(()=>{
//     heading.style.color="green";
// },3000);

// let heading=document.querySelector("h1");
// function colourchange(color,delay,nextcolor){
//     setTimeout(()=>{
//         heading.style.color=color;
//         nextcolor();
//     },delay);
// }
//nesting of these callback is called callback Hell

// colourchange("red",1000,()=>{
//     colourchange("green",1000,()=>{
//         colourchange("blue",1000,()=>{
//             colourchange("yellow",1000); 
//         }); 
//     }); 
// });

//now using the promise objects
let heading=document.querySelector("h1");
function colourchange(color,delay){
    return new Promise((nextcolor)=>{
        setTimeout(()=>{
            heading.style.color=color;
            nextcolor("next colour appearing");
        },delay);
    })   
    }

//now using async ansd await 
    async function show(){
       await colourchange("red",1000);
       await colourchange("yellow",1000);
       await colourchange("violet",1000);
       await colourchange("purple",1000);
    }

//     colourchange("red",1000)
//     .then((result)=>{
//         console.log(result);
//         return colourchange("green",1000)
//     })
//         .then((result)=>{
//             console.log(result);
//             return colourchange("blue",1000)
//     })
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
        
    

    



//save to database
// function savetodb(data,success,failure){
// let internetspeed=Math.floor(Math.random()*10)+1;
// if(internetspeed>4){
//     success();  
// }
// else{
//     failure();
// }
// }
//agar 1st data database mey save ho jye to dusra wala pey jye isliye ye nasting callback
// savetodb("nabin",()=>{
//     console.log("sucess:your data is saved");
//     //agar 2nd data database mey save ho jye to dusra wala pey jye isliye ye nasting callback
//     savetodb("sathi",()=>{
//         console.log("sucess2:your data is saved");
//         savetodb("raja",()=>{
//             console.log("sucess3:your data is saved");
//         },()=>{
//             console.log("weak connection3:your data is not saved");
//         })
//     },()=>{
//         console.log("weak connection2:your data is not saved");
//     })
// },()=>{
//     console.log("failure1:your data is not saved");
// })


//promises object
// function savetodb(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         resolve("message saved");  
//     }
//     else{
//         reject("message rejected");
//     }
//     });
// }

// savetodb("happy coding")  
//     .then((result)=>{
//     console.log("mssg1: sucessfully loaded");
//     console.log(result);
//  return savetodb("hrey krishna") ;
// })
// .then((result)=>{   //ye wala hrey krishna wala mssg ka data 
//     console.log("mssg2: sucessfully loaded");
//     console.log(result);
//     return savetodb("radhey radhey")
// })
// .then((result)=>{
//     console.log("mssg3: sucessfully loaded");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("mssg ignored");
//     console.log(error);
// })
    
    
//async function
// async function greet(){
//     throw "error 404!"
//    // console.log("good morning sathi");
//    return "good morning sathi";
// }

// greet ()
// .then((result)=>{
//     console.log("promise resolved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise was found error");
//     console.log(error);
// })

//await keyword in async function
//generating 5 random number after 1 sec each using promises and await
// function gennumber(){
//     return new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolved();
//         },1000)
//     }); 
//     }

//     async function demo(){
//        await gennumber();
//        await gennumber();
//        await gennumber();
//        await gennumber();
//        await gennumber();
//     }


