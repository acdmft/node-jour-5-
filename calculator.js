function calculate(num1, num2, op) {
    if (op === undefined) {
        return console.log("Error! Wrong number of arguments: (must be 3)!");
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
calculate(process.argv[2], process.argv[3], process.argv[4]);