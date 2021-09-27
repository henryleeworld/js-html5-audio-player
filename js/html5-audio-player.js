let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for (var i = 0; i < bandcampLinks.length; i++) {
    bandcampLinks[i].addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

let songElements = document.getElementsByClassName('song');

for (var i = 0; i < songElements.length; i++) {
    songElements[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#00A0FF';

        this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
        this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

        if (!this.classList.contains('amplitude-active-song-container')) {
            this.querySelectorAll('.play-button-container')[0].style.display = 'block';
        }

        this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
        this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
        this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
    });

    songElements[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '#FFFFFF';
        this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
        this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
        this.querySelectorAll('.play-button-container')[0].style.display = 'none';
        this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
        this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
        this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
    });

    songElements[i].addEventListener('click', function() {
        this.querySelectorAll('.play-button-container')[0].style.display = 'none';
    });
}

Amplitude.init({
    "songs": [{
            "name": "Fantastic",
            "artist": "鈴木あみ",
            "album": "Fantastic",
            "url": "music/fantastic.mp3",
            "cover_art_url": "images/fantastic-album-cover.jpg"
        },
        {
            "name": "JUST DREAM ON",
            "artist": "諸岡ケンジ&JACK BITES",
            "album": "機甲警察メタルジャック JUST DREAM ON",
            "url": "music/just-dream-on.mp3",
            "cover_art_url": "images/just-dream-on-album-cover.jpg"
        }
    ],
    "callbacks": {
        'play': function() {
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function() {
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
    waveforms: {
        sample_rate: 50
    }
});
if (document.getElementById('album-art')) {
    document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';
}