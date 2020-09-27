// window.addEventListener("load", init())

// DOM VARIABLES
const letterChoices = document.querySelectorAll(".alpha-item");
const bird = document.querySelector("#bird");
const audioPlayer = document.querySelector("#audio-tag");

// PRIMITIVES VARIABLES
const alphabets = ["أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص",
                    "ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي"];

// const alphabets = ["A","B",'C','D','E','F','G','H','I','J','K','L','M',
//                     'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


function init(){
    let randomNum = Math.floor(Math.random()*alphabets.length);
    let path = `../../resources/AR-alphabets/${randomNum}.mp3`;
    audioPlayer.src=path;
    audioPlayer.play();
}

init();