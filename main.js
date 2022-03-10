
const menu = document.getElementById('menu');
const creditsText = document.getElementById('credits-text');

const startButton = document.getElementById('start-button');
const creditsButton = document.getElementById('credits-button');
const backButton = document.getElementById('back-button');
const backButton2 = document.getElementById('back-button-2');
const exitButton = document.getElementById('exit-button');
const playButton = document.getElementById('play-button');

const buttonSound = new Audio('audio/button.mp3');

const buttonCollection = document.getElementsByClassName('button');

const settings = document.getElementById('settings');

const inputs = document.getElementsByClassName('input');

const title = document.getElementById('title');

var difficulty = 0;


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

playButton.addEventListener('click', () => {
    buttonSound.play();
    console.log(index);
    // START(diffuculty, hasTime, hasXP, timeCount, XPcount);
    START(difficulty, time, XP, timeCount, xpCount);
})

backButton2.addEventListener('click', () => {
    buttonSound.play();
    settings.classList.add('hidden');
    menu.classList.remove('hidden');
})

function goToSettings () {
    menu.classList.add('hidden');
    settings.classList.remove('hidden');
}

const icons = document.getElementsByClassName('icon-box');

var index = -1;
function radioboxChecked ( item ) {
    buttonSound.play();
    item.target.classList.add('tested');
    for(let i = 0; i < 3; i++) {
        icons[i].setAttribute('src', 'icons/radiobox.png');
        if ( icons[i].classList.contains('tested') ) {
            index = i;
            difficulty = index;
            icons[i].classList.remove('tested');
        }
    }
    item.target.setAttribute('src', 'icons/radiobox2.png');

}

for(element of icons) {
    element.addEventListener('click', e => radioboxChecked(e));
}


const iconBoxTime = document.getElementById('icon-box-time');
const iconBoxXP = document.getElementById('icon-box-xp');
var time = 0;
var XP = 0;

iconBoxTime.addEventListener('click', () => {
    if ( time % 2 == 0 ) {
        iconBoxTime.setAttribute('src', 'icons/radiobox2.png');
        buttonSound.play();
        time++;
    } else {
        iconBoxTime.setAttribute('src', 'icons/radiobox.png');
        buttonSound.play();
        time++;
    }
})

iconBoxXP.addEventListener('click', () => {
    if ( XP % 2 == 0 ) {
        iconBoxXP.setAttribute('src', 'icons/radiobox2.png');
        buttonSound.play();
        XP++;
    } else {
        iconBoxXP.setAttribute('src', 'icons/radiobox.png');
        buttonSound.play();
        XP++;
    }
})


const arrows = document.getElementsByClassName('arrows');
for(element of arrows) {
    element.addEventListener('click', e => buttonSound.play());
}


const arrowUP1 = document.getElementById('arrow-up-1');
const arrowDOWN1 = document.getElementById('arrow-down-1');
const arrowUP2 = document.getElementById('arrow-up-2');
const arrowDOWN2 = document.getElementById('arrow-down-2');


const inputTime = document.getElementById('input-time');
const inputXP = document.getElementById('input-xp');

var timeCount = 1;
arrowUP1.addEventListener('click', () => {
    if ( timeCount < 5 ) {
        timeCount++;
        inputTime.innerHTML = `0${timeCount}:00`;
    } 
})

arrowDOWN1.addEventListener('click', () => {
    if ( timeCount > 1 ) {
        timeCount--;
        inputTime.innerHTML = `0${timeCount}:00`;
    } 
})

var xpCount = 1;
arrowUP2.addEventListener('click', () => {
    if ( xpCount < 5 ) {
        xpCount++;
        inputXP.innerHTML = `${xpCount}`;
    } 
})

arrowDOWN2.addEventListener('click', () => {
    if ( xpCount > 1 ) {
        xpCount--;
        inputXP.innerHTML = `${xpCount}`;
    } 
})


const timer = document.getElementById('timer');
const header = document.getElementById('header');

function headerFoo () {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss;
    timer.innerText = time; 
    let t = setTimeout(function(){ headerFoo() }, 1000); 
}


const stars = document.getElementsByClassName('stars');
const hearts = document.getElementsByClassName('xp');

function START (difficulty, hasTime, hasXP, timeCount, xpCount) {
    settings.classList.add('hidden');
    title.setAttribute('style', 'display: none !important;');
    header.classList.remove('hidden');
    
    if ( hasTime % 2 == 0 && hasXP % 2 == 0 ) {
        stars.classList.add('hidden');

        hearts.classList.add('hidden');
        headerFoo();
    }
    console.log(`
    ${difficulty} - difficulty
    ${hasTime % 2 == 0 ? false : true} - time: 0 | 1
    ${hasXP % 2 == 0 ? false : true} - XP: 0 | 1
    ${timeCount} - time
    ${xpCount} - xp
    `);
    }

    
    

