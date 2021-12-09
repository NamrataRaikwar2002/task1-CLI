var user=require("readline-sync");
const chalk = require("chalk");
var name=user.question(chalk.red("what's your name? "));
console.log(chalk.blue("welcome "+name+" Do you know Namrata? "));
var score=0;
var totalscore=10

function game(question,answer){
            var q=user.question(chalk.black(question))
            if (q.toUpperCase()===answer.toUpperCase()){
                    score=score+2;
                    console.log(" Great! your score is",score+".");
            }
            else{
                console.log("wrong!!");
            
            }
        }
 
var ques=[{question:"where is she from?",answer:"Delhi"},{question:"what is she doing nowadays?",answer:"Coding course"},{question:"what is her  age?",answer:"19"},{question:"what is her favourite colour?",answer:"Black"},{question:"Do she a NAVODAYAN?",answer:"yes"}]

for (i of ques){
    game(i.question,i.answer)
}
if (score>=10){
    console.log(chalk.green("wow!you know all about Namrata!"))
}
if (score==0){
    console.log("Game over! your score is",score )
}

else{
    console.log(chalk.red("game over!"))

}
var highScore=[{name:"Bhoomi",gameScore:'8'},{name:"Neetu",gameScore:"6"}]

for(var a of highScore){
    console.log(a.name+"'s score is", a.gameScore);

}
console.log(chalk.cyan("if you have beaten the score send me screenshot"))