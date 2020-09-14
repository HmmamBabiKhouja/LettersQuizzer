const alphaButtons=document.querySelectorAll(".alphabet");

alphaButtons.forEach(button => button.addEventListener("click",playSound))

const audios={};
for (let i = 0; i < alphaButtons.length; i++) {
    audios[`audio${i}`] = new Audio(`../AR-alphabets/${i}.mp3`);
}

function playSound(){
    const num = Number(this.dataset.num);
    audios["audio"+num].play();
}


