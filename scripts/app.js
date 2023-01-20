// alert()
// let itemOne = document.getElementById('rock');
// let itemTwo = document.getElementById('itemTwo');
// let itemThree = document.getElementById('itemThree');
// let itemFour = document.getElementById('itemFour');


// let injectHere = document.getElementById('injectHere');

// rock.addEventListener('click', function(e){
    //     // Result ID 
    //     let rock = document.createElement("rock");
    //     injectHere.appendChild(rock);
    //     rock.textContent = "My name is ";
    
    
    // });
    
    
    // My functions TAB! 
    
    // Using querySelector! / ALL  to get a return from the first element that matches selector.
    // querySelectorAll is basically a form of targeting point, It;s similar to getelementID
    // querySelectroy ALL returns a list of the file's elements that matches group selectors
    
    let playerScoreElement = document.querySelector('.playerDub');
    let computerScoreElement = document.querySelector('.pcScore');
    let windowElements = document.querySelectorAll('.windowEleven');
    let result = document.querySelector('.newMsg');
    let restartButtonNow = document.querySelector('.button');
    let tryingOutStuff = document.querySelector('.mainContent');
    
    let playerDub = 0;
    let pcScore = 0;
    let trackGame = 0;
    
    let computerRock = document.querySelector('#computerRock');
    let newScissor = document.querySelector('#newScissor');
    let computerDecision = document.querySelector('#computerDecision');
    let newLizard = document.querySelector('#newLizard');
    let newSpock = document.querySelector('#newSpock');
    

    // Adding my Event Listeners!
    windowElements.forEach(windowEleven => {
        windowEleven.addEventListener("click", e => {
            firstRnd(e.target.id, getData());
        })
    });
    restartButtonNow.addEventListener('click', () => {
        restartButtonNow.classList.toggle('inactive');
        anothaGame();
    });
    
    anothaGame();
    
    function getData(){
        let choice  = Math.floor(Math.random()*5);
        switch(choice){
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissors";
            case 3: return "lizard";
        case 4: return "spock"
    } 
}

function restartMeh(outcome){
    trackGame = 0;
    restartButtonNow.classList.toggle('inactive');
    if(outcome === 0){
        result.textContent = (`You lost! with a score : ${playerDub} - 3. Better luck next time!`);
    }
    else{
        result.textContent = (`Dub! You have won with a score:  of 3 - ${pcScore}.`);
    }
}


function scoreOneUp(outcome){
    if (outcome === 1){
        playerDub += 1;
        playerScoreElement.classList.add('playerScoreUpdate');
        playerScoreElement.textContent = playerDub;
        if (playerDub >= 5){
            restartMeh(1);
        }
    }
    else{
        pcScore += 1;
        computerScoreElement.classList.add('computerScoreUpdate')
        computerScoreElement.textContent = pcScore;
        if (pcScore >= 5){
            restartMeh(0);
        }
    }
}

function firstRnd(playerSelection, computerSelection){
    if (trackGame === 0){
        return;
    }
    playerScoreElement.classList.remove('playerScoreUpdate');
    computerScoreElement.classList.remove('computerScoreUpdate');

    newScissor.classList.add('inactive');
    computerRock.classList.add('inactive');
    computerDecision.classList.add('inactive');
    newLizard.classList.add('inactive');
    newSpock.classList.add('inactive');

    if (computerSelection == "rock"){
        computerRock.classList.remove('inactive');
    }
    if (computerSelection == "paper"){
        newScissor.classList.remove('inactive');
    }
    if (computerSelection == "scissors"){
        computerDecision.classList.remove('inactive');
    }
    if (computerSelection == "lizard"){
        newLizard.classList.remove('inactive');
    }
    if (computerSelection == "spock"){
        newSpock.classList.remove('inactive');
    }

    let userInput = playerSelection.toLowerCase();
    if (userInput == "rock"){
        if(computerSelection === "rock"){
            result.textContent = ("Tie! Both chose rock."); 
        }
        else if (computerSelection === "paper"){
            result.textContent = ("You lose! Paper beats rock."); 
            scoreOneUp(0);
        }
        
        else if (computerSelection === "lizard"){
            result.textContent = ("You win!  rock beats lizard ."); 
            scoreOneUp(1);
        }
        else if (computerSelection === "spock"){
            result.textContent = ("You lose! Paper beats rock."); 
            scoreOneUp(0);
        }
        else{
            result.textContent = ("You win! Rock beats scissors.");
            scoreOneUp(1);
        }
    }
    else if (userInput == "paper"){
        if(computerSelection === "paper"){
            result.textContent = ("Tie! Both chose paper.");
        }
        else if (computerSelection === "scissors"){
            result.textContent = ("You lose! Scissors beat paper.") 
            scoreOneUp(0);
        }
        else if (computerSelection === "lizard"){
            result.textContent = ("You win! Paper beats lizard.") 
            scoreOneUp(1);
        }
        else if (computerSelection === "spock"){
            result.textContent = ("You lose! Scissors beat paper.") 
            scoreOneUp(0);
        }
        else{
            result.textContent = ("You win! Paper beats rock.") 
            scoreOneUp(1);
        }
    }
    else {
        if(computerSelection == "scissors"){
            result.textContent = ("Tie! Both chose scissors.")
        }
        else if (computerSelection === "rock"){
            result.textContent = ("You lose! Rock beat scissors.") 
            scoreOneUp(0);
        }
        else if (computerSelection === "rock"){
            result.textContent = ("You lose! Rock beat scissors.") 
            scoreOneUp(0);
        }
        else if (computerSelection === "rock"){
            result.textContent = ("You lose! Rock beat scissors.") 
            scoreOneUp(0);
        }
        else{
            result.textContent = ("You win! Scissors beats paper.")
            scoreOneUp(1);
        }
    }
}

function anothaGame(){
    console.log('Welcome');
    trackGame = 1;
    playerDub = 0;
    pcScore = 0;

    newScissor.classList.add('inactive');
    computerRock.classList.add('inactive');
    computerDecision.classList.add('inactive');
    newLizard.classList.add('inactive');
    newSpock.classList.add('inactive');

    playerScoreElement.classList.remove('playerScoreUpdate');
    computerScoreElement.classList.remove('computerScoreUpdate');


    result.textContent = "Play the Game Master.. First to reach 5 points wins!"
    playerScoreElement.textContent = playerDub;
    computerScoreElement.textContent = pcScore;

}







// Hide and Show DOM 
// show an element
// document.querySelectorAll('#computerRock').style.display = 'none'
// document.querySelector('.button').style.display = 'none'
  // toggle the element visibility
//   const toggle = tryingOutStuff => {
//     // if the element is visible, hide it
//     if (window.getComputedStyle(tryingOutStuff).display !== 'none') {
//       hide(tryingOutStuff)
//       return
//     }

// }


  
