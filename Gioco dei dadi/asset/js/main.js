let containeR = document.getElementById("container");
let myChoice;
let botChoice;
let container1ImgDiv = document.getElementById("container-1-img-div");
let container2 = document.getElementById("container-2");
let container2ImgDiv = document.getElementById("container-2-img-div");
let container3 = document.getElementById("container-3");

function myGamble() {
    myChoice = Math.floor(Math.random() * 6) + 1;
    container1ImgDiv.innerHTML = `<img class="w_100px h_100px" src="./asset/img/dado${myChoice}.png">`;
    container2.classList.remove("v_hidden");
}

function botGamble() {
    botChoice = Math.floor(Math.random() * 6) + 1;
    container2ImgDiv.innerHTML = `<img class="w_100px h_100px" src="./asset/img/dado${botChoice}.png">`;
    if (myChoice > botChoice) {
        container3.innerHTML = `<p>You won!</p>`;
    } else if (myChoice < botChoice) {
        container3.innerHTML = `<p>You lost</p>`;
    } else {
        container3.innerHTML = `<p>It's a tie</p>`;
    }
}
