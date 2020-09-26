const alphaButtons=document.querySelectorAll(".alphabet");

alphaButtons.forEach(button => button.addEventListener("click",pressBtn))

function play(num){
    let audio = document.getElementById("aud"+num);
    audio.play();
    alphaButtons[num].classList.add("btn-clicked");
    setTimeout(()=> {
        alphaButtons[num].classList.remove("btn-clicked");
    },750);
}
