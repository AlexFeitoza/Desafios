const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Empate"
    } else if (
            (human === 'paper' && machine === "rock")||
            (human === 'rock' && machine === 'scissors') ||
            (human === 'scissors' && machine === 'paper') 
     ) {
        humanScore++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Voce ganhou"
    } else {
        machineScore++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Alexa ganhou, voce perdeu."
    }

}
