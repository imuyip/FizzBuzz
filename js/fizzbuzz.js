var userInput = Number(prompt("Pick a number between 10 and 100"));
console.log(userInput);
console.log(typeof userInput);
while (isNaN(userInput) || userInput<10 || userInput>100) {
  userInput = Number(prompt("You didn't choose a number between 10 and 100, try again."));
}
document.write('<p>You chose the number ' + userInput + '</p>');
