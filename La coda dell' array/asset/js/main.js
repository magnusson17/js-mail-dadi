/*esercizio 1, Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array*/
let containeR = document.getElementById("container");
let mioArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

for (i = mioArray.length - 5; i < mioArray.length; i++) {
    containeR.innerHTML += `<div class="d_inline_block p_20px"><p>${mioArray[i]}</p></div>`
}
/*es 2, parte 1, Creiamo un array chiedendo all'utente quanti elementi dovrà contenere
e generando tanti numeri interi casuali quanti sono gli elementi da inserire.*/
let numElAr = document.getElementById("num-el-ar");
let numElArPullOut = document.getElementById("num-el-ar-pull-out");
let exArray = [];
let container2 = document.getElementById("container-2");
let container3 = document.getElementById("container-3");
let container4 = document.getElementById("container-4");

function totArrayElements() {
    container2.innerHTML = `<p>Il tuo array contiene ${numElAr.value} elementi, essi sono:`
    for (i = 0; i < numElAr.value; i++) {
        // gli sto pushando, numElAr.value volte, un numero random tra 1 e 100
        exArray.push(Math.floor(Math.random() * 100) + 1);
        container2.innerHTML += `<li class="py_5px">${exArray[i]}</li>`;
    }

    container3.classList.remove("d_none");
}
/*es 2 parte 2, chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.*/
function dalateTotElements() {
    if (numElArPullOut.value === numElAr.value) {
        container3.innerHTML = `<p>Hai estratto tutti gli elementi dal tuo array.</p>`
    } else if (numElArPullOut.value > numElAr.value) {
        container3.innerHTML = `<p>Hai estratto dal tuo array più elementi di quanti esso ne conteneva.</p>`
    }
    else {
        container3.innerHTML = `<p>Hai estratto gli ultimi ${numElArPullOut.value} elementi dal tuo array, gli elementi ora rimanenti sono:`
    }
    for (i = 0; i < exArray.length - numElArPullOut.value; i++) {
        container3.innerHTML += `<li class="py_5px">${exArray[i]}</li>`;
    }

    container4.classList.remove("d_none");
}