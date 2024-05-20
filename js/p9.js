document.getElementById("formNine").addEventListener('submit', function(event) {
      event.preventDefault(); 
      let inputNine = document.getElementById("inputNine").value;
      let outputNine = document.getElementById("outputNine");
      outputNine.innerHTML="";
      for(i=1;i<=inputNine;i++){
        console.log(i);
        outputNine.innerHTML += `${i}   `;

      }
   });
  
