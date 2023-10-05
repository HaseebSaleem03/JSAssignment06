function square(number) {
    return number * number;
}


var inputNumber = parseFloat(prompt('Enter a number:'));
var result = square(inputNumber);
alert('The square of ' + inputNumber + ' is: ' + result);
