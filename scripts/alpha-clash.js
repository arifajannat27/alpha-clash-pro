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
