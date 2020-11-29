let counter = document.getElementById("counter").innerText;
let counter_int = parseInt(counter);
let buttons = document.querySelectorAll("button");
let start_clock = window.setInterval(count,1000);

function count() {
    counter_int += 1 ;
    document.getElementById("counter").innerText = counter_int ;
}

document.getElementById("minus").addEventListener("click",() => {
   counter_int -= 1 ;
   document.getElementById("counter").innerText = counter_int ;
})

document.getElementById("plus").addEventListener("click",() => {
    counter_int += 1 ;
    document.getElementById("counter").innerText = counter_int ;
})

document.getElementById("pause").addEventListener("click",() => {

    if (document.getElementById("pause").innerText == "pause") {
        clearInterval(start_clock);
        document.getElementById("pause").innerText = "resume";
        for (let i=0; i < buttons.length ; i++ ) {
            if (buttons[i].id !== 'pause')
                buttons[i].disabled = true;
        }
    } else {
        document.getElementById("pause").innerText = "pause";
        start_clock = window.setInterval(count,1000);
        for (let i=0; i < buttons.length ; i++ ) {
            if (buttons[i].id !== 'pause')
                buttons[i].disabled = false;
        }
    }
})

let clicksCounter = {}
document.getElementById("heart").addEventListener("click", (e) => {
    let currentNumber = document.getElementById("counter").innerText;
    clicksCounter[currentNumber] = (parseInt(clicksCounter[currentNumber]) || 0) + 1;
    if (clicksCounter[currentNumber] == "1"){
        let li = document.createElement("li");
        li.id = `li-${currentNumber}`
        document.querySelector("ul.likes").appendChild(li);
        li.innerHTML = `${currentNumber} has been liked ${clicksCounter[currentNumber]} time`;

    } else {
        document.querySelector(`#li-${currentNumber}`).innerText = `${currentNumber} has been liked ${clicksCounter[document.getElementById("counter").innerText]} times`;
    }
})

document.querySelector("#comment-form").addEventListener("submit",e => {
    e.preventDefault();
    let newComment = document.getElementById("comment-input").value
    console.log(document.getElementsByTagName("div"))
    document.getElementById("list").innerHTML += `${newComment}<br>`
})