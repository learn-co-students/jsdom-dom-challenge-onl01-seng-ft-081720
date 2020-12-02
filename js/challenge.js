
n = document.getElementById("counter");
minus = document.getElementById("minus");
plus = document.getElementById("plus");
heart = document.getElementById("heart");
faveNum = [];
favoriteNums = [];
pause = document.getElementById("pause");
likeList = document.getElementById("likes");
commentList = document.getElementById("list");
comment = document.getElementById("comment-input");
submit = document.getElementById("submit");

function countUp() {
    const nNum = parseInt(n.innerText);    
    n.innerText = nNum + 1;
}

function minusOne() {
    const nNum = parseInt(n.innerText);
    n.innerText = nNum - 1;
}

function liked() {
    let list = document.createElement("li");
    let weLike = 1

    if (favoriteNums.includes(n.innerText)) {


        let textLi = document.createTextNode(n.innerText + " has been liked " + '${weLike++}' + " times" );

    }
    else {
        phrase = (n.innerText + " has been liked " + weLike + " time");
        favoriteNums.push([n.innerText, phrase]);
        textLi = document.createTextNode(phrase);
    }
    list.appendChild(textLi);
    likeList.appendChild(list);
    faveNum.push(n.innerText);
}

let counter = setInterval(countUp, 1000);

minus.addEventListener("click", minusOne);
plus.addEventListener("click", countUp);
heart.addEventListener("click", liked);
submit.addEventListener("click", function commented(event) {
    let paragraph = document.createElement("p");
    let newParagraph = document.createTextNode(comment.value);
    paragraph.appendChild(newParagraph);
    commentList.appendChild(paragraph);
    event.preventDefault();
});

pause.addEventListener("click", function paused(event) {
    if (pause.innerText == "resume") {

        console.log("hello");
        setInterval(countUp, 1000);
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;

        pause.innerText = "pause";

    };
    clearInterval(counter);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    pause.innerText = "resume";
});






