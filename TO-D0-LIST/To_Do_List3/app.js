let Todo=[];

let req=prompt("enter the choice")

while(true){
    if(req=="quit"){
        console.log("quiting the game");
        break;
    }
    else if(req=="list"){
        console.log("------------");
        for(let i=0;i<Todo.length;i++){
            console.log(i , Todo[i]);
        }
        console.log("------------");
    }
    else if(req=="add"){
        let ask=prompt("enter the task item");
        Todo.push(ask);
    }
    

    else if(req=="delete"){
        let idx=prompt("enter the index you want to delete");
        Todo.splice(idx,1);
        console.log("item deleted");
    }
    else{
    console.log("item deleted");
    }
    req=prompt("enter the choice");
}