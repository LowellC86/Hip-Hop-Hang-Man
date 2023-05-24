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

