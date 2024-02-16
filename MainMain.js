document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const addSpotify = document.querySelector(".addSpotify");
    const left = document.querySelector("#left");
    const right = document.getElementById("right");
    const playlists = ['https://open.spotify.com/embed/playlist/4Knctc7wEHBfqItvI3Z0CC?utm_source=generator', 'https://open.spotify.com/embed/playlist/3w0gZ6WZWfFZr4l9swUiTs?utm_source=generator', 'https://open.spotify.com/embed/playlist/1qmmVdDWtMUyWWALptrNKY?utm_source=generator']
    var i = 0;
    var count = 0;

    function iOrder() {
        if (count >= playlists.length) {
            count = 0;
        }
        if (count < 0) {
            count = playlists.length;
        } 
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


    createSpotify();
    left.addEventListener("click", function() {
        count--;
        iOrder();
        changeSpotify();
    })
    right.addEventListener("click", function () {
        count++;
        iOrder();
        changeSpotify();
    });

});



