document.addEventListener("DOMContentLoaded", function(){
    let paused = false
    counterIncrement()
    let numberOfLikes = 0
    const heart = document.getElementById("heart")
    const likes = document.getElementsByClassName("likes")[0]    
    let counter = document.getElementById("counter")
    let likeByNumber = document.getElementById(`${counter.innerText}likes`)
    const counterPlus = document.getElementById("plus")
    const counterMinus = document.getElementById("minus")
    const counterPause = document.getElementById("pause")
    const unorderedList = document.createElement("ul")
    const commentsList = document.getElementById("list")
    commentsList.appendChild(unorderedList)

    function likeTime(){
        if (document.getElementById(`${counter.innerText}likes`) == null){
            numberOfLikes = 1
            let counterLikes = `<li id=${counter.innerText}likes>${counter.innerText} has been liked ${numberOfLikes} times</li>`
            likes.innerHTML += counterLikes
        } else if (document.getElementById(`${counter.innerText}likes`) !== null){
            likeByNumber = document.getElementById(`${counter.innerText}likes`)
            numberOfLikes = parseInt(likeByNumber.innerText.split(" ")[4])
            numberOfLikes++
            likeByNumber.innerHTML = `${counter.innerText} has been liked ${numberOfLikes} times`

        }    
    }

    function counterIncrement() {
        if (!paused){
        nIntervId = setInterval(increaseCounter, 1000);
        }
      }

      function increaseCounter(){
          counter.innerText++
      }

      function pauseCounter() {
            if(!paused){
                paused = true;
                clearInterval(nIntervId);
                counterPause.innerText = "resume"
            }else if (paused){
                paused = false;
                counterPause.innerText = "pause"
                counterIncrement()
            }
      }
    
    heart.addEventListener("click", function(){
        likeTime();
    });

    counterPause.addEventListener("click", function(){
        pauseCounter();
    });

    counterPlus.addEventListener("click", function(){
        counter.innerText++;
    }); 
    
    counterMinus.addEventListener("click", function(){
        counter.innerText--;
    });

    document.getElementById("comment-form").addEventListener("submit", function(event){
        event.preventDefault();

        const input = document.getElementById("comment-input").value
        const lineItem = document.createElement("li")
                 
        const button = document.createElement("button")
        button.innerHTML = "Delete";
        button.onclick = () => {
            button.parentNode.remove();
        } 

        lineItem.textContent = `${input} `
        lineItem.appendChild(button)
        unorderedList.appendChild(lineItem)      
    }); 


});

