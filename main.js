const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = 
    {
        player: 1,
        name : 'Liukang',
        hp : 100,
        img : 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
        weapon : ['fist','stick','sword'],
        attack() {
            console.log(this.name + ' Fight...');
        }
    }
;

const player2 = 
    {
        player: 2,
        name : 'Subzero',
        hp : 100,
        img : 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        weapon : ['sword','ice','slip'],
        attack() {
            console.log(this.name + ' Fight...');
        }
    }
;

function createElement (tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer (playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    return $player;
}

function changeHP (player1, player2) {
    const $player1Life = document.querySelector('.player' + player1.player + ' .life');
    const $player2Life = document.querySelector('.player' + player2.player + ' .life');
    
    player1.hp -= generateRandomNumber();
    player2.hp -= generateRandomNumber();


    if (player1.hp <= 0) {
        player1.hp = 0;
        $arenas.appendChild(playerWin(player2.name));
    }

    if (player2.hp <= 0) {
        player2.hp = 0;
        $arenas.appendChild(playerWin(player1.name));
    }

    $player1Life.style.width = player1.hp + '%';
    $player2Life.style.width = player2.hp + '%';
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins';
    $randomButton.disabled = true;

    return $loseTitle;    
}

function generateRandomNumber() {
    number = Math.ceil(Math.random() * 20);

    return number;
}

$randomButton.addEventListener('click', function() {
	changeHP(player1, player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
