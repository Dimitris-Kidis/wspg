
const menu = document.getElementById('menu');
const creditsText = document.getElementById('credits-text');

const startButton = document.getElementById('start-button');
const creditsButton = document.getElementById('credits-button');
const backButton = document.getElementById('back-button');
const exitButton = document.getElementById('exit-button');

const buttonSound = new Audio('audio/button.mp3');

const buttonCollection = document.getElementsByClassName('button');



startButton.addEventListener('click', () => {
    buttonSound.play();
    goToSettings();

})

creditsButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    creditsText.classList.remove('hidden');
    buttonSound.play();

})

backButton.addEventListener('click', () => {
    buttonSound.play();
    creditsText.classList.add('hidden');
    menu.classList.remove('hidden');
    
})

exitButton.addEventListener('click', () => {
    buttonSound.play();
    window.open("", "_self");
    window.close();
    
})

function goToSettings () {

}

