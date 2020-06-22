// function to generate Number and check with the value
let input = document.getElementById("guess");
let UAnswer = document.getElementById("userAnswer");
let MAnswer = document.getElementById('correctAnswer');
let button = document.getElementById('submit');
let Errorss = document.getElementById('errorss');
let mainBlock = document.getElementById('main');


const rangoNumber = () => {
    let randomT = Math.floor(Math.random() * 101);
    return randomT;
};

let PGuess = [];
let myNumber = rangoNumber();
console.log(myNumber);


function getTheNumber(){
    if (PGuess.length < 10 && input.value < myNumber) {
    Errorss.style.backgroundColor = 'red';
    Errorss.innerHTML = 'TOO low Try again';
    PGuess.push(input.value);
    UAnswer.innerHTML = `Your answers is: ${PGuess} `;
    

    } else if (PGuess.length < 10 && input.value > myNumber) {
    Errorss.style.backgroundColor = 'red';
    Errorss.innerHTML = 'TOO heigh Try again';
    PGuess.push(input.value);
    UAnswer.innerHTML = `Your answers is: ${PGuess} `;
    

    } else if (PGuess.length == 10 && input.value != myNumber) {
    Errorss.style.backgroundColor = 'Red';
    Errorss.innerHTML = '!!Game Over';
    button.disabled = true;
    reset();

    } else if (PGuess.length < 10 && input.value == myNumber) {
    Errorss.style.backgroundColor = 'Green';
    Errorss.innerHTML = `Bingo!! ${input.value}`;
    PGuess.push(input.value);
    UAnswer.innerHTML = `Your answers is: ${PGuess} | The number of trials: ${PGuess.length}`;
    button.disabled = true;
    reset();
    }

    input.value = '';
    return PGuess
    
 };

const weClicked = () => {
    if ( input.value.length > 2 || input.value.length < 0 || input.value < 0) {
    Errorss.style.backgroundColor = 'red';
    Errorss.innerHTML = 'Please enter a number between 1 - 100';
    input.value = '';
    }
    else if (input.value.length > 0 ) {
        getTheNumber();
    }

};


const wePressed = (event) => {
    if (input.value.length > 2 || input.value.length < 0 || input.value < 0 && event.keyCode === 13 ) {
    Errorss.style.backgroundColor = 'red';
    Errorss.innerHTML = 'Please enter a number between 1 - 100';
    input.value = '';
    }
    else if (input.value.length > 0 && event.keyCode === 13 ) {
        getTheNumber();
    }
};

const reset = () => {
    let restart = document.createElement('button');
    restart.innerHTML = "Restart the game!";
    mainBlock.appendChild(restart);
    restart.addEventListener('click', function(){
    location.reload()
})
};

input.addEventListener('keydown', wePressed);
button.addEventListener('click', weClicked);


