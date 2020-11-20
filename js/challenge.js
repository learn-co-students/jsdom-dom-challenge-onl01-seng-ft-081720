let count = parseInt(document.querySelector("#counter").innerText);
let paused = false;

document.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(function() { countUp() }, 1000)
});

document.querySelector("#minus").addEventListener("click", () => {
    reduceTimer()
});

document.querySelector("#pause").addEventListener("click", () => {
    paused = !paused
    let buttonValue = document.querySelector("#pause")
    if (buttonValue.innerText == "resume") {
        buttonValue.innerText = "pause"
    } else {
        buttonValue.innerText = "resume"
    }
});

document.querySelector("#plus").addEventListener("click", () => {
    increaseTimer()
});

document.querySelector("#heart").addEventListener("click", () => {
    likeCountNumber()
});

document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault()	
    
    if (paused == false) {
        const commentResults = getInfo(event);

        const htmlComment = commentHtml(commentResults)

        attachComment(htmlComment)
        
        clearForm()
    }
})

const countUp = () => {
    if (paused == false) {
        count += 1;
        document.querySelector("#counter").innerText = count
    }
}

const reduceTimer = () => {
    if (paused == false) {
        count -= 1;
        document.querySelector("#counter").innerText = count
    }
}

const increaseTimer = () => {
    if (paused == false) {
        count += 1;
        document.querySelector("#counter").innerText = count
    }
}

function pluralize(count, noun) { 
    return `${count} ${noun}${count !== 1 ? "s" : ''}.` 
};

const clearForm = () => {
    document.getElementById("comment-input").value = ""
}

function getInfo(event) {
	return {
		comment: event.target.querySelector("#comment-input").value
	}
}

function commentHtml(comment) {
    return `
        <p>${comment.comment}</p>
    `
};

const attachComment = function(comment) {
    document.querySelector("#list").innerHTML += comment
}

function likeCountNumber() {
    if (paused == false) {
        let updated = false;

        if (document.querySelectorAll("li").length == 0) {
            document.querySelector("ul").innerHTML += `<li>${count} has been liked ${pluralize(1, "time")}</li>`
        } else {
            const likes = document.querySelectorAll("li");
            const likesArray = [...likes]; 

            likesArray.forEach(list => {
                let listCount = list.innerHTML.split(" ")[0];
                let likeCount = parseInt(list.innerHTML.split(" ")[4]);

                if (listCount == count) {
                    likeCount += 1;
                    list.innerText = `${listCount} has been liked ${pluralize(likeCount, "time")}`;
                    updated = true;
                } else if (list == likesArray[likesArray.length - 1] && updated == false) {
                    document.querySelector("ul").innerHTML += `<li>${count} has been liked ${pluralize(1, "time")}</li>`
                }
            })
        }
    }
}
