document.getElementById("formTwelve").addEventListener('submit', function(event) {
  event.preventDefault(); 
  let inputOne = document.getElementById("inputOne").value;
  let inputTwo = document.getElementById("inputTwo").value;
  let outputTwelve = document.getElementById("outputTwelve");

outputTwelve.innerHTML += `  the result is ${inputOne ** inputTwo} `;
 });