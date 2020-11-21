const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const hThree = document.querySelector('h3')
const comment = document.getElementById('comment-input')
const submit = document.getElementById('submit')
const lister = document.querySelector('ul')
const pause = document.getElementById('pause')

let count = 0

function appendLike () {
    let input = `Someone likes ${count} and they look stupid`
    let node = document.createElement("li")
    let textnode = document.createTextNode(input)
    node.appendChild(textnode)
    return lister.appendChild(node)
}

function appendComment (input) {
    let node = document.createElement("li")
    let textnode = document.createTextNode(input)
    node.appendChild(textnode)
    return hThree.appendChild(node)
}

heart.addEventListener('click', function(e){
    appendLike()
    e.preventDefault()
})

submit.addEventListener('click', function(e){
    appendComment(comment.value)
    comment.value = ""
    e.preventDefault()
})

minus.addEventListener('click', function(){
    count -= 1
    console.log(count)
    counter.innerHTML = count
})

plus.addEventListener('click', function(){
    count += 1
    console.log(count)
    counter.innerHTML = count
})

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

function switchUp() {
    if (pause.innerHTML === ' pause ') {
        return pause.innerHTML = ' resume '
    } else {
        pause.innerHTML = ' pause '
        webPage()
    }
}

pause.addEventListener('click', function(e){
    switchUp() 
    e.preventDefault()
})

async function webPage() {
    while (pause.innerHTML === ' pause ') {
        count += 1
        console.log(count)
        counter.innerHTML = count
        await sleep()
    }
}

document.addEventListener("DOMContentLoaded", webPage());

