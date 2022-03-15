let containeR = document.getElementById("container");
let mioArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

for (i = mioArray.length - 5; i < mioArray.length; i++) {
    containeR.innerHTML += `<div>${mioArray[i]}</div>`
}