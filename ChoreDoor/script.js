var doorImage1=document.getElementById("door1");
var doorImage2=document.getElementById("door2");
var doorImage3=document.getElementById("door3");
var restartButton=document.getElementById("start");
var botDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let currentlyPlaying=true;
let a;
let b;
let c;
//The line below added to try a new approach
let clickRecorder=[];
clickCount=0;
function startRound(){
    doorImage1.src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
    doorImage2.src= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
    doorImage3.src= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
    document.getElementById('start').innerHTML="Good luck!";
    clickCount=0;
    imagesArray=[botDoorPath,beachDoorPath,spaceDoorPath];
    let i=Math.floor(3*Math.random());
    a=imagesArray[i];
    imagesArray.splice(i,1);
    let k=Math.ceil(Math.random()*1);
    b =imagesArray[k];
    imagesArray.splice(k,1);
    c=imagesArray[0]; 
}
startRound();   
doorImage1.onclick=function(){
    if (currentlyPlaying){
        doorImage1.src=a;
        clickRecorder.push(doorImage1.src);
        if (clickRecorder[clickRecorder.length-1]!=botDoorPath){
            clickCount++;
        }
        else if(clickCount==1||clickCount==0) {
            currentlyPlaying=false;
            document.getElementById('start').innerHTML="Game Over! Play Again?";
            document.getElementById('current-streak').innerHTML=0;
        }
        else {
            document.getElementById('start').innerHTML="You win! Play again?";
            document.getElementById('current-streak').innerHTML++;        
            currentlyPlaying=false;
            if (document.getElementById('current-streak').innerHTML>document.getElementById('best-streak').innerHTML){
                document.getElementById('best-streak').innerHTML=document.getElementById('current-streak').innerHTML;
            }
        }
    }
}
doorImage2.onclick=function(){
    if (currentlyPlaying){
        doorImage2.src=b;
        clickRecorder.push(doorImage2.src);
        if (clickRecorder[clickRecorder.length-1]!=botDoorPath){
            clickRecorder.push(doorImage2.src)
            clickCount++;
        }
        else if (clickCount==1||clickCount==0) {
            currentlyPlaying=false;
            document.getElementById('start').innerHTML="Game Over! Play Again?";
            document.getElementById('current-streak').innerHTML=0;
        }
        else{
            document.getElementById('start').innerHTML="You win! Play again?";
            document.getElementById('current-streak').innerHTML++;
            currentlyPlaying=false;if (document.getElementById('current-streak').innerHTML>document.getElementById('best-streak').innerHTML){
                document.getElementById('best-streak').innerHTML=document.getElementById('current-streak').innerHTML;
            }
        }
    }
}
doorImage3.onclick=function(){
    if (currentlyPlaying){
        doorImage3.src=c;
        clickRecorder.push(doorImage3.src);
        if (clickRecorder[clickRecorder.length-1]!=botDoorPath){
            clickRecorder.push(doorImage3.src)
            clickCount++;
        }
        else if (clickCount==1||clickCount==0) {
            currentlyPlaying=false;
            document.getElementById('start').innerHTML="Game Over! Play Again?";
            document.getElementById('current-streak').innerHTML=0;
        }
        else{
            document.getElementById('start').innerHTML="You win! Play again?";
            document.getElementById('current-streak').innerHTML++;
            currentlyPlaying=false;
            if (document.getElementById('current-streak').innerHTML>document.getElementById('best-streak').innerHTML){
                document.getElementById('best-streak').innerHTML=document.getElementById('current-streak').innerHTML;
            }
        }
    }
}

restartButton.onclick =function(){
    if (restartButton.innerHTML=="Game Over! Play Again?" || document.getElementById('start').innerHTML=="You win! Play again?"){
        currentlyPlaying=true;
        startRound();
    }
}
