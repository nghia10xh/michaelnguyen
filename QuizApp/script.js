var questionElement=document.getElementById("question");
var answerTargets=Array.from(document.getElementsByClassName("answers"));
var roundControl=document.getElementById("advance");
var questionCountElement=document.getElementById("questionDisplay");
var questionCount=Number(questionCountElement.innerHTML);
var scoreElement=document.getElementById("score");
var scoreCount=Number(scoreElement.innerHTML);

var playing=true;
// numbOfChoices refers to number of choices (used to display right answer)
var numOfChoices=4;
const dataBase=[{
    question: "(Genesis 1:1) Fill in the blank: In the beginning God created___?",
    choice1: "Heavens and the earth",
    choice2: "Light",
    choice3: "The earth",
    choice4: "Water",
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
var availableQuestion=Array.from(dataBase);
const startingGame= () =>{
    let numOfRemaining=availableQuestion.length;
    if (questionCount<dataBase.length){
    questionCount++;
    }
    if (numOfRemaining>0){
        roundControl.style.visibility= "hidden";
        answerTargets.forEach(answerTarget=>{
            answerTarget.parentNode.style.border="0.2rem solid #56a5eb";
            }
        );
        questionCountElement.innerText=questionCount;
        playing=true;
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
        playing=false;
    }
}
    
}
answerTargets.forEach(answerTarget =>{
    answerTarget.onclick=function(){
        //when user chooses the right answer
        if (answerTarget.innerText==theAnswer && playing){
            // when user has yet get to the last question
            if (availableQuestion.length>0){
                answerTarget.parentNode.style.border='0.5rem solid #33FFB3';
                roundControl.innerText="You got it right. Click here to move to the next question";
                scoreCount++;
                scoreElement.innerText=scoreCount;
                roundControl.style.visibility="visible";
                playing=false;
            }
            // when user has get to the last question
            else {
                answerTarget.parentNode.style.border='0.5rem solid #33FFB3';
                roundControl.innerText="You got it right and finished the quiz app";
                //scoreLink.style.visibility='visible';
                scoreCount++;
                scoreElement.innerText=scoreCount;
                roundControl.style.visibility="visible";
                
            }
        }
        // when user chooses the wrong answer
        else if(playing){
            // when user has yet get to the last question
            if (availableQuestion.length>0){
                answerTarget.parentNode.style.border='0.5rem solid red';
                roundControl.innerText="You got it wrong. Click here to move to the next question";
                roundControl.style.visibility="visible";
                playing=false;
                for (let i=0;i<numOfChoices;i++){
                    if (answerTargets[i].innerText==theAnswer){
                        answerTargets[i].parentNode.style.border="0.5rem solid #33FFB3";
                    }
                }   
            }
            // when user has get to the last question
            else{
                answerTarget.parentNode.style.border='0.5rem solid red';
                roundControl.innerText="You got it wrong and finished the quiz app"; 
                //scoreLink.style.visibility='visible';
                roundControl.style.visibility="visible";
                playing=false;
                for (let i=0;i<numOfChoices;i++){
                    if (answerTargets[i].innerText==theAnswer){
                        answerTargets[i].parentNode.style.border="0.5rem solid #33FFB3";
                    }
                }
            }
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
localStorage.setItem('Mike','10');

