const alphaButtons=document.querySelectorAll(".alphabet");

alphaButtons.forEach(button => button.addEventListener("click",pressBtn))

const audios={};
for (let i = 0; i < alphaButtons.length; i++) {
    audios[`audio${i}`] = new Audio(`../AR-alphabets/${i}.mp3`);
}

function pressBtn(){
    const num = Number(this.dataset.num);
    alphaButtons[num].classList.add("btn-clicked");
    audios["audio"+num].play();
    setTimeout(()=> {
        alphaButtons[num].classList.remove("btn-clicked");
    },750);
}

