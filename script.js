
const apiKey = 'YOUR_API_KEY';
const channelId = 'UCnX0sycKqRxvP4fxcVZlW1A'; // Abu Yusuf Alhamdy's channel ID
const videoContainer = document.getElementById('videos');

async function fetchVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`);
    const data = await response.json();

    data.items.forEach(item => {
        if (item.id.kind === 'youtube#video') {
            const videoId = item.id.videoId;
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
            videoContainer.appendChild(videoCard);
        }
    });
}

fetchVideos();
