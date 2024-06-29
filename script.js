const rock = '✊🏿'
const paper =  '🖐🏿'
const scissors = '✌🏿'

function randomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selectSign(optionNumber){
  switch (optionNumber) {
    case 1:
      return `${rock}`;
    case 2:
      return `${paper}`;
    case 3:
      return `${scissors}`;
    default:
      return 'Invalid option, please try again';
  }
}

function playGame(userChoice) {
  const computerChoice = randomInt(1,3)

  const userSign = selectSign(userChoice)
  const computerSign = selectSign(computerChoice)

  document.getElementById('userSign').textContent = ` ${userSign}`;
  document.getElementById('computerSign').textContent = ` ${computerSign}`;

  let result;
  if (userSign === computerSign) {
    result = "It's a tie!";
  } else if (
    (userSign === rock && computerSign === scissors) ||
    (userSign === paper && computerSign === rock) ||
    (userSign === scissors && computerSign === paper)
  ) {
    result = ("You win!🏆");
  } else {
    result = ("You lose! 🥹");
  }
  document.getElementById('result').textContent = `Result: ${result}`;
}