//psuedo code steps: 

//1. create word list within an array
//2. create function to log keystrokes 
//3. check if letter is already pressed and display guess
//4. compare keystrokes to the word [true/false] 
//5. change the number of guesses left
//6. update dom correct guess or incorrect guess)
//7. check if they have any guesses left 
//if no  - ‘game over’
//8. check if they won - start over and start over

//questions 

// What state is De La Soul in

//Buhloone Mindstate

// what song is Redman featured in

//Oooh

//Why is 3 magical

// the magic number

// what is this famous Native Tngue posse cut

//Buddy

//What was the single to De La Soul's fourth album

//Stakes is High


let songarray = [{question: "What state is De La Soul in?", answer: "Buhloone Mindstate", hint: "Third Album"},{question: "What song is Redman featured on?", answer: "Oooh", hint: "Think Young MA"}, {question: "Why is Three magical?", answer: "The Magic Number", hint: "Pos, Dave, Maseo"}, {question: "What is this famous Native Tngue posse cut?", answer: "Buddy", hint: "All in my face"}, {question: "What was the single to De La Soul's fourth album", answer: "Stakes Is High", hint: "Jay Dee produced it"}]
let questionfinished = false;
let currentquestion = 0;

const startbutton = document.getElementById("startbutton");
const startdiv = document.getElementById("startdiv");
const startform = document.getElementById("startform");
const lettersdiv = document.getElementById("letterdiv");

startbutton.addEventListener("click", () => {
    startbutton.style.display = "none";
    startdiv.style.display = "flex";
    startdiv.style.flexDirection = "column";
    startdiv.style.justifyContent = "center";
    startdiv.style.alignItems = "center";
});

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
        // some occurences is an array of the indexes of the letter in the answer
        const someoccurences = findOccurences
        (lowercaseanswer, lowercaseformanswer);

        //loop through and display every found letter in the answer//
        someoccurences.forEach((index) => {
            lettersdiv.children[index].style.color = "white";

        })
    }
    }