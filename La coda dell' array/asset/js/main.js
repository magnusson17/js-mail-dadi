let containeR = document.getElementById("container");
let mioArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

for (i = mioArray.length - 5; i < mioArray.length; i++) {
    containeR.innerHTML += `<div class="d_inline_block p_20px"><p>${mioArray[i]}</p></div>`
}

let userChoice = parseInt(prompt("Qunti elementi deve contenere il tuo array?"));
let exArray = [];
let containeR2 = document.getElementById("container2");

if (isNaN(userChoice)) {
    alert("ERRORE, ricaricare la pagina")
} else {
    for (i = 0; i < userChoice; i++) {
        exArray.push(Math.floor(Math.random() * 100) + 1)
        containeR2.innerHTML += `<div>${exArray[i]}</div>`
    }
}

let pullOutArrayElements = parseInt(prompt("Qunti elementi vuoi estrarre dal fondo del array?"));

if (isNaN(pullOutArrayElements)) {
    alert("ERRORE, ricaricare la pagina")
} else {
    for (i = 0; i < exArray.length - pullOutArrayElements; i++) {
        containeR2.innerHTML += `<div>${exArray[i]}</div>`
    }
}