const audio = document.getElementById("audio");
const title = document.getElementById("title");
const songList = document.getElementById("songList");

// 👇 Create 35 songs with predictable names (Song1.mp3, Song2.mp3, etc.)
const songs = [
    {
      name: "Trusha",
      file: "songs/Song1.mp3",
      cover: "image/1.jpg"
    },
    {
      name: "Line without hook",
      file: "songs/Song2.mp3",
      cover: "image/2.jpg"

    }
  ];
  
let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audio.src = song.file;
    title.textContent = song.name;
  
    // ✅ THIS is what changes the image dynamically
    const cover = document.getElementById("cover");
    if (cover && song.cover) {
      cover.src = song.cover;
    }
  
    updateQueueDisplay();
  }
  
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function updateQueueDisplay() {
  songList.innerHTML = "";
  songs.forEach((song, i) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    if (i === currentSongIndex) li.classList.add("playing");

    li.addEventListener("click", () => {
      currentSongIndex = i;
      loadSong(currentSongIndex);
      audio.play();
    });

    songList.appendChild(li);
  });
}

// Initialize
loadSong(currentSongIndex);
