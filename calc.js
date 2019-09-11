
function numbers(operation) {

    var userInput1 = ''
    var userInput2 = ''
    var output = 0;
    
    userInput1 = prompt('First Number');
    while (userInput1 === '' || isNaN(userInput1)) {
        if (userInput1 === '' ) {
            userInput1 = prompt('Enter your first number.');
        }
        if (isNaN(userInput1)) {
            userInput1 = prompt('Invalid first value. Enter a valid number.');
        }
    }
    userInput2 = prompt('Second Number');
    while (userInput2 === '' || isNaN(userInput2)) {
        if (userInput2 === '' ) {
            userInput2 = prompt('Enter your second number.');
        }
        if (isNaN(userInput2)) {
            userInput2 = prompt('Invalid second value. Enter a valid number.');
        }
    }
    
    userInput1 = Number(userInput1)
    userInput2 = Number(userInput2)
    switch(operation) {
        case "add":
            output = userInput1 + userInput2;
            alert((userInput1 + " + " + userInput2 + " = " + output));
            break;
        case "subtract":
            output = userInput1 - userInput2;
            
            alert((userInput1 + " - " + userInput2 + " = " + output));
            break;			
        case "multiply":
            output = userInput1 * userInput2;
            
            alert((userInput1 + " * " + userInput2 + " = " + output));
            break;
        case "divide":
            output = userInput1 / userInput2;
            
            alert((userInput1 + " / " + userInput2 + " = " + output));
            break;
        default:
            alert(("Uh oh, something went wrong! Variable dump:\nOperator: " + operation + "\nFirst operands: " + userInput1 + "\nSecond operand: " + userInput2 + ""));
    }
};
