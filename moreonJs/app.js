// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let li=document.querySelector("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })


//To Do List
// let input=document.querySelector("input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");

// btn.addEventListener("click",function(){
//     let list=document.createElement("li");
//     list.innerText=input.value;
//     ul.append(list);
//     input.value="";
//     let delbtn=document.createElement("button");
//     delbtn.innerText="delete";
//     delbtn.classList.add("delete");
//     list.appendChild(delbtn); 
// })

// let del=document.querySelectorAll(".delete");
// for(dels of del){
// dels.addEventListener("click",function(){
// let par=dels.parentElement;
// par.remove();
// });
// }


//To-Do-List
let input=document.querySelector("input");
let btn=document.querySelector("button");
let ulist=document.querySelector("ul");

btn.addEventListener("click",function(){
    //adding item to the to do list
    let listitem=document.createElement("li");
    listitem.innerText=input.value;
    ulist.appendChild(listitem);
    input.value="";
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    listitem.appendChild(delbtn);
})

ulist.addEventListener("click",function(event){
    // console.log("item deleted");
    // console.log(event.target);
    if(event.target.nodeName=="BUTTON"){
        let per=event.target.parentElement;
        per.remove();
    }
})

// let dbtn=document.querySelectorAll(".delete");
// for(buttons of dbtn){
//     buttons.addEventListener("click",function(){
//         this.parentElement.remove();
//     })
// }


