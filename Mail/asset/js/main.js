let askMail = prompt("Inserisci la tua mail");
let containeR = document.getElementById("container");
let mailList = ["ugo@gmail.com", "gio@gmail.com", "dan@gmail.com"];

for (i = 0; i < mailList.length; i++) {
    if (askMail == mailList[i]) {
        containeR.innerHTML = `Benvenuto ${askMail}`
    } else if (askMail != mailList[i]) {
        containeR.innerHTML = `Mail non registrata, prova ad usare un'altra mail`
    }
}