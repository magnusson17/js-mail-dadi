let containeR = document.getElementById("container");
function gamble() {
    let myChoice = Math.floor(Math.random() * 6) + 1;
    let botChoice = Math.floor(Math.random() * 6) + 1;

    if (myChoice > botChoice) {
        containeR.innerHTML = `You win!`
    } else if (myChoice < botChoice) {
        containeR.innerHTML = `You lose!`
    } else {
        containeR.innerHTML = `Tie`
    }
}


