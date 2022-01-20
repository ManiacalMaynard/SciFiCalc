const outputDisplay = document.getElementById('outputDisplay')

// Declaring variables for use in display and the math operation
let x = ''
let op = ''
let y = ''
let xory = 0

// Displays the string values for the math operation
function display() {
    console.log(x, op, y, xory)
    outputDisplay.innerText = x + ' ' + op + ' ' + y;
}

// Enters the number from the onclick into x or y based on the xory toggle
function entry(int) {
    if (xory == 0) { x += int }
    if (xory == 1) { y += int }
    display()
}

// Sets operand to correct math symbol, updates OP variable, set xory to 1 (Y setting)
    function operation(input) {
    op = input;
    xory = 1;
    display();
}

// Kinda forgot I put this here, guess this is next TODO lolz
function del() {
    console.log(x.length)
    if (xory == 0) { x = x.substring(0, x.length -1) }
    if (xory == 1) { y = y.substring(0, y.length -1) }
    display()
}

// Returns all variable values to starting state
function allClear() {
    console.log("Burn it all!")
    x = ''
    op = ''
    y = ''
    xory = 0
    display()
}

// Applies the correct calculation according to the operand, retuns the result and assigns it to X for further operations
function calculate() {
    console.log("beep boop here's the final answer.")
    if (op == '+') { x = parseFloat(x) + parseFloat(y) };
    if (op == '-') { x = parseFloat(x) - parseFloat(y) };
    if (op == '*') { x = parseFloat(x) * parseFloat(y) };
    if (op == '/') { x = parseFloat(x) / parseFloat(y) };
    op = ''
    y = ''
    display()
}

// How was this more difficult than expected? Anywhoo, thanks for reading my spaghetti and have a wonderful day!