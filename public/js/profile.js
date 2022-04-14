var sheesh = document.getElementById("entries");
var dateValue = document.getElementById("date");
var submitbttn = document.getElementById("submitBtn");
var deletebttnarr = document.getElementsByClassName("delete-btn");

var n = new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();

dateValue.innerHTML = m + "/" + d + "/" + y;

const sendData = async (event) => {
    try {
        event.preventDefault();
        var thoughts = document.getElementById("jo-entry").value; 
    console.log("send data");
    console.log(thoughts);

 const response = await fetch(`/api/profiles`, {
    method: 'POST',
    body: JSON.stringify({thoughts}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    
    console.log(response)
  } else {
    alert('Failed to post data');
  }
    } catch (err) {
        console.log(err);
    }
};

const delData = async (entryId) => {
  try { 
    
   console.log("delete data");
   console.log("");

   console.log(entryId);
  // const entryId = this.getAttribute('id');

   const response = await fetch(`/api/profiles/${entryId}`, {
    method: 'DELETE',
   
  });

  if (response.ok) {
    
    // console.log(response)
    //document.location.replace('/profile');
    //swal("", "Your journal entry was deleted", "success");
  } else {
    alert('Failed to post data');
  }

  }
 catch (err) {
  console.log(err);
}

};

submitbttn.addEventListener("click", sendData);
if(deletebttnarr.length !== 0) {
  console.log(deletebttnarr);

  
  for (let i = 0; i < deletebttnarr.length; i++) {
    const attr = (deletebttnarr[i].getAttribute('id'));
     deletebttnarr[i].addEventListener("click", delData(attr));//(deletebttnarr[i].getAttribute('id')));  
  }
  //  deletebttnarr.forEach((dEl) => {
  //    dEl.addEventListener("click", delData);    
  //  });
}

    