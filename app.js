const outputDisplay = document.getElementById('outputDisplay')

let output = ''

function display() {
    outputDisplay.innerText = output;
}

function allClear() {
    output = '';
    display(output);}

function entry(int) {
    output += int;
    display(output);
}

function del() {
    console.log("I am deleting something")
}

function calculate() {
}