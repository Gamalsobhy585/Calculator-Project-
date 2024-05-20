document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let firstNumber = parseFloat(document.getElementById('firstNumber').value);
  let secondNumber = parseFloat(document.getElementById('secondNumber').value);
  let operation = document.getElementById('operation').value;
  let resultElement = document.getElementById('result');
  let result;

  switch (operation) {
      case 'add':
          result = firstNumber + secondNumber;
          break;
      case 'subtract':
          result = firstNumber - secondNumber;
          break;
      case 'multiply':
          result = firstNumber * secondNumber;
          break;
      case 'divide':
          if (secondNumber !== 0) {
              result = firstNumber / secondNumber;
          } else {
              result = 'Error: Division by zero';
          }
          break;
      default:
          result = 'Invalid operation';
  }

  resultElement.textContent = `Result: ${result}`;
});

