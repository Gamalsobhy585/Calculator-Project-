
// 1-- Write a program that allow to user enter number then printit

// let  enteredNumber;
// Swal.fire({
//     title: 'Enter a Number',
//     input: 'number',
//     showCancelButton: true,
//     confirmButtonText: 'Submit',
//     showLoaderOnConfirm: true,
//     preConfirm: (number) => {
//       if (!number || isNaN(number)) {
//         Swal.showValidationMessage('Please enter a valid number');
//       }
//     },
//     allowOutsideClick: () => !Swal.isLoading()
//   }).then((result) => {
//     if (result.isConfirmed) {
//        enteredNumber = result.value;
//       return result.value 

//     }
//     }).then((result) => {
//         let  outputNumber=document.getElementById("outputNumber");
//         let  divisionConfirmation=document.getElementById("divisionConfirmation");
    
//         if(enteredNumber !== undefined && enteredNumber !== null) {
//             outputNumber.innerHTML = `<h1>Your Entered Number is ${enteredNumber}</h1>`;   








//     // 2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

//             if(enteredNumber % 3 === 0 && enteredNumber % 4 === 0 ){
//                 console.log('yes');
//                 divisionConfirmation.innerHTML = `<p class='text-success h6'>Yes, the number can be divided by 3 and 4</p>`;
//             }
//             else {
//                 console.log('no');
//                 divisionConfirmation.innerHTML = `<p class='text-dark h6 '>The Number can't be divided by 3 and 4</p>`;
//             }
//         } else {
//             outputNumber.innerHTML = `<h1>Please re-enter a valid number</h1>`;
//             divisionConfirmation.innerHTML = `<p></p>`;
//         }
//     });













///3-
// document.getElementById("formThree").addEventListener('submit', function(event) {
//   event.preventDefault();

//   let firstNumber = document.getElementById("input1").value;
//   let secondNumber = document.getElementById("input2").value;

//   firstNumber = Number(firstNumber);
//   secondNumber = Number(secondNumber);

//   let maxElement = document.getElementById("max");
  
//   if (firstNumber > secondNumber) {
//       maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${firstNumber}`;
//   } else if (secondNumber > firstNumber) {
//       maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${secondNumber}`;
//   } else {
//       maxElement.innerHTML = `Both numbers are equal; there is no maximum.`;
//   }

//   console.log('First Number:', firstNumber);
//   console.log('Second Number:', secondNumber);
// });










// 4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.


// console.log('my number');
// document.getElementById("formFour").addEventListener('submit', function(event) {
//   event.preventDefault();   
//   let myInteger = document.getElementById("integer");
//   let outputFour = document.getElementById("outputFour");
//   if (myInteger.value < 0) {
//       console.log('negative value');
//       outputFour.innerHTML = `This is a negative value`;
//   } else if (myInteger.value == 0) {
//       console.log('zero value');
//       outputFour.innerHTML = `This is a zero value`;
//   } else if (myInteger.value > 0) {
//       console.log('positive value');
//       outputFour.innerHTML = `This is a positive value`;
//   }
// });










//5- Write a program that take 3 integers from user then print the max elementand the min element.

// document.getElementById("formFive").addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   let num1 = document.getElementById("integerOne").value;
//   let num2 = document.getElementById("integerTwo").value;
//   let num3 = document.getElementById("integerThree").value;
//   let outputFive = document.getElementById("outputFive");
//   if (num1 === "" || num2 === "" || num3 === "") {
//     outputFive.innerHTML = `<span class="error">Please enter all three integers.</span>`;
//     return;
// }
// num1 = Number(num1);
// num2 = Number(num2);
// num3 = Number(num3); 
// if (num1 === num2 && num2 === num3) {
//   outputFive.innerHTML = `No Max or Min`;
//   return;
// }
// else  if (num1 >= num2 && num1 >= num3) {
//   console.log(num1,num2,num3);
//     if(num2>=num3){
//       outputFive.innerHTML = `${num1} is the Max and ${num3} is the Min`;
//     }
//     else if(num3>=num2){
//       outputFive.innerHTML = `${num1} is the Max and ${num2} is the Min`;
//     }   
//   } 

//  else if (num2 >= num1 && num2 >= num3) {
//   console.log(num1,num2,num3);
//     if(num3>=num1){
//       outputFive.innerHTML = `${num2} is the Max and ${num1} is the Min`;
//     }
//     else if(num1>=num3){
//       outputFive.innerHTML = `${num2} is the Max and ${num3} is the Min`;
//     }
//   } 

//  else if (num3 >= num2 && num3 >= num1) {
//   console.log(num1,num2,num3);
//     if(num2>=num1){
//       outputFive.innerHTML = `${num3} is the Max and ${num1} is the Min`;
//     }
//     else if(num1>=num2){
//       outputFive.innerHTML = `${num3} is the Max and ${num2} is the Min`;
//     }
//   } 
// });





















    

//6- Write a program that allows the user to insert integer number then check If a number is oven or odd
//   document.getElementById("formSix").addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   let number = document.getElementById("number").value;
//   let outputSix = document.getElementById("outputSix");
// number = Number(number);
// if (number %2 ==0) {
//   outputSix.innerHTML = `The Number is Even `;
//   return;
// }
// else{
//   outputSix.innerHTML = ` The Number is Odd `;

