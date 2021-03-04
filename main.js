const input1 = document.querySelector("input");
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", addOption);
const cleanBtn = document.querySelector(".clean");
cleanBtn.addEventListener("click", resetOptions);
const showAdviceBtn = document.querySelector(".showAdvice");
showAdviceBtn.addEventListener("click", showAdvice);
const showOptionsBtn = document.querySelector(".showOptions");
showOptionsBtn.addEventListener("click", showOptions);
const messageArea = document.querySelector("div");

const optionsMemory = [];

function addOption(e) {
    e.preventDefault();
    messageArea.textContent = '';
    input1.value ? save() : alert("But what?");
    function save() {
        optionsMemory.push(input1.value);
        alert("I've remembered! :)")
    }
    input1.value = ''
}
function resetOptions(e) {
    e.preventDefault();
    optionsMemory.length = 0;
    alert("Ok! Never mind...")
    messageArea.textContent = '';
}

function showAdvice() {
    messageArea.textContent = ''
    if (optionsMemory != false) {
        let index = Math.floor(Math.random() * optionsMemory.length);
        let advice = document.createElement("div");
        advice.innerText = optionsMemory[index];
        messageArea.appendChild(advice);
    } else {
        messageArea.textContent = "Add option, foolish!";
    }
}
function showOptions() {
    messageArea.innerHTML = '';
    optionsMemory.forEach((element, index) => {
        messageArea.innerHTML += `<h1>${index + 1}. ${element}</h1>`
    })
}
