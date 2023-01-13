// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

// Making array of objects
let song = [
    { songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Let me love you", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Let me love you", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let me love you", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Let me love you", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Let me love you", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Let me love you", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Let me love you", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Let me love you", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Let me love you", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]


// let audioElement = new Audio('songs/1.mp3');
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})