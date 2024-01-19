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
var sex = [9];
let locked = true;
let lock = 0;

function sortNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


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

function run(x, y, z, p) {
    if (x === 1) {
        sortImg(food);
        c1.style.backgroundImage = `url(assets/food/${food[food.length - 1]}.jpeg)`;
    }
    if (y === 1) {
        sortImg(wtd);
        c2.style.backgroundImage = `url(assets/wtd/${wtd[wtd.length - 1]}.jpeg)`;
    }
    if (z === 1) {
        sortImg(aft);
        c3.style.backgroundImage = `url(assets/aft/${aft[aft.length - 1]}.jpeg)`;
    }
    if (p === 1) {
        sortImg(sex);
        c4.style.backgroundImage = `url(assets/sex/${sex[sex.length - 1]}.jpeg)`;
    }
}

document.getElementById('bt').addEventListener("click", function () {
    setTimeout(function () {
        run(1, 1, 1, 1);
    }, 1000);
    h3.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});

unlock.addEventListener("click", function () {
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
});

c1.addEventListener("click", function () {
    if (!locked) {
        run(1);
    }
});
c2.addEventListener("click", function () {
    if (!locked) {
        run(0, 1);
    }
});
c3.addEventListener("click", function () {
    if (!locked) {
        run(0, 0, 1);
    }
});
c4.addEventListener("click", function () {
    if (!locked) {
        run(0, 0, 0, 1);
    }
});

