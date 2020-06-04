let nameInput=document.getElementById('name-input');
let btnSubmit=document.getElementById('btnSubmit');
let scoreDisplayBtn=document.getElementById('scoreDisplayBtn');
let lastScore=localStorage.getItem('lastScore');
var scoreArr=JSON.parse(localStorage.getItem('scoreArr')) || [];
let scoreDisplayStatus=true;
console.log(lastScore);
btnSubmit.onclick=function(){
    if (nameInput.value){
        let newUser={
            userName:nameInput.value,
            score:lastScore
        }
        scoreArr.push(newUser);
        localStorage.setItem('scoreArr',JSON.stringify(scoreArr));
    }
}
scoreDisplayBtn.onclick=function(){
    if (scoreDisplayStatus){
    let scoreArr=JSON.parse(localStorage.getItem('scoreArr'));
    let myTable=document.createElement('table');
    myTable.setAttribute('class','table-content')
    //append the table to main element
    document.body.children[0].appendChild(myTable);
    //create table head
    let tableHead=document.createElement('thead');
    let tableHeadRow=document.createElement('tr');
    tableHeadRow.setAttribute('class','table-Row');
    tableHead.appendChild(tableHeadRow);
    myTable.appendChild(tableHead);
    let userNameHead=document.createElement('th');
    userNameHead.setAttribute('class','userColumn');
    // create content(innerHTML) of usernameHead
    let userNameHeadContent=document.createTextNode('User name');
    userNameHead.appendChild(userNameHeadContent);
    tableHeadRow.appendChild(userNameHead);
    let scoreHeadContent=document.createTextNode('Score');
    let scoreHead=document.createElement('th');
    scoreHead.setAttribute('class','scoreColumn');
    scoreHead.appendChild(scoreHeadContent);
    tableHeadRow.appendChild(scoreHead);
    //create tbody elememt display username and score
    let tableBod=document.createElement('tbody');
    myTable.appendChild(tableBod);
    
    //score refers to individual object in scoreArr(an array)
    scoreArr.forEach(function(score){
        //tBodRow refers to a new row to be created for each object in scoreArr
        let tBodRow=document.createElement('tr');
        tBodRow.setAttribute('class','table-Row');
        let userDataContent= score['userName'];
        let userDataCell=document.createElement('td');
        userDataCell.setAttribute('class','userColumn');
        userDataCell.innerHTML=userDataContent;
        tBodRow.appendChild(userDataCell);
        let scoreDataContent=score['score'];
        let scoreDataCell=document.createElement('td');
        scoreDataCell.setAttribute('class','scoreColumn');
        scoreDataCell.innerHTML=scoreDataContent;
        tBodRow.appendChild(scoreDataCell);
        tableBod.appendChild(tBodRow);
        }
    )
    }
    scoreDisplayStatus=false;
}

