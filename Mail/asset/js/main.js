let askMail = prompt("Inserisci la tua mail");
let containeR = document.getElementById("container");
let mailList = ["ugo@gmail.com", "gio@gmail.com", "dan@gmail.com"];
let correctMail = false;

for (i = 0; i < mailList.length; i++) {
    if (mailList[i] == askMail) {
        correctMail = true;
    }
}

if (correctMail == true) {
    containeR.innerHTML = `Benvenuto ${askMail}`
} else {
    containeR.innerHTML = `Mail non registrata, prova ad usare un'altra mail`
}