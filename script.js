// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem")); // as it is a HTML collection we cannot apply foreach loop on this, that's why we need to convert it into Array
let masterSongName = document.getElementById("masterSongName");

// Making array of objects
let songs = [
    { songName: "Uff Teri Adaa", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Ghungroo(Remix)", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg" },
    { songName: "MANJHA TERA", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg" },
    { songName: "Safari", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg" },
    { songName: "Coldplay X BTS - My Universe", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg" },
    { songName: "Señorita", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg" },
    { songName: "Makhna", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg" },
    { songName: "Naacho Naacho", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg" },
    { songName: "Party On My Mind", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg" },
    { songName: "One Dance", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg" },
]

// Setting name and cover of songs
// here forEach taking a function with element and index
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    // updating the duration
    // a = new Audio(songs[i].filePath);
    // element.getElementsByClassName("timestamp")[0].innerHTML = a.duration;
});


// Handle play/pause click for masterPlay button
masterPlay.addEventListener('click', () => {

    // document.getElementsByClassName("songItemPLay")[songIndex].classList.toggle('fa-pause-circle');

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;

        // handling small buttons
        document.getElementsByClassName("songItemPLay")[songIndex].classList.remove('fa-play-circle');
        document.getElementsByClassName("songItemPLay")[songIndex].classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;

        // handling small buttons
        document.getElementsByClassName("songItemPLay")[songIndex].classList.remove('fa-pause-circle');
        document.getElementsByClassName("songItemPLay")[songIndex].classList.add('fa-play-circle');
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


// Handling the small playbuttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPLay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPLay")).forEach((element, i) => {
    element.addEventListener("click", (event) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllPlays();
            event.target.classList.remove("fa-play-circle");
            event.target.classList.add("fa-pause-circle");
            songIndex = i;
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.play();
            gif.style.opacity = 1;
            audioElement.currentTime = 0;
            masterSongName.innerText = songs[songIndex].songName;
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        }
        else {
            // makeAllPlays();
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity = 0;
            event.target.classList.remove("fa-pause-circle");
            event.target.classList.add("fa-play-circle");
        }
    })
})


// Function to make play and pause using small play buttons
const playPause = () => {
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

}


// Handling previous and next song play button
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex === 0)
        songIndex = 9;
    else
        songIndex -= 1;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;

    masterSongName.innerText = songs[songIndex].songName;

    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // console.log(songIndex + 1);
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex === 9)
        songIndex = 0;
    else
        songIndex += 1;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;

    masterSongName.innerText = songs[songIndex].songName;

    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // console.log(songIndex + 1);
})

// changing song name under seekbar