document.getElementById("formSeventeen").addEventListener('submit', function(event) {
  event.preventDefault();
  let charInput = document.getElementById("stringSeventeen").value;
  let outputSeventeen = document.getElementById("outputSeventeen");

  if (charInput.length !== 1 || !/[a-zA-Z]/.test(charInput)) {
      outputSeventeen.innerHTML = "Please enter a single alphabet character.";
      return;
  }

  switch (charInput.toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
          outputSeventeen.innerHTML = `${charInput} is a vowel`;
          break;
      default:
          outputSeventeen.innerHTML = `${charInput} is a consonant`;
          break;
  }
});
