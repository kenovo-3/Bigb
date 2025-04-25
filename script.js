const videoData = [
    {
        title: "Super Dragon Ball Movie",
        link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Shinchan",
        link: "https://youtu.be/nLF_Lw_pHzo?feature=shared" // Replace this with your actual Shinchan video embed link
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

// Load video into the player (YouTube embed)
function loadVideo(video) {
    const playerContainer = document.getElementById("video-player-container");
    const title = document.getElementById("video-title");
    playerContainer.innerHTML = `<iframe width="560" height="315" src="${video.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    title.textContent = video.title;
}

// Play the video
function playVideo() {
    const iframe = document.querySelector("iframe");
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc + "?autoplay=1"; // Append autoplay to the YouTube embed URL
}

// Pause the video
function pauseVideo() {
    const iframe = document.querySelector("iframe");
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc.replace('?autoplay=1', ''); // Remove autoplay to pause
}

// Skip time in the video (forward or backward by 10 seconds)
function skip(seconds) {
    alert("Skipping time requires YouTube API implementation.");
}
