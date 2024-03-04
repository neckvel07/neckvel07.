function flipCard() {
    var flipper = document.querySelector('.flipper');
    flipper.style.transform = flipper.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
