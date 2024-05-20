document.getElementById("formFifteen").addEventListener('submit', function(event) {
  event.preventDefault(); 
  let grade='';
  let outputFifteen = document.getElementById("outputFifteen");
  let subjectOne = document.getElementById("subjectOne").value;
    let subjectTwo = document.getElementById("subjectTwo").value;
    let subjectThree = document.getElementById("subjectThree").value;
    let subjectFour = document.getElementById("subjectFour").value;
    let subjectFive = document.getElementById("subjectFive").value;
    let total = Number(subjectOne) + Number(subjectTwo) + Number(subjectThree) + Number(subjectFour) + Number(subjectFive);
    let percentage = (total / (5 * 100)) * 100;
    if(percentage >= 90){
      grade = 'A';
    }
    else if (percentage >= 80 ){
      grade = 'B';
    }
    else if (percentage >= 70){
      grade = 'C';
    }
    else if (percentage >= 60){
      grade = 'D';
    }
    
    else if (percentage >= 40){
      grade = 'E';
    }
    else if (percentage < 40){
      grade = 'F';
    }





  outputFifteen.innerHTML += `  the Total is ${total} and  and the percentage is ${percentage.toFixed(1)} % and the grade is ${grade} `;

      });
