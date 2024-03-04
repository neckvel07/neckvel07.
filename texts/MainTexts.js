const body = document.querySelector('body');
const h3 = document.querySelector('h3');
const addPhotos = document.querySelector('.center');
const addBigPhoto = document.querySelector('.bigPhotoAdd');
const centerElements = document.querySelector('.centerElements');
const darker = document.querySelector('.darker');
const content = [
    {
        title: 'Pixar',
        date: '25/09/2023',
        src: '../assets/photos/pixar.jpg',
        text: 'Nosso primeiro date e o dia em que eu encontrei o amor da minha vida, um dos melhores dias de toda minha existencia. Ainda não sei como tu não olhou pra minha cara e foi embora aquele dia, ainda parece mto fake que tu ta comigo...',
        mine: '30px',
        noko: '70px'
    },
    {
        title: 'Wonka',
        date: '08/12/2023',
        src: '../assets/photos/lego.jpg',
        text: '',
        mine: '',
        noko: ''
    },
    {
        title: 'Glasses',
        date: '08/12/2023',
        src: '../assets/photos/glasses.jpg',
        text: '',
        mine: '',
        noko: ''
    },
    {
        title: '"Work Day"',
        date: '22/12/2023',
        src: '../assets/photos/Wday.jpeg',
        text: '',
        mine: '',
        noko: ''
    },
    {
        title: 'Nico`s house sleepover',
        date: '12/01/2024',
        src: '../assets/photos/nHS.jpg',
        text: '',
        mine: '',
        noko: ''
    },
    {
        title: 'Nico`s house sleepover',
        date: '12/01/2024',
        src: '../assets/photos/nHS.jpg',
        text: '',
        mine: '',
        noko: ''
    }
];
let pass = false;

for (let i = 0; i < content.length; i++) {
    const card = document.createElement('div');
    card.classList.add('cube');
    const contents = `
        <div class="img"></div>
        <div class="texts">
            <h2>${content[i].title}</h2>
            <p>${content[i].date}</p>
        </div>
`;
    card.innerHTML = contents;
    let photo = card.querySelector('.img');
    photo.style.backgroundImage = `url(${content[i].src})`;

    card.addEventListener("click", function () {
        addBigPhoto.innerHTML = '';
        darker.style.display = 'flex';
        centerElements.style.zIndex = '3';
        const bigCard = document.createElement('div');
        bigCard.classList.add('cube');
        bigCard.id = 'big';
        bigCard.innerHTML = contents;
        bigCard.querySelector('.img').style.backgroundImage = `url(${content[i].src})`;
        addBigPhoto.appendChild(bigCard);
        addBigPhoto.style.opacity = '1';

        const bigCardBack = document.createElement('div');
        bigCardBack.classList.add('cubeBack');
        bigCardBack.id = 'bigBack';
        bigCardBack.innerHTML = `
        <h3>${content[i].text}</h3>
        `;
        addBigPhoto.appendChild(bigCardBack);
        addBigPhoto.style.opacity = '1';
    });
    addPhotos.appendChild(card);
};

function closePhoto(event) {
    if (!addBigPhoto.contains(event.target)) {
        addBigPhoto.style.transform = 'rotateY(0deg)';
        pass = false;
        setTimeout(function () {
            addBigPhoto.style.opacity = '0';
            darker.style.opacity = '0';
            setTimeout(function () {
                addBigPhoto.innerHTML = '';
                darker.style.display = 'none'
                centerElements.style.zIndex = '-2';
                darker.style.opacity = '1';
            }, 500);
        }, 1000);
    } else {
        if (pass === false) {
            addBigPhoto.style.transform = 'rotateY(180deg)';
            pass = true;
        } else {
            addBigPhoto.style.transform = 'rotateY(0deg)';
            pass = false;
        }

    };
};
