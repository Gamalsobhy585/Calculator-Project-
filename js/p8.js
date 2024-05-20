document.getElementById("formEight").addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let stringEight = document.getElementById("stringEight").value;
    stringEight =String(stringEight).toLowerCase();
    
    let outputEight = document.getElementById("outputEight");
    ;
 
    const vowels = ['a','e','i','o','u']
    if (vowels.includes(stringEight)) {
      outputEight.innerHTML = `${stringEight} is a vowel`;
  } 
  else {
    outputEight.innerHTML = `${stringEight} is a consonant`;

  }
  });
