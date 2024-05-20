document.getElementById("formFive").addEventListener('submit', function(event) {
  event.preventDefault(); 
  let num1 = document.getElementById("integerOne").value;
  let num2 = document.getElementById("integerTwo").value;
  let num3 = document.getElementById("integerThree").value;
  let outputFive = document.getElementById("outputFive");
  if (num1 === "" || num2 === "" || num3 === "") {
    outputFive.innerHTML = `<span class="error">Please enter all three integers.</span>`;
    return;
}
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3); 
if (num1 === num2 && num2 === num3) {
  outputFive.innerHTML = `No Max or Min`;
  return;
}
else  if (num1 >= num2 && num1 >= num3) {
  console.log(num1,num2,num3);
    if(num2>=num3){
      outputFive.innerHTML = `${num1} is the Max and ${num3} is the Min`;
    }
    else if(num3>=num2){
      outputFive.innerHTML = `${num1} is the Max and ${num2} is the Min`;
    }   
  } 

 else if (num2 >= num1 && num2 >= num3) {
  console.log(num1,num2,num3);
    if(num3>=num1){
      outputFive.innerHTML = `${num2} is the Max and ${num1} is the Min`;
    }
    else if(num1>=num3){
      outputFive.innerHTML = `${num2} is the Max and ${num3} is the Min`;
    }
  } 

 else if (num3 >= num2 && num3 >= num1) {
  console.log(num1,num2,num3);
    if(num2>=num1){
      outputFive.innerHTML = `${num3} is the Max and ${num1} is the Min`;
    }
    else if(num1>=num2){
      outputFive.innerHTML = `${num3} is the Max and ${num2} is the Min`;
    }
  } 
});
