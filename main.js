
const menu = document.getElementById('menu');
const creditsText = document.getElementById('credits-text');

const startButton = document.getElementById('start-button');
const creditsButton = document.getElementById('credits-button');
const backButton = document.getElementById('back-button');
const exitButton = document.getElementById('exit-button');



startButton.addEventListener('click', () => {
    goToSettings();
})

creditsButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    creditsText.classList.remove('hidden');

})

backButton.addEventListener('click', () => {
    creditsText.classList.add('hidden');
    menu.classList.remove('hidden');
})

exitButton.addEventListener('click', () => {
    window.open("", "_self");
    window.close();
})

function goToSettings () {

}
let sound = new Audio('/audio/button.mp3');
startButton.addEventListener('mouseover', () => {
    let sound = new Audio('/audio/button.mp3');
    sound.play();
})