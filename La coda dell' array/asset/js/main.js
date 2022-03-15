// let containeR = document.getElementById("container");
// let mioArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

// for (i = mioArray.length - 5; i < mioArray.length; i++) {
//     containeR.innerHTML += `<div>${mioArray[i]}</div>`
// }

let userChoice = parseInt(prompt("Qunti elementi deve contenere il tuo array?"));
let exArray = [];
let containeR2 = document.getElementById("container2");

for (i = 0; i < userChoice; i++) {
    exArray.push(Math.floor(Math.random() * 100) + 1)
    containeR2.innerHTML += `<div>${exArray[i]}</div>`
}