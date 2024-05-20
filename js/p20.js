document.getElementById("formFour").addEventListener('submit', function(event) {
  event.preventDefault();

  let myInteger = document.getElementById("integer").value;
  let outputFour = document.getElementById("outputFour");
  myInteger = Number(myInteger);

  switch (true) {
      case (myInteger < 0):
          console.log('negative value');
          outputFour.innerHTML = `This is a negative value`;
          break;
      case (myInteger === 0):
          console.log('zero value');
          outputFour.innerHTML = `This is a zero value`;
          break;
      case (myInteger > 0):
          console.log('positive value');
          outputFour.innerHTML = `This is a positive value`;
          break;
      default:
          console.log('invalid value');
          outputFour.innerHTML = `Invalid input`;
          break;
  }
});
