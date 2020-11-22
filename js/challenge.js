document.addEventListener("DOMContentLoaded", () => {

let counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const submit = document.getElementById("submit");
const pause = document.getElementById("pause");
const buttons = [minus, plus, heart, submit]
let timePaused = false;

let timeRunning = setInterval(increment, 1000)

function increment() {
    if (timePaused == false) {
    counter.innerText++;
    }
}

minus.addEventListener('click', function() {
    counter.innerText--;
})

plus.addEventListener('click', function() {
    counter.innerText++;
})

heart.addEventListener('click', addLike);

function addLike(e) {
  let likes = document.querySelector(".likes")
  let currentTime = counter.innerText
  let li = document.getElementById(currentTime)
  
  if (li) {
      let text = li.innerText
      let textArray = text.split(" ")
      let number = Number(textArray.slice(-2,-1))
      li.innerHTML = `${currentTime} has ${number+1} likes`
  } else {
      let li = document.createElement('li')
      li.setAttribute("id", currentTime)
      likes.appendChild(li);
      li.innerHTML = `${currentTime} has been liked 1 time`
  }
}

pause.addEventListener('click', function() {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume'
        buttons.forEach(function(button) {
            button.disabled = true
        })
        timePaused = true ;
    } else {
        pause.innerText = 'pause'
        buttons.forEach(function(button) {
            button.disabled = false
        })
        timePaused = false
    }
})

submit.addEventListener('click', addComment)

function addComment(e) {
    e.preventDefault();
    let list = document.getElementById('list')
    let comment = document.getElementById('comment-input')
    let paragraph = document.createElement('p')
    paragraph.innerText = `${comment.value}`
    list.appendChild(paragraph)
    comment.value = ""
}
})