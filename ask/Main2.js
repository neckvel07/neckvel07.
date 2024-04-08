const body = document.querySelector("body")
const buttons = document.querySelector(".buttons");
const nop = document.getElementById("nop");
const sip = document.getElementById("sip");
const getNopSize = parseFloat(window.getComputedStyle(nop).width);
const gifDiv = document.getElementById("gifDiv");
const gif = document.getElementById("gif");
const gif2 = document.getElementById("gif2");
const gif3 = document.getElementById("gif3");
const h4 = document.getElementById("text");
const wBT = getComputedStyle(sip).width;
const mediaQuery = window.matchMedia("(min-width: 601px) and (max-width: 1200px)");
const canvas = document.getElementById('confetti');
const context = canvas.getContext("2d");
const maxConfettis = 25;
const particles = [];
var confettiOn = false;
let W = window.innerWidth;
let H = document.getElementById('confetti').clientHeight;
var nopSize = (getNopSize / window.innerWidth) * 100;
var sipSize = nopSize;
var nopTextSize = parseInt(window.getComputedStyle(nop).fontSize);
var count = 0;
var texts = [
    'Mesmo sabendo que eu sou ciumento?',
    'Mesmo sabendo que eu sou safadinho?',
    'Mesmo sabendo que eu sou baixinho?',
    'Mesmo sabendo que eu sou preguiçoso?',
    'Mesmo sabendo que eu sou meio alemão?',
    'Mesmo sabendo que eu ronco?(ainda n sabe)',
    'Gente quantos simmm`s 🤩',
    'Bom, então...',
    'Prometo sempre alegrar teus dias...',
    'Prometo sempre demonstrar meu amor...',
    'Prometo sempre fazer comidinhas deliciosas...',
    'Prometo sempre te ajudar com oq precisar...',
    'Prometo sempre te colocar em primeiro lugar...',
    'Prometo te fazer o menino mais feliz do mundo!',
    'Então.. finalmente namorando yeiiii  🥳 🥳 🥳 🥳 🥳 🥳',
    'Espera um pouquinho....',
    'Ta faltando só uma coisinha hihi'
];
const possibleColors = [
    "#ff7336",
    "#f9e038",
    "#02cca4",
    "#383082",
    "#fed3f5",
    "#b1245a",
    "#f2733f"
];
let j = 0;

// ALTERAR TAMANHO DOS BOTOES
function sizeChanger(x, y, z) {
    if (x === 'nop') {
        if (y === '-') {
            nopSize -= z;
            nopTextSize -= z*2;
            if (nopSize <= 0) {
                nop.style.display = 'none';
            }
            nop.style.width = `${nopSize}vw`;
            nop.style.height = `${nopSize}vw`;
            nop.style.fontSize = `${nopTextSize}px`
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

// TROCAR DE TEXTO
function changeText() {
    h4.innerText = texts[count];
    count++;
}

//CAIR ELEMENTOS
function gravity() {
    buttons.style.marginTop = '346vw';
    setTimeout(function () {
        setTimeout(function () {
            buttons.style.display = 'none';
        }, 500);
    }, 500);
}

//CONFETES
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    if (mediaQuery.matches) {
        this.r = randomFromTo(44, 132);
    } else {
        this.r = randomFromTo(11, 33); // radius
    }
    
    this.d = Math.random() * maxConfettis + 11;
    this.color =
        possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function () {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        return context.stroke();
    };
}

function Draw() {
    const results = [];

    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
        results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
        particle = particles[i];

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= H) remainingFlakes++;

        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
    }
    return results;
}

window.addEventListener(
    "resize",
    function() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    false
  );

for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
}

function startConfetti() {
    canvas.style.zIndex = '3';
    canvas.width = W;
    canvas.height = H;
    Draw();
}

nop.addEventListener("click", function () {
    gravity();
    setTimeout(function () {
        h4.innerText = '💔';
        gif.style.marginTop = '23vw';
        gif.src = '../assets/gif/yes1.gif';
    }, 500);
});

sip.addEventListener("click", function () {
    changeText();
    sizeChanger('sip', '+', 2);
    sizeChanger('nop', '-', 5);
    if (count >= 7) {
        gravity();
        setTimeout(function () {
            gif.style.marginTop = '23vw'
            var interval = setInterval(function () {
                h4.innerText = texts[count];
                count++;
                if (count >= texts.length - 2) {
                    // confetes
                    confettiOn = true;
                    gif.src = '../assets/gif/yes2.gif';
                    if (count >= texts.length) {
                        clearInterval(interval);
                    }
                }
            }, 3400);

        }, 1000);
    }
});
//INICIAR CONFETES

setInterval(function () {
    if (confettiOn === true && j === 0) {
        startConfetti();
        j++;
    }
}, 1200);