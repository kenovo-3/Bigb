// Array to store video names and their respective YouTube embed URLs
const videoData = [
    {
        title: "sinchan",
        link: "https://youtu.be/nLF_Lw_pHzo?feature=shared" // YouTube Embed link (use your actual video link)
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
    // YouTube videos don't directly support skipping through JS like this. 
    // This function might need to use YouTube's API to actually control video time.
    alert("Skipping time requires YouTube API implementation.");
}
