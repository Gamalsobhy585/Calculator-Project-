document.getElementById("formThirteen").addEventListener('submit', function(event) {
  event.preventDefault(); 
  let subjectOne = document.getElementById("subjectOne").value;
  let subjectTwo = document.getElementById("subjectTwo").value;
  let subjectThree = document.getElementById("subjectThree").value;
  let subjectFour = document.getElementById("subjectFour").value;
  let subjectFive = document.getElementById("subjectFive").value;
  let outputThirteen = document.getElementById("outputThirteen");
  let total = Number(subjectOne) + Number(subjectTwo) + Number(subjectThree) + Number(subjectFour) + Number(subjectFive);
  let average = total / 5;
  let percentage = (total / (5 * 100)) * 100;

outputThirteen.innerHTML += `  the Total is ${total} and average is ${average} and the percentage is ${percentage.toFixed(1)} % `;
 });
