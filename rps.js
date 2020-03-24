let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_section = document.querySelector(".game");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

const convertToWord = letter => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


const win = (playerChoice, computerChoice) => {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    document.getElementById(playerChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(playerChoice).classList.remove('green-glow') }, 300);
}

const lose = (playerChoice, computerChoice) => {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} loses to ${convertToWord(computerChoice)}. You Lost...`;
    document.getElementById(playerChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(playerChoice).classList.remove('red-glow') }, 300);
}

const draw = (playerChoice, computerChoice) => {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} and ${convertToWord(computerChoice)}. Its a Draw!`;
    document.getElementById(playerChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(playerChoice).classList.remove('gray-glow') }, 300);
}


const game = playerChoice => {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
}



function main(){
rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();



