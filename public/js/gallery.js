const videoArr = document.querySelectorAll('.video-url');
const saveBttn = document.querySelector('#sFav');
let videoID;
let videoSrc;
let videoAlt;

// Function to add the iframe tag to show youtube video and then pop the modal
function playVideo() {
    let videoPlayer = document.querySelector('.video-player');
    let allVideos = document.querySelector('.custom-row');
    allVideos.style.display = 'none';
    videoPlayer.innerHTML = "";
    
    videoID = this.getAttribute('id');
    videoSrc = this.getAttribute('src');
    videoAlt = this.getAttribute('data-value');
    
    videoPlayer.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoID}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><div><button type="button" class="btn btn-primary" id="sFav" onclick="saveFavorite()">Save</button></div>`;
};

// Function to save video details as favorites
const saveFavorite = async () => {
    try {
        const response = await fetch('/api/favorites', {
            method: 'POST',
            body: JSON.stringify({ videoAlt, videoSrc, videoID }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            swal("", "Saved as favorite", "success");
            // swal("Good job!", "You clicked the button!", "success");
            // document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.log(err);
    }
};

// Event Listeners
if (videoArr !== null) {
    videoArr.forEach((video) => {
        video.addEventListener('click', playVideo);
    });
}

if (saveBttn !== null) {
    saveBttn.addEventListener('click', saveFavorite);
}
