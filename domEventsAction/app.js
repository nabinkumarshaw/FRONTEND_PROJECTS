//let btn=document.querySelector('button');


// btn1.onclick=function(){
//     console.log("button was clicked");
// }

// btn1.onclick=()=>{
//     console.log("button was clicked");
// }
// function click(){
//     console.log("button was clicked");
// }

// btn1.onclick=click;

// let btn=document.querySelectorAll('button');
// for(button of btn){
//     button.onclick=()=>{
//     alert("button clicked");   
//     }
//     button.onclick=function (){
//         alert("nabin");
//     }
//     // button.onmouseenter=function(){
//     //     console.log("you took mouse into the button");
//     // }
// }

//event listner
// let btn=document.querySelectorAll("button");
//  for(btns of btn){
//     btns.addEventListener("click",name1);
//     btns.addEventListener("click",name2);
//  }

//  function name1(){
//     alert("button clicked"); 
//  }

// function name2(){
//     alert("nabin");
// }

//event listner for buttons
// 

//event listner for a div box
// let box=document.querySelector("div");
// box.addEventListener("dblclick",function(){
//     box.style.backgroundColor="green"
// })

//KeyboardEvent
// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){  
//     console.log("key=",event.key);
//     console.log("keycode=",event.code);
//     console.log("key pressed");
// })

// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){  //arrowLeft,arrowRight,arrowUp,arrowDown
//    if(event.code=="ArrowLeft"){
//     console.log("key pressed is left");
//    }
//     if(event.code=="ArrowRight"){
//     console.log("key pressed is right");
//    }
//    else if(event.code=="ArrowUp"){
//     console.log("key pressed is up");
//    }
//    else if(event.code=="ArrowDown"){
//     console.log("key pressed is down");
//    }

// })

//form event
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let inp=form.elements[0];
//     let pass=form.elements[1];
//     // let inp=document.querySelector("#text");
//     // let pass=document.querySelector("#pass");
//     // console.dir(inp);
//     // console.log("input value=",inp.value);
//     // console.log("password=",pass.value);
//     alert(`hi ${inp.value} your password is ${pass.value}`)
//     // alert("form submitted"); 
// })

//change event
// let user=document.querySelector("#text");
// user.addEventListener("change",function(event){
//     event.preventDefault();
//     console.log("event changed");
//     console.log(user.value);
// })

//input event
// let user=document.querySelector("#text");
// user.addEventListener("input",function(event){
//     event.preventDefault();
//     console.log("event inputed");
//     console.log(user.value);
// })


//mouseout eventListener
// let btn=document.querySelector("button");
// btn.addEventListener("mouseout",function(event){
//     console.log("mouseout function works");
// })
// btn.addEventListener("click",function(event){
//     console.log("mouse is clicked");
// })

//change the button color on clicking add a addEventListener
// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//    let col=randomcol();
//     btn.style.backgroundColor=col;
//     console.log("button clicked");
    
// })
// function randomcol(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb(${red},${blue},${green})`;
//     return color;
// }

// let heading=document.querySelector("h2");
// let input=document.querySelector("input");
// input.addEventListener("input",function(){
//     heading.innerText=input.value;
// })


//event prevent defult
// let anc=document.querySelectorAll('a');
// let thirdlink=anc[2];
// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
// });
let body=document.createElement('body');
let div=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let p=document.createElement('p');
//     p.innerText=(`I am para ${i}`);
//     p.addEventListener('click',function(event){
//         console.log("clicked para");
//     })
//     div.appendChild(p);
// }
// document.body.appendChild(div);

for(let i=1;i<=100;i++){   
    let p=document.createElement('p');
    p.innerText=(`I am para ${i}`);  
    div.appendChild(p); 
}
div.addEventListener('click',function(event){
    console.log("clicked para");
    
})


document.body.appendChild(div);


