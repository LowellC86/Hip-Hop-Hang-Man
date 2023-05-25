//psuedo code steps: 

//1. create word list within an array
//2. create function to log keystrokes 
//3. check if letter is already pressed and display guess
//4. compare keystrokes to the word [true/false] 
//5. change the number of guesses left
//6. update dom correct guess or incorrect guess)
//7. check if they have any guesses left 
//if no  - ‘game over’
//8. check if they won - start over

//Questions, Answers, Hints///

// ?What state is De La Soul in? Ans. Buhloone Mindstate. Hint:Third Album



// ?What song is Redman featured in? Ans. Oooh. Hint: Young MA



// ?Why is 3 magical? Ans. The Magic Number. Hint: Pos, Dave, Maseo



// ?What is this famous Native Tngue posse cut? Ans. Buddy. Hint: All in my face


//?What was the single to De La Soul's fourth album? Ans. Stakes Is High Hint: Jay Dee produced it



let songarray = [{question: "What state is De La Soul in?", answer: "Buhloone Mindstate", hint: "Third Album"},{question: "What song is Redman featured on?", answer: "Oooh", hint: "Think Young MA"}, {question: "Why is Three magical?", answer: "The Magic Number", hint: "Pos, Dave, Maseo"}, {question: "What is this famous Native Tongue posse cut?", answer: "Buddy", hint: "All in my face"}, {question: "What was the single to De La Soul's fourth album", answer: "Stakes Is High", hint: "Jay Dee produced it"}]
let questionfinished = false;
let currentquestion = 0;


const startdiv = document.getElementById("startdiv");
const startform = document.getElementById("startform");
const lettersdiv = document.getElementById("letterdiv");
const questiondiv = document.getElementById("question");
const hintbutton = document.getElementById("hintbutton");
const resetbutton = document.getElementById("resetbutton");
const restartdiv = document.getElementById("restartdiv");
const correctword = document.getElementById("correctword");


function findOccurences(answer, letter) {
    let occurrences = [];
    let curindex = answer.indexOf(letter);

    // while loop goes through the answer and finds each index of the letter  
    while (curindex !== -1) {
        occurrences.push(curindex);
        // curindex is reset to the letter that was found in the answer
        curindex = answer.indexOf(letter, curindex + 1);
    }
    return occurrences
}

// listens for click and displays hint
hintbutton.addEventListener("click", () => {
    alert(songarray[currentquestion].hint);
})

//to clear the text I set the style color to black//
resetbutton.addEventListener("click", () => {
    for (let i = 0; i < lettersdiv.children.length; i++) {
        lettersdiv.children[i].style.color = "black";
    }
})

//  5 iterations for each question
// change the question every time answer is filled

songarray[0].answer.split("").forEach((letter) => {
    const letterholder = document.createElement("p");
    letterholder.innerHTML = letter;
    lettersdiv.appendChild(letterholder);
})

   
startform.addEventListener("submit", (event) => {
    // if the submitted letter is in the answer string, then display "Correct", if not, display "Incorrect"
    event.preventDefault();
    const formanswer = document.getElementById("enteredletter").value;
    const livesleft = document.getElementById("lives");
    // check if Buhloon Mindstate has the letter given in answer
    const lowercaseanswer = songarray[currentquestion].answer.toLowerCase();
    const lowercaseformanswer = formanswer.toLowerCase();
    if (lowercaseanswer.includes(lowercaseformanswer)) {
        // someoccurences is an array of the indexes of the letter in the answer
        const someoccurences = findOccurences(lowercaseanswer, lowercaseformanswer);
        
        // loop through and display every found letter in the answer
        someoccurences.forEach((index) => {
            lettersdiv.children[index].style.color = "white";
        })

        // only if all of the children of lettersdiv are white, then the question is finished
        let allwhite = true;
        for (let i = 0; i < lettersdiv.children.length; i++) {
            // if the p tag doesnt hold an empty string, then exclude it from the allwhite variable
            if (lettersdiv.children[i].innerHTML !== " " && lettersdiv.children[i].style.color !== "white") {
                allwhite = false;
            }
        }
        if (allwhite) {
            
                alert("You won!");
                currentquestion++;

                // if the current question is the last question, then the game is over
                if (currentquestion === songarray.length) {
                    alert("Congrats! You completed the game!");
                    return;
                } else {
                    // this will empty the lettersdiv of all the letters and empty questiondiv
                    lettersdiv.innerHTML = "";

                    // change the question to the next question
                    questiondiv.innerHTML = songarray[currentquestion].question;

                    // change the letters in the blank spaces to the new answer
                    songarray[currentquestion].answer.split("").forEach((letter) => {
                        const letterholder = document.createElement("p");
                        letterholder.innerHTML = letter;
                        lettersdiv.appendChild(letterholder);
                    })
                }
            
        }
    } else {
        livesleft.innerHTML = parseInt(livesleft.innerHTML) - 1;
        
            if (parseInt(livesleft.innerHTML) === 0) {
                alert("Game Over");
                livesleft.innerHTML = 5;

            
                
                // insert the answer next to "Correct Word:"
                correctword.innerHTML = songarray[currentquestion].answer;

                // set current question back to the first question
                currentquestion = 0;

               
                
                // this will empty the lettersdiv of all the letters and empty questiondiv
                lettersdiv.innerHTML = "";

                // change the question to the next question
                questiondiv.innerHTML = songarray[currentquestion].question;

                // change the letters in the blank spaces to the new answer
                songarray[currentquestion].answer.split("").forEach((letter) => {
                    const letterholder = document.createElement("p");
                    letterholder.innerHTML = letter;
                    lettersdiv.appendChild(letterholder);
                })
                return;
            } else {
                alert("Incorrect");
            }
       
    }
});

