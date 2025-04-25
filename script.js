// Array to store video names and their respective links
const videoData = [
    {
        title: "Super Dragon Ball Movie",
        link: "https://drive.google.com/uc?export=download&id=1CCs06Ok3qo6k9B-SmgCeJS5950ZsUOot" // The provided Google Drive link
    }
];

// Dynamically generate the list of video names
const videoList = document.getElementById("video-list");

videoData.forEach((video, index) => {
    const videoItem = document.createElement("li");
    videoItem.textContent = video.title;
    videoItem.onclick = function() {
        loadVideo(video);
    };
    videoList.appendChild(videoItem);
});

// Load video into the player
function loadVideo(video) {
    const player = document.getElementById("video-player");
    const title = document.getElementById("video-title");
    player.src = video.link;
    title.textContent = video.title;
}

// Play the video
function playVideo() {
    const player = document.getElementById("video-player");
    player.play();
}

// Pause the video
function pauseVideo() {
    const player = document.getElementById("video-player");
    player.pause();
}

// Skip time in the video (forward or backward by 10 seconds)
function skip(seconds) {
    const player = document.getElementById("video-player");
    player.currentTime += seconds;
}
