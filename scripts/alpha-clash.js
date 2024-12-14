// function play(){
//     // step-1: hide the home screen. to hide the screen and the class hidden the the section
//         const homeSection = document.getElementById('home-screen');
//         homeSection.classList.add('hidden');
//         // console.log(homeSection.classList);

//     // step-2: Show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround.classList);
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement.innerText);
    const currentAlphabet = currentAlphabetElement.innerText;
    // console.log(playerPressed, currentAlphabet);
    const expectedAlphabet = currentAlphabet.toLowerCase(); 
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        // -----------------------------------------
        // console.log('you have pressed correctly', expectedAlphabet)
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentSoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentSoreText);
        // console.log(currentScore);

        // // 2.increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);


        // ---------------------------------
        // step-1: get the current Life number
        // const currentLifeNumber = document.getElementById('current-life');
        // const currentLifeText = currentLifeNumber.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);

        // // step-2: reduce the llife count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeNumber.innerText = newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Alphabet', alphabet);

    // randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set Background Color
    setBackgroundColor(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
