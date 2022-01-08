const prompt = require("prompt");
const colors = require("colors");

prompt.start();

let secretWord = "panno";

function highlightLetters(tW, gW) {
    let testWord = tW.split('');
    let guessWord = gW.split('');
    let highlightedRed = [];
    let highlightYellow = [];
    guessWord.forEach((el,i)=>{
        if (testWord[i] === el) {
            guessWord[i] = `${guessWord[i].bgRed} `;
            highlightedRed.push(i);
        } else {
            highlightYellow.push(i);
        }
    });
    highlightedRed.reverse().forEach(i=>{testWord.splice(i,1)});
    highlightYellow.forEach((i)=>{
        if (testWord.indexOf(guessWord[i]) >= 0) {
            guessWord[i] = `${guessWord[i].bgYellow} `;
            testWord.splice(i,1);
        } else {
            guessWord[i] = `${guessWord[i]} `;
        } 
    });
    return guessWord.join('');
}
let numOfAttempts = 0;
function play(sW) {
        console.log("Découvrez le mot mystère,qui commence avec ", sW[0]);
        prompt.get({name: "guess", description: "Devinez le mot !"}, 
        function(err,res) {
            if (res.guess.length !== 5 || numOfAttempts > 5) {
                return console.log("Vous avez perdu!");
            }
            console.log("La première lettre est:", sW[0]);
            let guess = highlightLetters(sW, res.guess);
            console.log(guess);
            if (res.guess === sW) {
                return console.log("Bravo!");
            } else {
                console.log("Dommage...");
                numOfAttempts++;
                play(sW);
            }
        });
}

play(secretWord);