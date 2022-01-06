const prompt = require("prompt");
const colors = require("colors");

prompt.start();

let secretWord = ["g","l","o","b","u","s"];

function play() {
    prompt.get({name: "q", description: "Découvrez le mot mystère."}, 
    function(err,res) {
        console.log(res.q);

    });
}
play();
