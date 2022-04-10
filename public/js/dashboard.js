var videoLinks = document.querySelectorAll(".video-links");

const getVideoData = async (event) => {
    // event.preventDefault();
    const catName = event.target.getAttribute('data-id');

    // console.log(id);
    const response = await fetch(`/api/dashboard/${catName}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
        // body: JSON.stringify(data)
    });
    // const jsonVal = await response.json();
    // console.log(jsonVal);
    if(response.ok){
        // console.log(jsonVal);
        return await response.json();
        // document.location.replace('/dashboard');
    }else{
        alert(response.statusText);
    }
};

videoLinks.forEach((vlink) => {
    console.log(vlink);
    vlink.addEventListener("click", getVideoData);
});