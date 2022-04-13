var button = document.getElementById("entries");
 // var info = document.getElementById("info").value;
// var info = document.querySelector('#jo-entry').value;
 //var delete = document.getElementByID("delete");
 // var update = document.getElementByID("update");
var submitbttn = document.getElementById("submitBtn");
// const name = document.querySelector('#project-name').value.trim();

// button.addEventListener("click", function buttonClick() {
//     console.log(info.value)
//     console.log("Was Good"); 

// })

const sendData = async (event) => {
    try {
        event.preventDefault();
        var info = document.getElementById("jo-entry").value; // yessssss!
    console.log("send data");
    console.log(info);

 const response = await fetch(`/api/profiles`, {
    method: 'POST',
    body: JSON.stringify({info}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // document.location.replace('/profile'); 
    console.log(response)
  } else {
    alert('Failed to post data');
  }
    } catch (err) {
        console.log(err);
    }
};

// was instructed to add a global scope for functions & add asynchroinous functions //

submitbttn.addEventListener("click", sendData);
    
    