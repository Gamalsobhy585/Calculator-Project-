  document.getElementById("formSix").addEventListener('submit', function(event) {
  event.preventDefault(); 
  let number = document.getElementById("number").value;
  let outputSix = document.getElementById("outputSix");
number = Number(number);
if (number %2 ==0) {
  outputSix.innerHTML = `The Number is Even `;
  return;
}
else{
  outputSix.innerHTML = ` The Number is Odd `;

}
});
