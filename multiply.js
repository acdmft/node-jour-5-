if (process.argv.length !== 3) {
    console.log("Wrong number of arguments! Must be 1.");
    return;
}

const {multiply, addition} = require("./table-utils");

multiply(parseInt(process.argv[2]));