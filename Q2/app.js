function greetUser(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    var greeting = 'Hello, ' + fullName + '! Welcome!';
    return greeting;
}

var firstName = prompt('Enter your first name:');
var lastName = prompt('Enter your last name:');

var greetingMessage = greetUser(firstName, lastName);
alert(greetingMessage);
