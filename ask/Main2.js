const body = document.querySelector("body")
const buttons = document.querySelector(".buttons");
const nop = document.getElementById("nop");
const sip = document.getElementById("sip");
const gifDiv = document.getElementById("gifDiv");
const gif = document.getElementById("gif");
const gif2 = document.getElementById("gif2");
const gif3 = document.getElementById("gif3");
const h4 = document.getElementById("text");
var nopSize = 20;
var sipSize = 20;
var count = 0;
var continwe = false;
var texts = [
    'teste1',
    'teste2',
    'teste3',
    'teste4',
    'teste5'
]

function sizeChanger(x, y, z) {
    if (x === 'nop') {
        if (y === '-') {
            nopSize -= z;
            if (nopSize <= 0) {
                nop.style.display = 'none';
            }
            nop.style.width = `${nopSize}vw`;
            nop.style.height = `${nopSize}vw`;
        } else if (y === '+') {
            nopSize += z;
            nop.style.width = `${nopSize}vw`;
            nop.style.height = `${nopSize}vw`;
        }
    }
    if (x === 'sip') {
        if (y === '-') {
            sipSize -= z;
            sip.style.width = `${sipSize}vw`;
            sip.style.height = `${sipSize}vw`;
        } else if (y === '+') {
            sipSize += z;
            sip.style.width = `${sipSize}vw`;
            sip.style.height = `${sipSize}vw`;
        }
    }
}

function changeText() {
    h4.innerText = texts[count];
    count += 1;
}

function gravity() {
    setTimeout(function () {
        buttons.style.marginTop = '346vw';
        setTimeout(function () {
            buttons.style.display = 'none';
            continwe = true;
        }, 2000);
    }, 1500);
}

function rejected() {
    gif.style.marginTop = '23vw'
    gif.src = '../assets/gif/giphy3.gif'
}

function accepted() {
    gif.style.marginTop = '23vw'
    gif.src = '../assets/gif/giphy2.gif'
}

nop.addEventListener("click", function () {
    gravity();
    setTimeout(function() {
        rejected();
    }, 1500);
});

sip.addEventListener("click", function () {
    changeText()
    sizeChanger('sip', '+', 2);
    sizeChanger('nop', '-', 7);
    if (count >= texts.length) {
        gravity();
        setTimeout(function() {
            accepted();
        }, 1500);
    }
});