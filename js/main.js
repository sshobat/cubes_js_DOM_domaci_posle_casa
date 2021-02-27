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

var zvezda = {
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

var header = document.querySelector('header>div');

function insertLogo() {
    var logo = document.createElement('img');
    logo.setAttribute('src', zvezda.teamLogoPath);
    header.prepend(logo);
}

function insertHeading() {
    var heading = document.createElement('h1');
    heading.textContent = zvezda.teamName + ' APPLICATION';
    header.appendChild(heading);
}

function randomArrIndex(arr) {
    return Math.floor(Math.random() * arr.length) ;
}

function insertPlayers(arr) {

    var firstTeam = document.getElementById('first-squad');
    var secondTeam = document.getElementById('reserve-players');
    
    while(arr.length) {

        var playerIndex = randomArrIndex(arr);

        arr.length > 4 ? firstTeam.prepend(createPlayer(playerIndex)) : secondTeam.prepend(createPlayer(playerIndex));

        arr.splice(playerIndex, 1);
    }

}

function createPlayer(index) {

    var player = document.createElement('article');

    var image = document.createElement('img');
    image.setAttribute('src', zvezda.players[index].photoPath);
    player.prepend(image);

    var playerText = document.createElement('div');
    player.appendChild(playerText);
    var name = "<p>Name: " + zvezda.players[index].firstName + " " + zvezda.players[index].lastName + "</p>";
    var number = "<p>Number: " + zvezda.players[index].number + "</p>";
    var position = "<p>Position: " + zvezda.players[index].position + "</p>";
    var age = "<p>Age: " + zvezda.players[index].age + "</p>";

    playerText.innerHTML = name + number + position + age;

    return player;
}

function appInit() {
    insertLogo();
    insertHeading();
    insertPlayers(zvezda.players);
}
appInit();

var timer;
var timeStart = 60;

function counter() {

    var time = timeStart;

    timer = document.getElementById('timer-num');
    timer.textContent = timeStart;
    var timerBox = document.querySelector('main > div');

    setInterval(function() {

        if(time > 1) {
            time--;
        }
        else {
            time = timeStart;
        }
        timer.textContent = time;

        if(time < 11) {
            timerBox.classList.add('red-background');
        } else {
            timerBox.classList.remove('red-background'); 
        }
    }, 1000);
}

var firstTeamPlayers;
var reservePlayers;

var firstTeamRandomIndex;
var reserveRandomIndex;

function changePlayers() {

    firstTeamPlayers = document.querySelectorAll('#first-squad article');
    reservePlayers = document.querySelectorAll('#reserve-players article');

    firstTeamRandomIndex = randomArrIndex(firstTeamPlayers);
    reserveRandomIndex = randomArrIndex(reservePlayers);

    var reserveBefore = reservePlayers[reserveRandomIndex].previousElementSibling;
    var reserveAfter = reservePlayers[reserveRandomIndex].nextElementSibling;

    firstTeamPlayers[firstTeamRandomIndex].before(reservePlayers[reserveRandomIndex]);

    if(reserveBefore) {
        reserveBefore.after(firstTeamPlayers[firstTeamRandomIndex]);
    } else {
        reserveAfter.before(firstTeamPlayers[firstTeamRandomIndex]);
    }
}

function playerBackOn() {
    firstTeamPlayers[firstTeamRandomIndex].classList.add('red-background');
    reservePlayers[reserveRandomIndex].classList.add('red-background');
}

function playerBackOff() {
    firstTeamPlayers[firstTeamRandomIndex].classList.remove('red-background');
    reservePlayers[reserveRandomIndex].classList.remove('red-background');
}

counter();

function change() {
    timer.textContent = timeStart;
    counter();
    changePlayers();
    playerBackOn()
    setTimeout(playerBackOff, 2000);
}
setInterval(change, 60000);



































