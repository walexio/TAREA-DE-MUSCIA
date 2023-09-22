
const songs = [
    { title: "besos", src: "archivos/music/BandoBoyz - Besos Ft. Swaggglock, Kidd Keo, Neelo - (Official Video).mp3" },
    { title: "olvidate", src: "archivos/music/Kidd Keo - Olvídate (Official Video).mp3" },
    { title: "celine", src: "archivos/music/Kidd Keo - Celine feat Ghost Killer Track -   (Official Video).mp3" }
];

const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audioPlayer");
const playerDetail = document.getElementById("playerDetail");
const searchInput = document.getElementById("searchInput");


function loadSongs() {
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.addEventListener("click", () => {
            playSong(index);
        });
        songList.appendChild(li);
    });
}


function playSong(index) {
    const selectedSong = songs[index];
    audioPlayer.src = selectedSong.src;
    playerDetail.textContent = `Reproduciendo: ${selectedSong.title}`;
    audioPlayer.play();
}


function searchSongs(query) {
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query.toLowerCase()));
    songList.innerHTML = "";
    filteredSongs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.addEventListener("click", () => {
            playSong(index);
        });
        songList.appendChild(li);
    });
}


loadSongs();


searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchSongs(query);
});
