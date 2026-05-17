const sumbitA = document.getElementById("submitA");
const textInputA = document.getElementById("questionA");
const questionsA = document.getElementById("questionsA");

const sumbitB = document.getElementById("submitB");
const textInputB = document.getElementById("questionB");
const questionsB = document.getElementById("questionsB");

var turn = 0;

function askQuestion(event){
    let question = document.createElement("h4");
    let player = event.target.className;
    if(player == "inputA" && turn%4 == 0){
        question.textContent = textInputA.value;
        textInputA.value = "";
        questionsA.appendChild(question);
        turn++;
    }

    else if(player == "inputB" && turn%4 == 2){
        question.textContent = textInputB.value;
        questionsB.appendChild(question);
        textInputB.value = "";
        turn++;
    }
    console.log(player);
}

function enterQuestion(event){
    console.log(event);
    let key = event.key;
    if(key == "Enter"){
        askQuestion(event);
    }
}

function sendResponse(event){
    let responder = event.target.classList[0];
    let response = event.target.classList[1];
    console.log(responder+response);
    if(responder == "inputA" && turn%4 == 3){
        switch(response){
            case "yes": questionsB.lastChild.style.backgroundColor = "green"; break;
            case "no": questionsB.lastChild.style.backgroundColor = "red"; break;
            case "correct": questionsB.lastChild.style.backgroundColor = "yellow"; break;
        }
        turn++;
    }
    else if(responder == "inputB" && turn%4 == 1){
        switch(response){
            case "yes": questionsA.lastChild.style.backgroundColor = "green"; break;
            case "no": questionsA.lastChild.style.backgroundColor = "red"; break;
            case "correct": questionsA.lastChild.style.backgroundColor = "yellow"; break;
        }
        turn++;
    }
}

const elements = document.querySelectorAll('.respond');

// Loop through each element and add the listener
elements.forEach(element => {
  element.addEventListener('click', sendResponse);
});

textInputA.addEventListener("keydown", enterQuestion);
textInputB.addEventListener("keydown", enterQuestion);
var thingA = "";
var thingB = "";

