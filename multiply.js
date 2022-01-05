function multiply(num) {
    if (process.argv.length !== 3) {
        console.log("Wrong number of arguments! Must be 1.");
        return;
    }
    for (let i=1; i <= 10; i++) {
        console.log(num * i);
    }
}
multiply(process.argv[2]);