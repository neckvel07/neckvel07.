const addPhotos = document.querySelector('.center');
const text = document.getElementById('text');
const content = [
    {
        title: 'Pixar',
        date: '25/09/2023',
        src: '../assets/photos/pixar.jpg'
    },
    {
        title: 'Wonka',
        date: '08/12/2023',
        src: '../assets/photos/lego.jpg'
    },
    {
        title: 'Glasses',
        date: '08/12/2023',
        src: '../assets/photos/glasses.jpg'
    },
    {
        title: '"Work" Day',
        date: '22/12/2023',
        src: '../assets/photos/glasses.jpg'
    }
];

text.innerText = '. Ɛ> .Memories. <3 .'
for (let i = 0; i < content.length; i++) {
    const card = document.createElement('div');
    card.classList.add('cube');
    card.innerHTML = `
        <div class="img"></div>
        <div class="texts">
            <h2>${content[i].title}</h2>
            <p>${content[i].date}</p>
        </div>
    `;
    
    const photo = card.querySelector('.img');
    photo.style.backgroundImage = `url(${content[i].src})`;
    addPhotos.appendChild(card);
};


