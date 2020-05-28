
var questionElement=document.getElementById("question");
var answerTargets=Array.from(document.getElementsByClassName("answers"));
var roundControl=document.getElementById("advance");
var playing=true;
const dataBase=[{
    question: "Who has written this book?",
    choice1: "Mike",
    choice2: "Tyler",
    choice3: "Nick",
    choice4: "Johnny",
    rightAnswer:"Mike"
},
{
    question: "Who has done this assignment?",
    choice1: "Mike Tyson",
    choice2: "Tyler Nguyen",
    choice3: "Nick Henderson",
    choice4: "Johnny Pham",
    rightAnswer:"Nick Henderson"
},
{
    question: "Who has killed Rag?",
    choice1: "Floki",
    choice2: "Rollo",
    choice3: "Nick Henderson",
    choice4: "Mike Nguyen",
    rightAnswer:"Mike"



}
];
// availableQuestion is dynamic. Its element removed when a random question selected.
var availableQuestion=dataBase;
const startingGame= () =>{
    playing=true;
    roundControl.style.visibility= "hidden";
    let numOfRemaining=availableQuestion.length;
    if (numOfRemaining>0){
        let questionIndex=Math.floor(Math.random()*numOfRemaining);
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

