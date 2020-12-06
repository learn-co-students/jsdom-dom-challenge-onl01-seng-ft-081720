const counter = document.getElementById('counter') ;
const minus = document.getElementById('minus') ; 
const plus = document.getElementById('plus') ;
const heart = document.getElementById('heart') ;
const pause = document.getElementById('pause') ;
const likes = document.getElementById('likes') ;
const hTag = document.querySelector('h3') ;
const list = document.querySelector('ul') ; 
const comment = document.getElementById('comment-input') ;
const submit = document.getElementById('submit') ;

let count = 0 ;

function appendLike() {
    let input = `Someone likes ${count}, Hurray!`
    let node = document.createElement("li");
    let textnode = document.createTextNode(input);
    node.appendChild(textnode);
    return list.appendChild(node);
};

function appendComment(input) {
    let node = document.createElement("li")
    let textnode = document.createTextNode(input)
    node.appendChild(textnode)
    return hTag.appendChild(node)
};

heart.addEventListener('click', function(e) {
    appendLike();
    e.preventDefault();
});

submit.addEventListener('click', function(e) {
    appendComment(comment.value)
    comment.value = ""
    e.preventDefault()
})

minus.addEventListener('click', function() {
    count -= 1
    console.log(count)
    counter.innerHTML = count
})

plus.addEventListener('click', function() {
    count += 1
    console.log(count)
    counter.innerHTML = count
})

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

function resumePause() {
    if (pause.innerHTML === 'pause')  {
        return pause.innerHTML = 'resume' 
    } else {
        pause.innerHTML = 'pause'
        webPage()
    }
}

pause.addEventListener('click', function(e) {
    resumePause()
    e.preventDefault()
})

async function webPage() {
    while (pause.innerHTML === 'pause') {
        count += 1
        console.log(count)
        counter.innerHTML = count
        await sleep()
    }
}

document.addEventListener('DOMContentLoaded', webPage())