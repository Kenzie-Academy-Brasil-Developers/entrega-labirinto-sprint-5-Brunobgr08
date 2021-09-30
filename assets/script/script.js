const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const btnStar = document.getElementById('game__start');
const bntReset = document.getElementById('game__reset');

const lab = document.getElementById('game__main');
const foot = document.getElementById('footer');
let vit = document.createElement('h3');
vit.className = 'footer__h3';
vit.innerText = "";

    let player = document.createElement('div');
    player.classList.add('game__player');
    player.id = 'game__player';

const createScenary = () =>{

    for (let line = 0; line < map.length; line++){

        let linha = document.createElement('div');
        linha.classList.add('game__line');
        linha.dataset.positionY = line;

        for (let cell = 0; cell < map[line].length; cell++){
            let celula = document.createElement('div');
            celula.classList.add('game_cell');
            celula.dataset.positionX = cell;
            if(map[line][cell] === 'W'){
                celula.classList.add('cell-W');
            } else if(map[line][cell] === 'F'){
                celula.classList.add('cell-F');
            } else if(map[line][cell] === 'S'){
                celula.classList.add('cell-S');
                celula.appendChild(player);
            } else if(map[line][cell] === ' '){
                celula.classList.add('cell-E');
            }
            linha.appendChild(celula);
        }
        lab.appendChild(linha);
    }
}

const startMovments = () =>{

    'use strict';

    let movements = document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      //console.log('keydown event\n\n' + 'key: ' + keyName);

            let divParent = player.parentElement;
            let divGranPa = divParent.parentElement;
            let divTop = divGranPa.previousSibling;
            let divBottom = divGranPa.nextElementSibling;
            let positXPlayer = divParent.dataset.positionX;
            let cellLeft, cellRight, cellTop, cellBottom;

                if ( keyName === 'ArrowLeft'){
                    cellLeft = divParent.previousSibling;
                    if (cellLeft !== null && ! cellLeft.classList.contains('cell-W')){
                        cellLeft.appendChild(player);
                    }
                } else if ( keyName === 'ArrowRight' ){
                    cellRight = divParent.nextElementSibling;
                    if ( cellRight !== null && ! cellRight.classList.contains('cell-W')){
                        cellRight.appendChild(player);
                    }
                } else if ( divTop !== null && keyName === 'ArrowUp' ){
                    cellTop = divTop.childNodes[positXPlayer];
                    if (! cellTop.classList.contains('cell-W')){
                        cellTop.appendChild(player);
                    }
                } else if ( divBottom !== null && keyName === 'ArrowDown' ){
                    cellBottom = divBottom.childNodes[positXPlayer];
                    if (! cellBottom.classList.contains('cell-W')){
                        cellBottom.appendChild(player);
                    }
                }
                divParent = player.parentElement;

                if (divParent.classList.contains('cell-F')){
                    vitoria();
                }
    });
}


function vitoria(){
    vit.innerText = 'Parabéns! Você venceu! Jogue novamente.';
    foot.appendChild(vit);
}

const startGame = () =>{
    createScenary();
    startMovments();
    btnStar.classList.add('hidden');
    bntReset.classList.remove('hidden');
}

const resetGame = () =>{
        window.location.reload();
}

btnStar.addEventListener('click', startGame);

bntReset.addEventListener('click', resetGame);



