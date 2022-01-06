const prompt = require("prompt");

prompt.start();

const mysteryNum = Math.floor(Math.random() * 99 + 1);

function play() {
    prompt.get(
        {name: "usersNum", description: "Quel est le nombre mystère ?"}, 

        function(err,res) {
            let userNum = parseInt(res.usersNum);
            if (isNaN(userNum)) { 
                console.log("It should be number!");
                return play();
            }

            if (userNum === mysteryNum) {
                return console.log("Bravo!");
            } else if (userNum > mysteryNum) {
                console.log("C'est moins!"); 
            } else {
                console.log("C'est plus!");
            }
            play();      
        }
    );
}
play();