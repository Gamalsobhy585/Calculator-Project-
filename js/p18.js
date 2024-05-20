document.getElementById("formEighteen").addEventListener('submit', function(event) {
  event.preventDefault();

  let firstNumber = document.getElementById("input1").value;
  let secondNumber = document.getElementById("input2").value;

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  let maxElement = document.getElementById("max");

  switch (true) {
      case firstNumber > secondNumber:
          maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${firstNumber}`;
          break;
      case secondNumber > firstNumber:
          maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${secondNumber}`;
          break;
      case firstNumber === secondNumber:
          maxElement.innerHTML = `Both numbers are equal; there is no maximum.`;
          break;
      default:
          maxElement.innerHTML = `Invalid input.`;
          break;
  }

  console.log('First Number:', firstNumber);
  console.log('Second Number:', secondNumber);
});


