const videoData = [
    {
        title: "Super Dragon Ball Movie",
        link: "https://vimeo.com/1078621375/20a79b34d8?share=copy"  // Replace with actual Vimeo embed link
    },
    {
        title: "Naruto vs Sasuke",
        link: "https://player.vimeo.com/video/987654321"  // Replace with actual Vimeo embed link
    },
    {
        title: "One Piece Adventure",
        link: "https://player.vimeo.com/video/1122334455"  // Replace with actual Vimeo embed link
    }
];

// Function to load video into the player
function loadVideo(video) {
    const playerContainer = document.getElementById("video-player-container");
    const title = document.getElementById("video-title");
    
    playerContainer.innerHTML = `<iframe width="560" height="315" src="${video.link}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    title.textContent = video.title;
}

// Display video dashboard with clickable video links
const dashboard = document.getElementById('dashboard');
function displayVideos(videos) {
    dashboard.innerHTML = `<input type="text" id="search-bar" placeholder="Search for videos..." oninput="filterVideos()">`;  // Reset search bar
    videos.forEach(video => {
        const videoLink = document.createElement('button');
        videoLink.textContent = video.title;
        videoLink.onclick = () => loadVideo(video);
        dashboard.appendChild(videoLink);
    });
}

displayVideos(videoData);

// Function to filter videos based on search input
function filterVideos() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const filteredVideos = videoData.filter(video => video.title.toLowerCase().includes(searchQuery));
    displayVideos(filteredVideos);
}

// Controls for the video player
let videoElement = document.querySelector('iframe');

function playVideo() {
    // Use Vimeo API to play video (if applicable)
    const player = new Vimeo.Player(videoElement);
    player.play();
}

function pauseVideo() {
    // Use Vimeo API to pause video (if applicable)
    const player = new Vimeo.Player(videoElement);
    player.pause();
}

function skip(seconds) {
    // Vimeo API doesn't provide a direct skip-to method, but you can get the current time and seek to a new time.
    const player = new Vimeo.Player(videoElement);
    player.getCurrentTime().then(currentTime => {
        const newTime = currentTime + seconds;
        player.setCurrentTime(newTime);
    });
}
