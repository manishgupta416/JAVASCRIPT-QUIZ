var readlineSync = require('readline-sync')

var score = 0

var highScores = [
  {
    name:"Tanay Pratap",
    score:10,
  },
   {
    name:"Manish Gupta",
    score:7,
  },
{
    name:"Abhijeet Gupta",
    score:3,
  },
]

var questionsList = [
  {
   question:"Q1.Inside which HTML element do we put the JavaScript? \na.<scripting> \nb.<javascript> \nc.<js> \nd.<script>\nEnter your answer : " ,
    answer:"d",
  },
  {
    question:"Q2.Where is the correct place to insert a JavaScript?\na.The <body> section \nb.Both the <head> section and the <body> section are correct \nc.The <head> section\nEnter your answer : ",
    answer:"b",
  },
  {
    question:"Q3.What is the correct syntax for referring to an external script called 'xxx.js'?\na.<script src='xxx.js'> \nb.<script name='xxx.js'> \nc.<script href='xxx.js'>\nEnter your answer : ",
    answer:"a"
  },
  {
   question:"Q4.The external JavaScript file must contain the <script> tag.\na.True \nb. false\nEnter your answer : ",
    answer:"b",
  },
  {
   question:"Q5.How do you create a function in JavaScript?\n a.function:myFunction() \nb.function myFunction() \nc.function = myFunction()\nEnter your answer : ",
   answer:"b",
  },
  {
   question:"Q6.How can you add a comment in a JavaScript?\na.//This is a comment \nb.'This is a comment \nc.<!--This is a comment-->\nEnter your answer : ",
    answer:"a",
  },
  {
    question:"Q7.JavaScript is the same as Java.\na.True \nb.False\n \nEnter your answer : ",
    answer:"b",
  },
  {
    question:"Q8.How do you declare a JavaScript variable?\na.variable carName; \nb.var carName; \nc.v carName;\nEnter your answer : ",
    answer:"b",
  },
  {
    question:"Q9.Which operator is used to assign a value to a variable?\na.- \nb.x \nc.* \nd.=\nEnter your answer : ",
    answer:"d",
 },
  {
   question:"Q10.Is JavaScript case-sensitive?\na.No \nb.Yes\nEnter your answer : ",
    answer:"b",
  },
  {
    question:"Q11.Which built-in method returns the calling string value converted to upper case?\na.toUpperCase() \nb.toUpper() \nc.changeCase(case)\nEnter your answer : ",
  answer:"a"
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("Yes You are right")
    score= score + 1
   
  } else{
    console.log("Oops You are wrong")
    score = score - 1;
    
  }
  console.log("Current Score : " + score)
  console.log("__________________________\n")
}


for(var i =0 ; i<questionsList.length ; i++){
  var currentQuestion = questionsList[i].question
  var currentAnswer = questionsList[i].answer
  play(currentQuestion,currentAnswer)
}

console.log("You Scored : " + score) 

for(var i =0 ; i<highScores.length ; i++) {
  var currentHighScoreName = highScores[i].name;
  var currentHighScore = highScores[i].score;

  if(currentHighScore < score) {
    console.log("Congratulations you have beaten " + currentHighScoreName +  "  Send me a screenshot to update in my records.")
  }
}