document.getElementById("numberForm").addEventListener('submit', function(event) {
  event.preventDefault();

  let enteredNumber = document.getElementById("numberInput").value;
  let outputNumber = document.getElementById("outputNumber");
  let divisionConfirmation = document.getElementById("divisionConfirmation");

  enteredNumber = Number(enteredNumber);

  if (enteredNumber !== undefined && !isNaN(enteredNumber)) {
      outputNumber.innerHTML = `<h6 class='text-black ms-3 text-center'> Your Entered Number is ${enteredNumber}</h6>`;

      if (enteredNumber % 3 === 0 && enteredNumber % 4 === 0) {
          console.log('yes');
          divisionConfirmation.innerHTML = `<p class='text-black ms-3 text-center h6'>Yes, the number can be divided by 3 and 4</p>`;
      } else {
          console.log('no');
          divisionConfirmation.innerHTML = `<p class='text-black ms-3 text-center h6'>The Number can't be divided by 3 and 4</p>`;
      }
  } else {
      outputNumber.innerHTML = `<h1>Please re-enter a valid number</h1>`;
      divisionConfirmation.innerHTML = `<p></p>`;
  }
});
