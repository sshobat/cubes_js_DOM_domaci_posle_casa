// ***** JS DOM HOMEWORK *****
// AFTER CLASS EXPLANATIONS



// - Create a page displaying profiles of 15 players of your favorite football team


// PAGE STRUCTURE

// - Page should have a header on the top, containing team logo on the left of the header

// - Below the header there should be a team name

// - Below that there should be a section displaying first squad players (11 of them in total, 4 players in a row)

// - Below that there should be section displaying reserve players

// - Each player profile should contain image, name, last name, player number, position and age in following format:

// image

// Name: Ronaldinho
// Last name: Gaucho
// Number: 9
// Position: Forward
// Age: 27

// - Each time page reloads random 11 players should be selected for starting squad, the rest of them should be in reserves


// FOLDER STRUCTURE

// - You should have main folder called FootballPlayers

// - Inside of that you should have index.html file, as well as css, js and images folders


// DATA STRUCTURE

// - There should be an object containing team data

// - It should contain team name, team logo path, and players properties

// - Players property should be an array of objects

// - Each object should contain single player data (Name, Last name, Number etc.)


// HOW PAGE SHOULD BE CONSTRUCTED

// - In the start in the HTML file you should have only container elements, like header, main section and similar elements you may need

// !!! IMPORTANT !!!

// - All other elements, like logo, team name, and player profiles should be added from JS, using data from existing team object


// BONUS - PLAYER SUBSTITUTION :)

// Each 60 seconds one random player from starting squad should be replaced with random player from reserves

//starting object

const zvezda = {
    teamName: 'FC RED STAR',
    teamLogoPath: './img/fkcz_logo.png',
    teamLogoDesc: 'Red Star logo',
    players: [
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: './img/players/149z69_MilanBorjan2.png'
        },
        {
            firstName: 'Zoran',
            lastName: 'Popovic',
            number: 1,
            position: 'Goalkeeper',
            age: 33,
            photoPath: './img/players/149z69_ZoranPopovic2.png'
        },
        {
            firstName: 'Marko',
            lastName: 'Gobeljic',
            number: 77,
            position: 'Defender',
            age: 29,
            photoPath: './img/players/149z69_MarkoGobeljic2.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Rodic',
            number: 23,
            position: 'Defender',
            age: 30,
            photoPath: './img/players/149z69_MilanRodic2.png'
        },
        {
            firstName: 'Nemanja',
            lastName: 'Milunovic',
            number: 19,
            position: 'Defender',
            age: 32,
            photoPath: './img/players/149z69_NemanjaMilunovic2.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Gajic',
            number: 2,
            position: 'Defender',
            age: 25,
            photoPath: './img/players/149z69_MilanGajic2.png'
        },
        {
            firstName: 'Radovan',
            lastName: 'Pankov',
            number: 6,
            position: 'Defender',
            age: 26,
            photoPath: './img/players/149z69_RadovanPankov2.png'
        },
        {
            firstName: 'Milos',
            lastName: 'Degenek',
            number: 5,
            position: 'Defender',
            age: 27,
            photoPath: './img/players/149z69_MilosDegenek2.png'
        },
        {
            firstName: 'Strahinja',
            lastName: 'Erakovic',
            number: 25,
            position: 'Defender',
            age: 20,
            photoPath: './img/players/149z69_StrahinjaErakovic2.png'
        },
        {
            firstName: 'Guelor',
            lastName: 'Kanga',
            number: 8,
            position: 'Midfilder',
            age: 31,
            photoPath: './img/players/149z69_GelorKanga2.png'
        },
        {
            firstName: 'Marko',
            lastName: 'Ivanic',
            number: 4,
            position: 'Midfilder',
            age: 28,
            photoPath: './img/players/149z69_MirkoIvanic2.png'
        },
        {
            firstName: 'Njegos',
            lastName: 'Petrovic',
            number: 20,
            position: 'Midfilder',
            age: 22,
            photoPath: './img/players/149z69_PetrovicNjegos2.png'
        },
        {
            firstName: 'Veljko',
            lastName: 'Nikolic',
            number: 22,
            position: 'Midfilder',
            age: 22,
            photoPath: './img/players/149z69_VeljkoNikolic2.png'
        },
        {
            firstName: 'Zeljko',
            lastName: 'Gavric',
            number: 24,
            position: 'Midfilder',
            age: 21,
            photoPath: './img/players/149z69_ZeljkoGavric2.png'
        },
        {
            firstName: 'Sekou',
            lastName: 'Sango',
            number: 35,
            position: 'Midfilder',
            age: 32,
            photoPath: './img/players/149z69_SekuSanogo2.png'
        },
    ]
};

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
    
    setInterval(() => {
        time > 1 ? time-- : time = timeStart;
        timer.textContent = time;
        time < 11 ? timerBox.classList.add('red-background') : timerBox.classList.remove('red-background'); 
    }, 1000);
}



// make player change
const changePlayers = () => {

    timer.textContent = timeStart;
    counter();

    const firstTeamPlayers = document.querySelectorAll('#first-squad article');
    const reservePlayers = document.querySelectorAll('#reserve-players article');

    const firstTeamRandomIndex = randomArrIndex(firstTeamPlayers);
    const reserveRandomIndex = randomArrIndex(reservePlayers);

    const reserveBefore = reservePlayers[reserveRandomIndex].previousElementSibling;
    const reserveAfter = reservePlayers[reserveRandomIndex].nextElementSibling;

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

const appInit = () => {
    insertLogo();
    insertHeading();
    insertPlayers(zvezda.players);
    counter();
    setInterval(changePlayers, timeStart * 1000);
}
appInit();

