let seconds = 0
const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('.likes')
const commentForm = document.getElementById('comment-form')
const reset = document.getElementById('reset')

function incrementSeconds() {
    seconds += 1
    counter.innerText = seconds
}

function decrementSeconds() {
    seconds -= 1
    counter.innerText = seconds
}

plus.addEventListener("click", incrementSeconds)

minus.addEventListener("click", decrementSeconds)

heart.addEventListener("click", function(){
    const li = document.createElement('li')
    li.innerText = `You liked this page ${counter.innerText} times.`
    likes.appendChild(li)
})

reset.addEventListener("click", function(){
    seconds = 0
    counter.innerText = seconds
})

pause.addEventListener("click", function(){

})

commentForm.addEventListener("submit", function(a){
    a.preventDefault();
    var b=this.children[0],
        c = b.value;
        b.value="";
    var d=document.querySelector(".comments"),
        e=document.createElement("p");
    e.innerText = c,
    d.appendChild(e)
})


setInterval(incrementSeconds, 1000)