// }
// });


















//8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
  
// document.getElementById("formEight").addEventListener('submit', function(event) {
//     event.preventDefault(); 
    
//     let stringEight = document.getElementById("stringEight").value;
//     stringEight =String(stringEight).toLowerCase();
    
//     let outputEight = document.getElementById("outputEight");
//     ;
 
//     const vowels = ['a','e','i','o','u']
//     if (vowels.includes(stringEight)) {
//       outputEight.innerHTML = `${stringEight} is a vowel`;
//   } 
//   else {
//     outputEight.innerHTML = `${stringEight} is a consonant`;

//   }
  // });





























//9-Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number

// document.getElementById("formNine").addEventListener('submit', function(event) {
//       event.preventDefault(); 
//       let inputNine = document.getElementById("inputNine").value;
//       let outputNine = document.getElementById("outputNine");
//       outputNine.innerHTML="";
//       for(i=1;i<=inputNine;i++){
//         console.log(i);
//         outputNine.innerHTML += `${i}   `;

//       }
//    });
  



























//10-Write a program that allows userto insert integerthen print a multiplication table up to 12.
//  document.getElementById("formTen").addEventListener('submit', function(event) {
//         event.preventDefault(); 
//         let inputTen = document.getElementById("inputTen").value;
//         let outputTen = document.getElementById("outputTen");
//         outputTen.innerHTML="";
//         for(i=0;i<=12;i++){
//           console.log(i*inputTen);
//           outputTen.innerHTML += ` ${i} * ${inputTen} = ${i * inputTen}  <br\> `;
  
//         }
//      });






















//11-Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number
//  document.getElementById("formEleven").addEventListener('submit', function(event) {
//         event.preventDefault(); 
//         let inputEleven = document.getElementById("inputEleven").value;
//         let outputEleven = document.getElementById("outputEleven");
//       for (let i = 2; i <= inputEleven; i += 2) {
//   console.log(i);
//   outputEleven.innerHTML += `${i} `;
// } });





























//12- Write a program that take two integers then print the power
// document.getElementById("formTwelve").addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   let inputOne = document.getElementById("inputOne").value;
//   let inputTwo = document.getElementById("inputTwo").value;
//   let outputTwelve = document.getElementById("outputTwelve");

// outputTwelve.innerHTML += `  the result is ${inputOne ** inputTwo} `;
//  });























//13- Write a program to enter marks of five subjects and calculate total, average and percentage.
// document.getElementById("formThirteen").addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   let subjectOne = document.getElementById("subjectOne").value;
//   let subjectTwo = document.getElementById("subjectTwo").value;
//   let subjectThree = document.getElementById("subjectThree").value;
//   let subjectFour = document.getElementById("subjectFour").value;
//   let subjectFive = document.getElementById("subjectFive").value;
//   let outputThirteen = document.getElementById("outputThirteen");
//   let total = Number(subjectOne) + Number(subjectTwo) + Number(subjectThree) + Number(subjectFour) + Number(subjectFive);
//   let average = total / 5;
//   let percentage = (total / (5 * 100)) * 100;

// outputThirteen.innerHTML += `  the Total is ${total} and average is ${average} and the percentage is ${percentage} % `;
//  });



























//14-Write a program to input month number and print number of days in that month.
// document.getElementById("formFourteen").addEventListener('submit', function(event) {
//   event.preventDefault(); 

//   let outputFourteen = document.getElementById("outputFourteen");
//   monthInput=document.getElementById("monthInput").value;
//   let monthsThirtyOne  = ['January','March','May','July','August','October','December'];
//   let monthsThirty  = ['April','June','September','November'];
//   let monthsTwentyNine  = ['February'];
  
//   outputFourteen.innerHTML += `  the number `;
  
  
//   if (monthsThirty.includes(monthInput)) {
//           outputFourteen.innerHTML = `no of days is 30`;
//       } 
//       else if (monthsThirtyOne.includes(monthInput)){
//         outputFourteen.innerHTML = `no of days is 31`;

//       }
//       else if  (monthsTwentyNine.includes(monthInput)){
//         outputFourteen.innerHTML = `no of days is 29`;

//       }
//  });


































//15- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade 

// document.getElementById("formFifteen").addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   let grade='';
//   let outputFifteen = document.getElementById("outputFifteen");
//   let subjectOne = document.getElementById("subjectOne").value;
//     let subjectTwo = document.getElementById("subjectTwo").value;
//     let subjectThree = document.getElementById("subjectThree").value;
//     let subjectFour = document.getElementById("subjectFour").value;
//     let subjectFive = document.getElementById("subjectFive").value;
//     let total = Number(subjectOne) + Number(subjectTwo) + Number(subjectThree) + Number(subjectFour) + Number(subjectFive);
//     let percentage = (total / (5 * 100)) * 100;
//     if(percentage >= 90){
//       grade = 'A';
//     }
//     else if (percentage >= 80 ){
//       grade = 'B';
//     }
//     else if (percentage >= 70){
//       grade = 'C';
//     }
//     else if (percentage >= 60){
//       grade = 'D';
//     }
    
