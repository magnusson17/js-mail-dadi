let askMail = prompt("Inserisci la tua mail");
let containeR = document.getElementById("container");
let mailList = ["ugo@gmail.com", "gio@gmail.com", "dan@gmail.com"];

for (i = 0; i < mailList.length; i++) {
    if (mailList[i] == askMail) {
        containeR.innerHTML = `Benvenuto ${askMail}`
        console.log(askMail);
    } else if (mailList[i] != askMail) {
        containeR.innerHTML = `Mail non registrata, prova ad usare un'altra mail`
        console.log("no" + askMail);
    }
}