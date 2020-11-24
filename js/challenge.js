let counter_id = document.getElementById('counter');
let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let likeButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');
let list_id = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
let comment_id = document.getElementsByTagName('form')[0]

let counter = 0;

let points = true;

let interval = setInterval(function() {
  if (points){
    counter_id.innerHTML = counter
    counter += 1
  }
}, 1000);

minusButton.addEventListener("click", function() {
  counter -= 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1
})

plusButton.addEventListener("click", function() {
  counter += 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1
})

likeButton.addEventListener("click", function() {
  let like = document.querySelector('.likes')
  if(document.getElementById(`Li${counter}`) == null){
    let li = document.createElement("li");
    li.setAttribute("id", `Li${counter}`)
    li.innerHTML = `${counter} has this many likes:1 `
    like.appendChild(li)
  }
  else {
    let li = document.getElementById(`Li${counter}`)
    let split = parseInt(li.innerHTML.split(":")[1]) + 1
    li.innerHTML = `${counter} has this many likes: ${split}`
    like.appendChild
  }
})

pauseButton.addEventListener("click", function() {
 if (points) {
   pauseButton.innerHTML = "resume"
   points = false
 }
 else {
   pauseButton.innerHTML = "pause"
   points = true
 }
})

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  let comment = document.querySelector('input#comment-input').value
  const commentsList = document.querySelector('.comments')
  const p = document.createElement("p");
  const node = document.createTextNode(comment)
  p.appendChild(node);
  commentsList.appendChild(p);
  document.querySelector('input#comment-input').value = ''
});