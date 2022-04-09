var videoLinks = document.querySelectorAll(".videos-link");

// async function relaxingVedio(event) {
//     const getData = await fetch('/api/users/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//       });
    
//       if (getData.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     };
 
 async function getVideoData() {
     console.log(this.getVideoData(id));
    const response = await fetch(`/api/dashboard/${this.id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
              });
            
              if (response.ok) {
                document.location.replace('/');
              } else {
                alert(response.statusText);
}
 };



videoLinks.forEach((link) => {
    console.log(link);
    link.addEventListener("click", getVideoData()); 

});