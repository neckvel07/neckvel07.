const h3 = document.querySelectorAll('h3');
const ca = document.querySelectorAll('.cube');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const unlock = document.getElementById('unlock');
const i = 0;
var food = [19];
var wtd = [10];
var aft = [6];
var funTime = [9];
let firstRun = false;
let locked = true;
let lock = 0;

//Criação de funções//

//Sorteador de números
function sortNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Sortear imagem com o valor da primeira posição na array
function sortImg(type) {
    if (type.length === type[0]) {
        type.length = 1;
        return type[0];
    }

    let num;
    do {
        num = sortNum(1, type[0]);
    } while (type.includes(num));
    type.push(num);
    console.log(type);
    return num;
}

//Realizar sorteio 
function run(x = '') {
    if (x === 1 || x === '') {
        sortImg(food);
        c1.style.backgroundImage = `url(../assets/food/${food[food.length - 1]}.jpeg)`;
    }
    if (x === 2 || x === '') {
        sortImg(wtd);
        c2.style.backgroundImage = `url(../assets/wtd/${wtd[wtd.length - 1]}.jpeg)`;
    }
    if (x === 3 || x === '') {
        sortImg(aft);
        c3.style.backgroundImage = `url(../assets/aft/${aft[aft.length - 1]}.jpeg)`;
    }
    if (x === 4 || x === '') {
        sortImg(funTime);
        c4.style.backgroundImage = `url(../assets/funTime/${funTime[funTime.length - 1]}.jpeg)`;
    }
    ca.forEach(function (elemento) {
        elemento.style.opacity = '1';
    })
}

//Criação de eventos para os botões//

//Botão de sortear
document.getElementById('bt').addEventListener("click", function () {
    firstRun = true;
    ca.forEach(function(elemento) {
        elemento.style.opacity = '0';
    })
    setTimeout(function () {
        run();
    }, 1000);
    h3.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});

//Botão de editar
unlock.addEventListener("click", function () {
    if (firstRun === true){
        lock += 1;
    if (lock % 2 === 0) {
        locked = true;
        unlock.innerText = 'Edit';
        h3.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
        ca.forEach(cube => {
            cube.style.boxShadow = '0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255), 0 0 15px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255)';
        });
    } else {
        locked = false;
        unlock.innerText = 'Close';
        h3.forEach(function (elemento) {
            elemento.style.display = 'flex';
        });
        ca.forEach(cube => {
            cube.style.boxShadow = '0 0 5px lime, 0 0 10px lime, 0 0 15px lime, 0 0 20px lime';
        });
    }
    } 
});

//Evento de sortear somente um quadrado, caso no modo edição
c1.addEventListener("click", function () {
    if (!locked) {
        run(1);
    }
});
c2.addEventListener("click", function () {
    if (!locked) {
        run(2);
    }
});
c3.addEventListener("click", function () {
    if (!locked) {
        run(3);
    }
});
c4.addEventListener("click", function () {
    if (!locked) {
        run(4);
    }
});

