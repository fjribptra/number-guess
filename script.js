const maxNumber = prompt("Enter the maximum number : ");
console.log({ maxNumber });

const randomNumber = Math.floor(Math.random() * maxNumber);
console.log({ randomNumber });

while (maxNumber) {
  const userInput = prompt("Please input answer. what is number ? : ");

  if (userInput) {
    const isIncorrect = validation(userInput, randomNumber);
    if (isIncorrect) {
      continue;
    } else {
      break;
    }
  }
}

function validation(userInput, randomNumber) {
  if (userInput == randomNumber) {
    alert("Congratulations your answer is correct 🤩🎉");
    return false;
  } else if (userInput > randomNumber) {
    alert("Your answer is more than the random number ⏫");
    return true;
  } else if (userInput < randomNumber) {
    alert("Your answer is less than the random number ⏬");
    return true;
  }
}
