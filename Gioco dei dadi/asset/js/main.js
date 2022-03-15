let containeR = document.getElementById("container");
let myChoice;
let container1ImgDiv = document.getElementById("container-1-img-div");
let container2ImgDiv = document.getElementById("container-2-img-div");

function myGamble() {
    myChoice = Math.floor(Math.random() * 6) + 1;
    container1ImgDiv.innerHTML += `<img src:"../asset/img/dado${myChoice}.png" alt="dado">`
}








//     let botChoice = Math.floor(Math.random() * 6) + 1;

//     if (myChoice > botChoice) {
//         containeR.innerHTML = `You win!`
//     } else if (myChoice < botChoice) {
//         containeR.innerHTML = `You lose!`
//     } else {
//         containeR.innerHTML = `Tie`
//     }
// }
