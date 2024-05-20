document.getElementById("formThree").addEventListener('submit', function(event) {
    event.preventDefault();

    let firstNumber = document.getElementById("input1").value;
    let secondNumber = document.getElementById("input2").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let maxElement = document.getElementById("max");
    
    if (firstNumber > secondNumber) {
        maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${firstNumber}`;
    } else if (secondNumber > firstNumber) {
        maxElement.innerHTML = `The maximum of ${firstNumber} and ${secondNumber} is ${secondNumber}`;
    } else {
        maxElement.innerHTML = `Both numbers are equal; there is no maximum.`;
    }

    console.log('First Number:', firstNumber);
    console.log('Second Number:', secondNumber);
});
