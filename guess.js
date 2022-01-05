const prompt = require("prompt");

prompt.start();

const mysteryNum = Math.floor(Math.random() * 99 + 1);
console.log(mysteryNum);
function play() {
    prompt.get({name: "q", description: "Quel est le nombre mystère ?"}, 
    function(err,res) {
        if (parseInt(res.q) === mysteryNum) {
            console.log("Bravo!");
            } else if (res.q > mysteryNum) {
                console.log("C'est moins!");
                play(); 
            } else {
                console.log("C'est plus!");
                play();
            }      
        });
    }
play();