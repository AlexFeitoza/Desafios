
function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let = result;

    if (playerChoice === computerChoice) {
        resultc = "Empate";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "Voce ganhou";
    } else {
        result = "Voce perdeu";
    }

    document.getElementById('result').innerHTML = `Voce escolheu ${playerChoice},  Alexa escolheu ${computerChoice},  Resultado: ${result}`;

    document.getElementsByClassName('your-score').innerHTML = ``
}