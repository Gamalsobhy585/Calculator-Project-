 document.getElementById("formEleven").addEventListener('submit', function(event) {
        event.preventDefault(); 
        let inputEleven = document.getElementById("inputEleven").value;
        let outputEleven = document.getElementById("outputEleven");
      for (let i = 2; i <= inputEleven; i += 2) {
  console.log(i);
  outputEleven.innerHTML += `${i} `;
} });
