// var userInput = Number(prompt("Pick a number between 10 and 100"));
// console.log(userInput);
// console.log(typeof userInput);
// while (isNaN(userInput) || userInput<10 || userInput>100) {
//   userInput = Number(prompt("You didn't choose a number between 10 and 100, try again."));
// }
// document.write('<p>You chose the number ' + userInput + '</p>');

function writeP(text, className){
    document.write('<p class="' + className + '">' + text + "</p>");
}

var userInput = 100
var counter = 1;

writeP("You chose: " + userInput, 'choice');
while (counter<=userInput) {
  if (counter%3===0 && counter%5===0) {
    writeP("FizzBuzz", "fizzbuzz");
  }
  else if (counter%3 ===0) {
    writeP("Fizz", "fizz");
  }
  else if (counter%5===0){
    writeP("Buzz", "buzz");
  }
  else {
    writeP(counter);
  }
  counter = counter +=1;
}
