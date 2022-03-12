
const menu = document.getElementById('menu');
const creditsText = document.getElementById('credits-text');

const startButton = document.getElementById('start-button');
const creditsButton = document.getElementById('credits-button');
const backButton = document.getElementById('back-button');
const backButton2 = document.getElementById('back-button-2');
const exitButton = document.getElementById('exit-button');
const playButton = document.getElementById('play-button');

let buttonSound = new Audio('audio/button.mp3');

const buttonCollection = document.getElementsByClassName('button');

const settings = document.getElementById('settings');

const inputs = document.getElementsByClassName('input');

const title = document.getElementById('title');

var difficulty = 0;

const audioIcons = document.getElementById('audio-icons');


startButton.addEventListener('click', () => {
    soundCheck(soundFlag);
    goToSettings();

})

creditsButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    creditsText.classList.remove('hidden');
    soundCheck(soundFlag);

})

backButton.addEventListener('click', () => {
    soundCheck(soundFlag);
    creditsText.classList.add('hidden');
    menu.classList.remove('hidden');
    
})

exitButton.addEventListener('click', () => {
    soundCheck(soundFlag);
    window.open("", "_self");
    window.close();
    
})

playButton.addEventListener('click', () => {
    soundCheck(soundFlag);
    console.log(index);
    // START(diffuculty, hasTime, hasXP, timeCount, XPcount);
    START(difficulty, time, XP, timeCount, xpCount);
})

backButton2.addEventListener('click', () => {
    soundCheck(soundFlag);
    settings.classList.add('hidden');
    menu.classList.remove('hidden');
})


const melody = document.getElementById('melody');
const sound = document.getElementById('sound');
console.log(melody);
var melodySwitch = false;
var soundSwitch = false;

melody.addEventListener('click', () => {
    soundCheck(soundFlag);
    if ( !melodySwitch ) {
        melody.setAttribute('src', 'icons/melody-off.png');
        melodySwitch = true;
    } else {
        melody.setAttribute('src', 'icons/melody.png');
        melodySwitch = false;
    }
})

function soundCheck (flag) {
    if ( flag === true) {
        buttonSound.play();
        console.log('Есть звук!');
    } else if ( flag === false ) {
        console.log('Нет звука!');
    }
}

var soundFlag = true;
sound.addEventListener('click', () => {
    soundCheck(soundFlag);

    if ( !soundSwitch ) {

        soundFlag = false;
        soundCheck(soundFlag);
        sound.setAttribute('src', 'icons/sound-off.png');
        soundSwitch = true;

    } else {
        
        soundFlag = true;
        soundCheck(soundFlag);
        
        sound.setAttribute('src', 'icons/sound.png');
        // buttonSound = new Audio('audio/button.mp3');

        soundSwitch = false;
    }
})



function goToSettings () {
    menu.classList.add('hidden');
    settings.classList.remove('hidden');
}

const icons = document.getElementsByClassName('icon-box');

var index = -1;
function radioboxChecked ( item ) {
    soundCheck(soundFlag);
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
        soundCheck(soundFlag);
        time++;
    } else {
        iconBoxTime.setAttribute('src', 'icons/radiobox.png');
        soundCheck(soundFlag);
        time++;
    }
})

iconBoxXP.addEventListener('click', () => {
    if ( XP % 2 == 0 ) {
        iconBoxXP.setAttribute('src', 'icons/radiobox2.png');
        soundCheck(soundFlag);
        XP++;
    } else {
        iconBoxXP.setAttribute('src', 'icons/radiobox.png');
        soundCheck(soundFlag);
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

var timerID = 0;
function timerStart ( timeCount ) {
    let secs = 60 * timeCount; 
    let oneFifth = Math.floor(secs / 5);
    let fullTime = secs;
    for(let i = 0; i < 5; i++){
        stars.innerHTML += `<img src="icons/full-star-2.png" class="star" alt="">`;
    }
    timerID = setInterval(() => {
        if ( secs < fullTime - oneFifth && secs > fullTime - (2*oneFifth)  ) {
            console.log('четвертая');
            starsCollection[4].setAttribute('src', 'icons/empty-star-2.png');
        } else if ( secs < fullTime - (2*oneFifth) && secs > fullTime - (3*oneFifth) ) {
            console.log('третья');
            starsCollection[3].setAttribute('src', 'icons/empty-star-2.png');
        } else if ( secs < fullTime - (3*oneFifth) && secs > fullTime - (4*oneFifth) ) {
            console.log('вторая');
            starsCollection[2].setAttribute('src', 'icons/empty-star-2.png');
        } else if ( secs < fullTime - (4*oneFifth)  ) {
            console.log('первая');
            starsCollection[1].setAttribute('src', 'icons/empty-star-2.png');
        } 

        
        if ( secs >= 0 ) {
            timer.innerHTML = `0${zeroPad((Math.floor(secs/60)),1)}:${zeroPad((secs%60),2)}`;
            secs--;
        } else {
            console.log('finished');
            clearInterval(timerID);
        }
        
    }, 1000);
}

function heartsStart (xpCount) {
    for(let i = 0; i < xpCount; i++){
        hearts.innerHTML += `<img src="icons/full-heart.png" class="heart" alt="">`;
    }

}

const zeroPad = (num, places) => String(num).padStart(places, '0');


const starsCollection = document.getElementsByClassName('star');
const heartsCollection = document.getElementsByClassName('heart');
const stars = document.getElementById('stars');
const hearts = document.getElementById('hearts');

function START (difficulty, hasTime, hasXP, timeCount, xpCount) {
    settings.classList.add('hidden');
    title.setAttribute('style', 'display: none !important;');
    header.classList.remove('hidden');

    if ( hasTime % 2 == 0 && hasXP % 2 == 0 ) {
        stars.classList.add('hidden');
        hearts.classList.add('hidden');
        headerFoo();
    } else if ( hasTime % 2 != 0 && hasXP % 2 == 0 ) {
        console.log(starsCollection);
        hearts.classList.add('hidden');
        timerStart(timeCount);
    } else if ( hasTime % 2 == 0 && hasXP % 2 != 0 ) {
        heartsStart(xpCount);
        headerFoo();
        stars.classList.add('hidden');
    } else if ( hasTime % 2 != 0 && hasXP % 2 != 0 ) {
        timerStart(timeCount);
        heartsStart(xpCount);
    }




    console.log(`
    ${difficulty} - difficulty
    ${hasTime % 2 == 0 ? false : true} - time: 0 | 1
    ${hasXP % 2 == 0 ? false : true} - XP: 0 | 1
    ${timeCount} - time
    ${xpCount} - xp
    `);
    }

    
    

