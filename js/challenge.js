// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the minus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.addEventListener('DOMContentLoaded', function() {

    let likes = {}

    let counter = parseInt(document.getElementById("counter").innerText)
    

    let intervalID = window.setInterval(function(){
        counter += 1
        document.getElementById("counter").innerText = counter
    }, 1000);


    function pauseAndResumeToggle() {
        if (pauseBtn.innerText == "pause") {
            clearInterval(intervalID)
            
            document.querySelectorAll("button").forEach((el) => {
                el.id !== "pause" ? el.disabled = true : ''
            });

            pauseBtn.innerText = "resume"

        } else {
            
            pauseBtn.innerText = "pause"
            document.querySelectorAll("button").forEach((el) => {el.disabled = false})
            counter = 0
            intervalID = window.setInterval(function(){
                counter += 1
                document.getElementById("counter").innerText = counter
            }, 1000);
        }
    }

    
    likeBtn = document.getElementById("heart")
    likeBtn.addEventListener("click", addLikeToNumber)
    
    function addLikeToNumber() {
        let numberExists = likes[counter]
        if (!numberExists) {
            likes[counter] = 1
        } else if (numberExists) {
            console.log(likes)
            likes[counter] += 1 
        }
        const li = document.createElement("li")
        li.innerText = `Number ${counter}, has ${likes[counter]} likes.`
        document.querySelector("ul.likes").appendChild(li)
    }



    pauseBtn = document.getElementById("pause")
    pauseBtn.addEventListener("click", pauseAndResumeToggle)

    plustBtn = document.getElementById("plus")
    plustBtn.addEventListener("click", function() {
        counter += 1
        document.getElementById("counter").innerText = counter
        console.log(counter)
    })
    minustBtn = document.getElementById("minus")
    minustBtn.addEventListener("click", function() {
        counter -= 1
        document.getElementById("counter").innerText = counter
        console.log(counter)
    })

})

