document.getElementById("formSixteen").addEventListener('submit', function(event) {
  event.preventDefault(); 
  let monthInput = document.getElementById("monthInput").value;
  let outputSixteen = document.getElementById("outputSixteen");

  switch (monthInput.toLowerCase()) {
      case "january":
      case "march":
      case "may":
      case "july":
      case "august":
      case "october":
      case "december":
outputSixteen.innerHTML =`31 days`
console.log('31days');
          break;
      case "april":
      case "june":
      case "september":
      case "november":
        outputSixteen.innerHTML =`30 days`
        break;
      case "february":
        outputSixteen.innerHTML =`29 days`
        break;
     
  }
});

