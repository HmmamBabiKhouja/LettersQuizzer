// window.addEventListener("load", init())

// DOM VARIABLES
const letterChoices = document.querySelectorAll(".alpha-item");
const scoreDisplay = document.querySelector(".score-value")

const audioPlayer = document.querySelector("#audio-tag");
const darkPlayTriangle = document.querySelector(".dark-triangle");
const lightPlayTriangle = document.querySelector(".light-triangle");

// SOUND VARIABLES
const wonRound= new Audio("../../resources/effect-sounds/won.mp3");
const lostRound= new Audio("../../resources/effect-sounds/lost.mp3");
// PRIMITIVE VARIABLES
let score = 0;
const alphabets = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let randomNum = 0;

function init(){
    let choices= [];
    for ( let i =0;i<3;i++){
        let temp = Math.floor(Math.random()*alphabets.length);
        if(choices.includes(temp)){
            i--;
            continue;
        }
        choices.push(temp);
        letterChoices[i].innerHTML=alphabets[temp];    
    }

    randomNum = choices[Math.floor(Math.random()*choices.length)];
    playLetter();
}

function playLetter(){
    let path = `../../resources/EN-alphabets-sounds/${randomNum}.mp3`;
    audioPlayer.src=path;
    audioPlayer.play();
    darkPlayTriangle.classList.add("dark-triangle-clicked");
    lightPlayTriangle.classList.add("light-triangle-clicked");
    setTimeout(()=>{
        darkPlayTriangle.classList.remove("dark-triangle-clicked");
        lightPlayTriangle.classList.remove("light-triangle-clicked");
    },750)
}

function checkAnswer(answer){
    let sound;
    letterChoices[answer].classList.add("btn-clicked");
    setTimeout(()=>{
        letterChoices[answer].classList.remove("btn-clicked");
    },450);
    
    let answerValue= letterChoices[answer].innerHTML;
    if(answerValue===alphabets[randomNum]){
        score++;
        sound=wonRound;
    }else{
        sound=lostRound;
        score=0;
    }
    sound.play();

    setTimeout(()=>{
        init();
        scoreDisplay.innerHTML=score;
    },1350)
}
init();