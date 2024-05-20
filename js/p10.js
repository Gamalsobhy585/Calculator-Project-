 document.getElementById("formTen").addEventListener('submit', function(event) {
        event.preventDefault(); 
        let inputTen = document.getElementById("inputTen").value;
        let outputTen = document.getElementById("outputTen");
        outputTen.innerHTML="";
        for(i=0;i<=12;i++){
          console.log(i*inputTen);
          outputTen.innerHTML += ` ${i} * ${inputTen} = ${i * inputTen}  <br\> `;
  
        }
     });
