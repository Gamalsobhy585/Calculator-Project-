
console.log('my number');
document.getElementById("formFour").addEventListener('submit', function(event) {
  event.preventDefault();   
  let myInteger = document.getElementById("integer");
  let outputFour = document.getElementById("outputFour");
  if (myInteger.value < 0) {
      console.log('negative value');
      outputFour.innerHTML = `This is a negative value`;
  } else if (myInteger.value == 0) {
      console.log('zero value');
      outputFour.innerHTML = `This is a zero value`;
  } else if (myInteger.value > 0) {
      console.log('positive value');
      outputFour.innerHTML = `This is a positive value`;
  }
});


