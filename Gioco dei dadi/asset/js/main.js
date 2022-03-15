let containeR = document.getElementById("container");
let myChoice;
let botChoice;
let container1Img = document.getElementById("container-1-img");
let container2 = document.getElementById("container-2");
let container2Img = document.getElementById("container-2-img");
let container3 = document.getElementById("container-3");
let playAgainBtn = document.getElementById("play-again-btn")

function myGamble() {
    myChoice = Math.floor(Math.random() * 6) + 1;
    container1Img.src = `./asset/img/dado${myChoice}.png`;
    // container1ImgDiv.innerHTML = `<img class="w_100px h_100px" src="./asset/img/dado${myChoice}.png">`;
    container2.classList.remove("v_hidden");
}

function botGamble() {
    botChoice = Math.floor(Math.random() * 6) + 1;
    container2Img.src = `./asset/img/dado${botChoice}.png`;
    if (myChoice > botChoice) {
        container3.innerHTML = `<p class="text_green">You won! <i class="fa-solid fa-face-laugh-squint"></i></p>`;
    } else if (myChoice < botChoice) {
        container3.innerHTML = `<p class="text_red">You lost <i class="fa-solid fa-face-frown"></i></p>`;
    } else {
        container3.innerHTML = `<p class="">It's a tie <i class="fa-solid fa-face-meh"></i></p>`;
    }

    container3.classList.remove("v_hidden");
    playAgainBtn.classList.remove("v_hidden");
}
