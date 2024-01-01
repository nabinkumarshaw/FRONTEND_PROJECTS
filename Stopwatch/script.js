var hrs=0;
var min=0;
var sec=0;
var count=0;

var timer=false;



function start(){
    timer = true;
    stopwatch();
};

function stop(){
    timer=false;

};

function reset(){
    timer=false;

    hrs=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById('hrs').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
};


function stopwatch(){
    if(timer == true){
        count=count+1;

        if(count == 100){
            sec=sec+1;
            count=0;
        }
        if(sec == 60){
            min=min+1;
            sec=0;
        }

        if(min == 60){
            hrs=hrs+1;
            min=0;
            sec=0;
        }

        var hrsstring= hrs;
        var minstring= min;
        var secstring= sec;
        var countstring= count;

        if(hrs<10){
            hrsstring= "0" + hrsstring;
        }

        if(min<10){
            minstring= "0" + minstring;
        }
        if(sec<10){
            secstring= "0" + secstring;
        }
        if(count<10){
            countstring= "0" + countstring;
        }

        document.getElementById('hrs').innerHTML=hrsstring;
        document.getElementById('min').innerHTML=minstring;
        document.getElementById('sec').innerHTML=secstring;
        document.getElementById('count').innerHTML=countstring;
        setTimeout('stopwatch()',10);
    }
}