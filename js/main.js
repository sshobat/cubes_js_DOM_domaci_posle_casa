import {zvezda} from './data.js';

// select header, timer
const header = document.querySelector('header > div');
let timer = document.getElementById('timer-num');

// change interval (s)
const timeStart = 60;

// function that creates new elements: text, image, heading
const newEl = (el, imgPath, text) => {
    const element = document.createElement(el);
    imgPath ? element.setAttribute('src', imgPath) : null;
    text ? element.textContent = text : null;
    
    return element;
}

// insert logo into DOM
const insertLogo = () => {
    header.prepend(newEl('img', zvezda.teamLogoPath));
}
// insert heading into DOM
const insertHeading = () => {
    header.appendChild(newEl('h1', null, `${zvezda.teamName} APPLICATION`));
}
// generate random number from the input arr indexes
const randomArrIndex = arr => Math.floor(Math.random() * arr.length);

// insert players to first team section and reserves section
const insertPlayers = arr => {
    const firstTeam = document.getElementById('first-squad');
    const secondTeam = document.getElementById('reserve-players');
    
    while(arr.length) {
        let playerIndex = randomArrIndex(arr);
        arr.length > 4 ? firstTeam.prepend(createPlayer(playerIndex)) : secondTeam.prepend(createPlayer(playerIndex));
        arr.splice(playerIndex, 1);
    }
}

// create one player
const createPlayer = index => {
    const player = newEl('article');

    player.prepend(newEl('img', zvezda.players[index].photoPath));
    player.appendChild(newEl('p', null, `Name: ${zvezda.players[index].firstName} ${zvezda.players[index].lastName}`));
    player.appendChild(newEl('p', null, `Number: ${zvezda.players[index].number}`));
    player.appendChild(newEl('p', null, `Position: ${zvezda.players[index].position}`));
    player.appendChild(newEl('p', null, `Age: ${zvezda.players[index].age}`));

    return player;
}
// create counter that changes player every 60s
const counter = () => {
    const timerBox = document.querySelector('main > div');
    let time = timeStart;
    timer.textContent = timeStart;
    count(time, timerBox);
}

var counterInterval;
// count
const count = (time, timerBox) => {
    counterInterval = setInterval(() => {
        time > 1 ? time-- : time = timeStart;
        timer.textContent = time;
        time < 11 ? timerBox.classList.add('red-background') : timerBox.classList.remove('red-background'); 
    }, 1000);
}

// stop counter
const stopCounter = () => {
    console.log('the counter has stopped')
    clearInterval(counterInterval);
}

// make player change
const changePlayers = () => {

    stopCounter();
    timer.textContent = timeStart;
    counter();
    // select first team and reserve players
    const firstTeamPlayers = document.querySelectorAll('#first-squad article');
    const reservePlayers = document.querySelectorAll('#reserve-players article');
    // random players indexes
    const firstTeamRandomIndex = randomArrIndex(firstTeamPlayers);
    const reserveRandomIndex = randomArrIndex(reservePlayers);
    // select two elements around reserve player
    const reserveBefore = reservePlayers[reserveRandomIndex].previousElementSibling;
    const reserveAfter = reservePlayers[reserveRandomIndex].nextElementSibling;
    // change players
    firstTeamPlayers[firstTeamRandomIndex].before(reservePlayers[reserveRandomIndex]);
    reserveBefore ? reserveBefore.after(firstTeamPlayers[firstTeamRandomIndex]) : reserveAfter.before(firstTeamPlayers[firstTeamRandomIndex]);

    // mark with red background of players that are changed
    const playerBackOn = () => {
        firstTeamPlayers[firstTeamRandomIndex].classList.add('red-background');
        reservePlayers[reserveRandomIndex].classList.add('red-background');
    }
    // delete red background of players that are changed
    const playerBackOff = () => {
        firstTeamPlayers[firstTeamRandomIndex].classList.remove('red-background');
        reservePlayers[reserveRandomIndex].classList.remove('red-background');
    }
    playerBackOn();
    setTimeout(() => {
        playerBackOff();
    }, 2000);
}
// initialize application
const appInit = () => {
    insertLogo();
    insertHeading();
    insertPlayers(zvezda.players);
    counter();
    setInterval(changePlayers, timeStart * 1000);
}
appInit();