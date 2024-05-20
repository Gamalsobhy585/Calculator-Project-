document.getElementById("formSix").addEventListener('submit', function(event) {
  event.preventDefault(); 

  let number = document.getElementById("number").value;
  let outputSix = document.getElementById("outputSix");

  number = Number(number);

  switch (number % 2) {
      case 0:
          outputSix.innerHTML = `The number is even.`;
          break;
      case 1:
      case -1: 
          outputSix.innerHTML = `The number is odd.`;
          break;
      default:
          outputSix.innerHTML = `Invalid input.`;
          break;
  }
});

