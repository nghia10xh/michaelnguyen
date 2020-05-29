
var questionElement=document.getElementById("question");
var answerTargets=Array.from(document.getElementsByClassName("answers"));
var roundControl=document.getElementById("advance");
var playing=true;

const dataBase=[{
    question: "(Genesis 1:1) Fill in the blank: In the beginning God created___?",
    choice1: "Heavens and the earth",
    choice2: "Light",
    choice3: "The earth",
    choice4: "Johnny",
    rightAnswer:"Heavens and the earth"
},
{
    question: "(Genesis 1:2) What was the earth like at this time?",
    choice1: "Formless",
    choice2: "Empty",
    choice3: "A and B",
    choice4: "Light",
    rightAnswer:"A and B"
},
{
    question: "(Genesis 1:5) What does God call the light?",
    choice1: "Day",
    choice2: "Night",
    choice3: "Morning",
    choice4: "Evening",
    rightAnswer:"Day"
}
];
// availableQuestion is dynamic. Its element removed when a random question selected.
var availableQuestion=dataBase;
const startingGame= () =>{
    playing=true;
    roundControl.style.visibility= "hidden";
    let numOfRemaining=availableQuestion.length;
    if (numOfRemaining>0){
        questionIndex=Math.floor(Math.random()*numOfRemaining);
        let myRandQuestion=availableQuestion[questionIndex].question;
        questionElement.innerText=myRandQuestion;
        let myAnswer=availableQuestion[questionIndex].rightAnswer;
        for (let i=0; i<answerTargets.length; i++){
        //To populate multiple choice answerTargets;
            answerTargets[i].innerText=availableQuestion[questionIndex][`choice${i+1}`];
        }
        availableQuestion.splice(questionIndex,1);
        theAnswer= myAnswer;
    }
    else{
        roundControl.innerText= "You've finished the quiz";
        roundControl.style.visibility= "visible";
        playing=false;
    }
}
answerTargets.forEach(answerTarget =>{
    answerTarget.onclick=function(){
        if (answerTarget.innerText==theAnswer && playing){
            roundControl.innerText="You got it right. Click here to move to the next question";
            roundControl.style.visibility="visible";
            playing=false;
        }
        else if(playing){
            roundControl.innerText="You got it wrong. Click here to move to the next question   ";
            roundControl.style.visibility="visible";
            playing=false;       
            // rightChoicereturns the key that holds right answer
            
        }
    }
}
)    
    



/*
for (let i=0;i<answerTargets.length;i++){    
        answerTargets[i].onclick=function(){
            if (answerTargets[i].innerText==theAnswer && playing){
                console.log('right');
                roundControl.innerText="You got it right. Click here to move to the next question";
                roundControl.style.visibility="visible";
                playing=false;
            }
            else if(playing){
                console.log('wrong');
                roundControl.innerText="You got it wrong. Click here to move to the next question   ";
                roundControl.style.visibility="visible";
                playing=false;            
            }
        }   
} 
*/
roundControl.onclick=startingGame;
startingGame();

