//  I have pushed the repository from the system where I did not install node.js 
//  that's why there is required *.json files it runs fine . You can use below link to check
//  https://replit.com/@VishalSindham/Mark01#index.js?embed=1&output=1

var readlineSync = require('readline-sync');

var userName = readlineSync.question("Welcome , BTW who is playing this game .. ?");

var score = 0 ;
var highscores = [
  {
    name:"Vishal",
    score:6,
  },
  {
    name:"Naveen",
    score:3,
  },
]

function play(question,answer){

var userAnswer = readlineSync.question(question);

if (userAnswer === answer) {
  console.log("Correct !");
  score = score +1 ;
}
else {
  console.log('oops .. This is the  answer ', answer);
}
console.log("Current Score is  "+ score);
console.log("-------------------------")
}

var questions =[
    {
      question:"Which of the folllwing is my favourite Sports , Which I take part in ? \n a)swimming  \n b)cricket \n c)football \n ",
      answer:"a", 
    },
    {
    question:"Where do i belong to  ? \n a)Ahmedabad \n b)Surat\n c)Navsari \n ",
    answer:"b", 
    },
    {
      question: "My Favourite music ?\n a)Ghazal \n b)Rock \n c)HipHop \n ",
      answer:"a",
    },
    {
      question: "Which of the following is my favourite cartoon ?  \n a)doraemon \n b)shinchan \n c)Kochikame \n ",
      answer: "c",
    },
    {
      question:"Favourite street food? \n a)vadapav \n b)noodles \n c)burger \n ",
      answer: "a",
    },
        {
      question:"My favourite Geek show ? \n a)silicon valley \n b)suits \n c)breaking bad \n ",
      answer: "a",
    },

  ];

for(var i=0;i<questions.length;i = i+1){
  var currentQuestion= questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log(userName + " You have scored " + score + " out of " + questions.length)

// console.log("The highScore till is of "+ highscores[0].name + " that is " +highscores[0].score + " and second high score is of " + highscores[1].name + " that is " +highscores[1].score + " If you beat them send me screenshot I will update ;)" )
console.log("Below is the high score till now : ");
console.log(highscores[0].name +" :" +highscores[0].score);
// console.log(highscores[0].score);
console.log(highscores[1].name+ " :"+ highscores[1].score);
// console.log(highscores[1].score);
console.log("If you scored higher than them , send me screenshot you should be on scoreboard ;)") ;
console.log('Bye ' + userName ) ;