//     else if (percentage >= 40){
//       grade = 'E';
//     }
//     else if (percentage < 40){
//       grade = 'F';
//     }





//   outputFifteen.innerHTML += `  the Total is ${total} and  and the percentage is ${percentage} % and the grade is ${grade} `;

//       });

























//16- Write a program to print total number of days in month 
// document.getElementById("formSixteen").addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   let monthInput = document.getElementById("monthInput").value;
//   let outputSixteen = document.getElementById("outputSixteen");

//   switch (monthInput.toLowerCase()) {
//       case "january":
//       case "march":
//       case "may":
//       case "july":
//       case "august":
//       case "october":
//       case "december":
// outputSixteen.innerHTML =`31 days`
// console.log('31days');
//           break;
//       case "april":
//       case "june":
//       case "september":
//       case "november":
//         outputSixteen.innerHTML =`30 days`
//         break;
//       case "february":
//         outputSixteen.innerHTML =`29 days`
//         break;
     
//   }
// });





























//17- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// document.getElementById("formSeventeen").addEventListener('submit', function(event) {
//   event.preventDefault();
//   let charInput = document.getElementById("stringSeventeen").value;
//   let outputSeventeen = document.getElementById("outputSeventeen");

//   if (charInput.length !== 1 || !/[a-zA-Z]/.test(charInput)) {
//       outputSeventeen.innerHTML = "Please enter a single alphabet character.";
//       return;
//   }

//   switch (charInput.toLowerCase()) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//           outputSeventeen.innerHTML = `${charInput} is a vowel`;
//           break;
//       default:
//           outputSeventeen.innerHTML = `${charInput} is a consonant`;
//           break;
//   }
// });


































//18-- Write a program to find maximum between two numbers 
// document.getElementById("formThree").addEventListener('submit', function(event) {
//   event.preventDefault();

//   let firstNumber = document.getElementById("input1").value;
//   let secondNumber = document.getElementById("input2").value;

//   firstNumber = Number(firstNumber);
//   secondNumber = Number(secondNumber);

//   let maxElement = document.getElementById("max");

//   switch (true) {
//       case firstNumber > secondNumber:
//           maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${firstNumber}`;
//           break;
//       case secondNumber > firstNumber:
//           maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${secondNumber}`;
//           break;
//       case firstNumber === secondNumber:
//           maxElement.innerHTML = `Both numbers are equal; there is no maximum.`;
//           break;
//       default:
//           maxElement.innerHTML = `Invalid input.`;
//           break;
//   }

//   console.log('First Number:', firstNumber);
//   console.log('Second Number:', secondNumber);
// });





























//19-- Write a program to check whether a number is even or odd 
// document.getElementById("formSix").addEventListener('submit', function(event) {
//   event.preventDefault(); 

//   let number = document.getElementById("number").value;
//   let outputSix = document.getElementById("outputSix");

//   number = Number(number);

//   switch (number % 2) {
//       case 0:
//           outputSix.innerHTML = `The number is even.`;
//           break;
//       case 1:
//       case -1: 
//           outputSix.innerHTML = `The number is odd.`;
//           break;
//       default:
//           outputSix.innerHTML = `Invalid input.`;
//           break;
//   }
// });





























// 20-Write a program to check whether a number is positive or negative or zero
// document.getElementById("formFour").addEventListener('submit', function(event) {
//   event.preventDefault();

//   let myInteger = document.getElementById("integer").value;
//   let outputFour = document.getElementById("outputFour");
//   myInteger = Number(myInteger);

//   switch (true) {
//       case (myInteger < 0):
//           console.log('negative value');
//           outputFour.innerHTML = `This is a negative value`;
//           break;
//       case (myInteger === 0):
//           console.log('zero value');
//           outputFour.innerHTML = `This is a zero value`;
//           break;
//       case (myInteger > 0):
//           console.log('positive value');
//           outputFour.innerHTML = `This is a positive value`;
//           break;
//       default:
//           console.log('invalid value');
//           outputFour.innerHTML = `Invalid input`;
//           break;
//   }
// });






























// 21-Write a program to create Simple Calculator
// document.getElementById('calculatorForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   let firstNumber = parseFloat(document.getElementById('firstNumber').value);
//   let secondNumber = parseFloat(document.getElementById('secondNumber').value);
//   let operation = document.getElementById('operation').value;
//   let resultElement = document.getElementById('result');
//   let result;

//   switch (operation) {
//       case 'add':
//           result = firstNumber + secondNumber;
//           break;
//       case 'subtract':
//           result = firstNumber - secondNumber;
//           break;
//       case 'multiply':
//           result = firstNumber * secondNumber;
//           break;
//       case 'divide':
//           if (secondNumber !== 0) {
//               result = firstNumber / secondNumber;
//           } else {
//               result = 'Error: Division by zero';
//           }
//           break;
//       default:
//           result = 'Invalid operation';
//   }

//   resultElement.textContent = `Result: ${result}`;
// });

