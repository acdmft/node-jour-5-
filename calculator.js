function calculate() {
    let args = process.argv;
    if (args.length < 5 || args.length > 5) {
        console.log("Error! Wrong number of arguments: (must be 3)!");
        return;
    }
    let num1 = parseInt(args[2]),
        num2 = parseInt(args[4]),
        op = args[3];
    if (!num1 || !num2) {
        console.log("1st and 3d arguments must be integers!");
        return;
    }
    switch (op) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "x":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "%":
            console.log(num1 % num2);
            break;
        default:
            console.log("Not valid operator, could be '+-x/%'"); 
    }
}
calculate();