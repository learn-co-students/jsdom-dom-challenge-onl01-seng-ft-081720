let counter = parseInt(document.getElementById("counter").innerText)
let paused = false
let timer = setInterval(function(){ countUp(); }, 1000)

function countUp() {
    counter += 1
    document.getElementById("counter").innerText = counter
}

function disableButton(buttonName) {
    document.querySelector(buttonName).disabled = true;
}

function enableButton(buttonName) {
    document.querySelector(buttonName).disabled = false;
}

document.getElementById("plus").addEventListener("click", function() {
    counter += 1
    document.getElementById("counter").innerText = counter
}); 

document.getElementById("minus").addEventListener("click", function() {
    counter -= 1
    document.getElementById("counter").innerText = counter
}); 

document.getElementById("heart").addEventListener("click", function() {
    let ul = document.querySelector("ul")
    let newLi = document.createElement("li")
    let likes = 1
    likes += 1
    newLi.appendChild(document.createTextNode(`${counter} has ${likes} like!`)) 
    ul.appendChild(newLi)
});

document.getElementById("pause").addEventListener("click", function() { 
    if (paused == true) {
        paused = false
        timer = setInterval(function(){ countUp(); }, 1000)
        document.getElementById("pause").innerText = "pause"
        enableButton("button#minus")
        enableButton("button#plus")
        enableButton("button#heart")
        enableButton("button#submit")
    }
    else {
        paused = true
        document.getElementById("pause").innerText = "Resume"
        clearInterval(timer)
        disableButton("button#minus")
        disableButton("button#plus")
        disableButton("button#heart")
        disableButton("button#submit")
    }   
});

// Pausing and submitting here.  The lab is expecting far too much for the small number of resources we've been provided

