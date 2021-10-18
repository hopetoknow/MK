let player1 = 
    {
        name : 'Liukang',
        hp : 75,
        img : 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
        weapon : ['fist','stick','sword'],
        attack() {
            console.log(this.name + ' Fight...');
        }
    }
;
let player2 = 
    {
        name : 'Subzero',
        hp : 60,
        img : 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        weapon : ['sword','ice','slip'],
        attack() {
            console.log(this.name + ' Fight...');
        }
    }
;

const $arenas = document.querySelector('.arenas');

function createPlayer (playerClass, player) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp+'%';
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);

    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);