const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

const userName = require('readline-sync');
 candidateName = userName.question("What is your name?   ")
 console.log("Cnadidate Name:  ", candidateName);



}


//Previous 1.1 Requirement - I think something went wrong with part 1 and part 2, resulting my first part getting written over. 

/*function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
const userAnswer = require('readline-sync');
correctAnswer = "Sally Ride";

candidateAnswer = userAnswer.question("Who was the first American woman in space?  ");



if (candidateAnswer === correctAnswer) {
console.log("Correct!")

}else {
console.log("Incorrect")
}
*/


let numberOfAnswers = 5;
let cor = 0;
let incor = 0;

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
const userAnswer = require('readline-sync');
correctAnswer = ["Sally Ride", "True", "40", "Trajectory", "3"];

quizletQ = ["Who was the first American woman in space?  ", "True or False: 5 kilometer === 5000 meters?    ", "(5+3)/2*10 = ?   ", "Given the array [8, 'Orbit', 'Trajectory', 45]  What entry is at index 2?   ", "What is the minimum crew size for the ISS?   "];
let candidateAnswer = [];
for (i = 0; i < correctAnswer.length; i++) {


  userAnswer.question(quizletQ[i])
  //userAnswer[i].push(candidateAnswer[i]);
  
  if (correctAnswer[i] === candidateAnswer[i]) {
console.log("Your Answer is correct!")
let cor = 0;
cor = cor + 1;

}else {
console.log("Incorrect.  You answered,  ", userAnswer[i], "Correct answer is ", correctAnswer[i])

incor = incor +1;

}
 
}








/*if (candidateAnswer === correctAnswer) {
console.log("Correct!")

}else {
console.log("Incorrect")

}

*/

}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  grade = 0;
  
grade = (cor/numberOfAnswers);
  
  
  console.log(">>>OVERALL GRADE:  ", grade,"%", "(", cor, " of ", numberOfAnswers, " responses correct)<<<");

  if (grade > .50) {
    console.log(">>>Status: PASSED<<<")
  }else{
    console.log(">>>Status: FAILED<<<")
  }

  
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};