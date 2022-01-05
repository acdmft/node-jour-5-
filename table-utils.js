function multiply(num) {
    for (let i=1; i<= 10; i++) {
        console.log(num * i);
    }
}

function addition(num) {
    for (let i=1; i<=10; i++) {
        console.log(num + i);
    }
}

module.exports = {multiply, addition};

