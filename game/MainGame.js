const bUp = document.getElementById("up");
const bDown = document.getElementById("down");
const bRight = document.getElementById("right");
const bLeft = document.getElementById("left");
const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

const player = {
    x: 1, // posição inicial do jogador em colunas
    y: 1  // posição inicial do jogador em linhas
};

const tileW = 20;
const tileH = 20;

const gridRows = 20;
const gridCols = 20;

const map = [
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,
    0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,
    0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,
    0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,
    0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,
    0,,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,
    0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,
    0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,
    0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
]

const updateAll = () => {
    drawMap();
    drawPlayer();
    window.requestAnimationFrame(updateAll);
}

window.onload = () => {
    window.requestAnimationFrame(updateAll);
}

const handleCollision = (x, y) => {
    const arrayIndex = y * gridCols + x;
    return map[arrayIndex] === 0;
};

const drawPlayer = () => {
    ctx.fillStyle = 'red';
    ctx.fillRect(tileW * player.x, tileH * player.y, tileW, tileH);
};

const drawMap = () => {
    for(let eachRow = 0; eachRow < gridRows; eachRow++) {
        for(let eachCol = 0; eachCol <gridCols; eachCol++) {
            let arrayIndex = eachRow * gridRows + eachCol;

            if(map[arrayIndex] === 1) {
                ctx.fillStyle = 'lime';
                ctx.fillRect(tileW * eachCol, tileH * eachRow, tileW, tileH);
            } else {
                ctx.fillStyle = 'black';
                ctx.fillRect(tileW * eachCol, tileH * eachRow, tileW, tileH);
            }
        }
    }
}

const movePlayer = (directionX, directionY) => {
    const newX = player.x + directionX;
    const newY = player.y + directionY;

    if (newX >= 0 && newX < gridCols && newY >= 0 && newY < gridRows && !handleCollision(newX, newY)) {
        player.x = newX;
        player.y = newY;
    }
    
};

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

bUp.addEventListener("click", function() {
    movePlayer(0, -1);
});
bDown.addEventListener("click", function() {
    movePlayer(0, 1);
});
bRight.addEventListener("click", function() {
    movePlayer(1, 0);
});
bLeft.addEventListener("click", function() {
    movePlayer(-1, 0);
});