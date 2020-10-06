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
const alphabets = ["أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص",
                    "ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي"];
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
    let path = `../../resources/AR-alphabets-sounds/${randomNum}.mp3`;
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

    let arabicScore=enToAr(score.toString());
    setTimeout(()=>{
        init();
        scoreDisplay.innerHTML=arabicScore;
    },1350)
}

//English to Arabic digits.
function enToAr(num) {
    return num.replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
}

init();