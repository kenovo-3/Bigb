// Function to load video into the player
function loadVideo(video) {
    const playerContainer = document.getElementById("video-player-container");
    const title = document.getElementById("video-title");
    
    playerContainer.innerHTML = `<iframe width="560" height="315" src="${video.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    title.textContent = video.title;
}

// Display video dashboard with clickable video links
const dashboard = document.getElementById('dashboard');
videoData.forEach(video => {
    const videoLink = document.createElement('button');
    videoLink.textContent = video.title;
    videoLink.onclick = () => loadVideo(video);
    dashboard.appendChild(videoLink);
});

// Controls for the video player
let videoElement = document.querySelector('iframe');

function playVideo() {
    if (videoElement) {
        videoElement.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
}

function pauseVideo() {
    if (videoElement) {
        videoElement.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
}

function skip(seconds) {
    if (videoElement) {
        const currentTime = videoElement.contentWindow.postMessage('{"event":"command","func":"getCurrentTime","args":""}', '*');
        const newTime = currentTime + seconds;
        videoElement.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${newTime}, true]}`, '*');
    }
}
