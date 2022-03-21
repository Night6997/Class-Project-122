x=0;
y=0;

draw_circle="";
draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){

    document.getElementById("status").innerHTML="System is listening, please speak";
    recognition.start();

}

recognition.onresult=function(event){

    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech has been recognized as "+content;
    if(content=="circle"){

        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        draw_circle="set"
        document.getElementById("status").innerHTML="System has started drawing a circle";

    }
    if(content=="rectangle"){

        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        draw_rect="set"
        document.getElementById("status").innerHTML="System has started drawing a rectangle";

    }

}

function setup(){

    canvas=createCanvas(900,600);

}

function draw(){

    if(draw_circle=="set"){

        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="System has finished drawing a circle";
        draw_circle="";

    }
    if(draw_rect=="set"){

        length=Math.floor(Math.random()*100);
        breadth=Math.floor(Math.random()*75);
        rect(x,y,length,breadth);
        document.getElementById("status").innerHTML="System has finished drawing a rectangle";
        draw_rect="";

    }


}