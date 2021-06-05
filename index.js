const quiz = require('./candidate-testing');

const userName = require('readline-sync');
 let candidateName = userName.question("What is your name?   ")
 console.log("Hello ", candidateName);

const userAnswer = require('readline-sync');
let correctAnswer = "Sally Ride";

let candidateAnswer = userAnswer.question("Who was the first American woman in space?  ");



if (candidateAnswer === correctAnswer) {
console.log("Correct!")

}else {
console.log("Incorrect")
}

quiz.runProgram();