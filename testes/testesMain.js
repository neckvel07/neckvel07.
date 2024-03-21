document.addEventListener("DOMContentLoaded", async function () {
    const body = document.querySelector("body");
    const nicoTemp = document.getElementById('nicoTemp');
    const nokoTemp = document.getElementById('nokoTemp');
    const nicoGif = document.getElementById('nicoGif');
    const nokoGif = document.getElementById('nokoGif');
    const addSpotify = document.querySelector(".addSpotify");
    const left = document.querySelector("#left");
    const right = document.getElementById("right");
    const playlists = ['https://open.spotify.com/embed/playlist/4Knctc7wEHBfqItvI3Z0CC?utm_source=generator', 'https://open.spotify.com/embed/playlist/3w0gZ6WZWfFZr4l9swUiTs?utm_source=generator', 'https://open.spotify.com/embed/playlist/1qmmVdDWtMUyWWALptrNKY?utm_source=generator', 'https://open.spotify.com/embed/playlist/7tAP384gwsTdx873FoTVcb?utm_source=generator', 'https://open.spotify.com/embed/playlist/6kOYDS3cGchM1aEsfyMOfz?utm_source=generator']
    const nicoGifList = ['cookingCat', 'lambretta', 'lis', 'crab'];
    const nokoGifList = ['grass', 'danceCat', 'rDGDance', 'sailor', 'noko'];
    const apiKey = 'aa2005c3657cb4272b6a7eca24481cc1';
    const cidades = ['Sao Leopoldo', 'Porto Alegre'];
    const estado = 'RS';
    const pais = 'BR';
    const temperatura = [];
    const condicao = [];
    var count = 0;
    var countGifNico = Math.floor(Math.random() * (nicoGifList.length - 1 + 1)) + 0;
    var countGifNoko = Math.floor(Math.random() * (nokoGifList.length - 1 + 1)) + 0;

    cidades.forEach(cidade => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${estado},${pais}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    console.error(`Cidade ${cidade} não encontrada`);
                } else {
                    temperatura.push(parseInt(data.main.temp));
                    condicao.push(data.weather[0].description);
                }
            })
            .catch(error => console.error(`Erro ao obter dados de ${cidade}:`, error));
    });

    function iOrder() {
        if (count >= playlists.length) {
            count = 0;
        }
        if (count < 0) {
            count = playlists.length - 1;
        }
        console.log(count, playlists[count])
    }

    function createSpotify() {
        for (let i = 0; i < playlists.length; i++) {
            var iFrameAdd = `<iframe class="iframeSpotify" src="${playlists[count]}" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            addSpotify.innerHTML += iFrameAdd;
            count++;
            iOrder();
        }
    }

    function changeSpotify() {
        const iFrameAll = document.querySelectorAll('.iframeSpotify');
        addSpotify.style.opacity = 0;

        setTimeout(function () {
            iFrameAll.forEach(iframe => {
                iframe.style.display = 'none';
            });
            addSpotify.innerHTML = '';
        }, 500);
        setTimeout(function () {
            createSpotify();
        }, 600);
        setTimeout(function () {
            addSpotify.style.opacity = 1;
        }, 900);
    }

    function changeGif() {
        nicoGif.src = `../assets/gif/nico/${nicoGifList[countGifNico]}.gif`;
        nokoGif.src = `../assets/gif/noko/${nokoGifList[countGifNoko]}.gif`;
        nicoGif.style.opacity = '1';
        nokoGif.style.opacity = '1';
        countGifNico++;
        countGifNoko++;
        (function () {
            //contador do nico
            if (countGifNico >= nicoGifList.length) {
                countGifNico = 0;
            }
            if (countGifNico < 0) {
                countGifNico = nicoGifList.length;
            }
            //contador do noko
            if (countGifNoko >= nokoGifList.length) {
                countGifNoko = 0;
            }
            if (countGifNoko < 0) {
                countGifNoko = nokoGifList.length;
            }
        })();
    }

    setTimeout(function () {
        nicoTemp.innerText = `${temperatura[0]}˚C`;
        nokoTemp.innerText = `${temperatura[1]}˚C`;
    }, 1000);

    left.addEventListener("click", function () {
        count--;
        iOrder();
        changeSpotify();
    })
    right.addEventListener("click", function () {
        count++;
        iOrder();
        changeSpotify();
    });

    window.onload = function () {
        changeGif();
        createSpotify();
        setInterval(function () {
            nicoGif.style.opacity = '0';
            nokoGif.style.opacity = '0';
            setTimeout(function () {
                changeGif();
            }, 600);
        }, 6500);
    }
});