document.getElementById("formFourteen").addEventListener('submit', function(event) {
  event.preventDefault(); 

  let outputFourteen = document.getElementById("outputFourteen");
  monthInput=document.getElementById("monthInput").value;
  let monthsThirtyOne  = ['January','March','May','July','August','October','December'];
  let monthsThirty  = ['April','June','September','November'];
  let monthsTwentyNine  = ['February'];
  
  outputFourteen.innerHTML += `  the number `;
  
  
  if (monthsThirty.includes(monthInput)) {
          outputFourteen.innerHTML = `no of days is 30`;
      } 
      else if (monthsThirtyOne.includes(monthInput)){
        outputFourteen.innerHTML = `no of days is 31`;

      }
      else if  (monthsTwentyNine.includes(monthInput)){
        outputFourteen.innerHTML = `no of days is 29`;

      }
 });
