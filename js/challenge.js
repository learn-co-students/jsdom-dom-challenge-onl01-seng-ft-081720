let timer;
let isActive = true;

const counter = document.querySelector("#counter");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const comments = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");

document.addEventListener("DOMContentLoaded", startTimer);
plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", addLike);
pause.addEventListener("click", pauseOrResume)
commentForm.addEventListener("submit", displayComment);

function startTimer() {
    timer = setInterval(incrementCounter, 1000);
}

function incrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    counter.textContent = `${currentCount + 1}`;
}

function decrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    if (currentCount > 0 ){
        counter.textContent = `${currentCount - 1}`;
    }
}

function addLike() {
    const currentCount = parseInt(counter.textContent, 10);

    const previousLikes = Array.from( likes.children );
    const previousLike = previousLikes.find(previousLike => {
        const previousLikeCount = parseInt(previousLike.textContent.split(" ")[0], 10);
        return previousLikeCount === currentCount;
    })

    if (previousLike) {
        // const numberOfHearts = parseInt(previousLike.textContent.slice(-6, -5), 10);
        const previousHeartsText = previousLike.textContent.split(" ").slice(-2)[0];
        const numberOfHearts = parseInt(previousHeartsText, 10);
        previousLike.textContent = `${currentCount} has been liked ${numberOfHearts + 1} times`;
    } else {
        const newLike = document.createElement("li");
        newLike.textContent = `${currentCount} has been liked 1 time`;
        likes.append(newLike);
    }
}

function pauseOrResume() {
    const buttons = Array.from(document.querySelectorAll("button"));
    const notPauseButton = buttons.filter(button => button.id != "pause");

    if (isActive) {
        clearInterval(timer);
        pause.textContent = "resume";
        notPauseButton.forEach(button => button.disabled = true);
        isActive = false;
    } else {
        startTimer();
        pause.textContent = "pause";
        notPauseButton.forEach(button => button.disabled = false);
        isActive = true;
    }
}

function displayComment(event) {
    event.preventDefault();
    const commentFormData = new FormData(event.target);
    const commentText = commentFormData.get("comment");

    const comment = document.createElement("p");
    comment.textContent = commentText;
    comments.append(comment);

    event.target.reset();
}