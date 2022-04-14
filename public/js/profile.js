var dateValue = document.getElementById("date");
var submitbttn = document.getElementById("submitBtn");
var deletebttnarr = document.getElementsByClassName("delete-btn");

var n = new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();

dateValue.innerHTML = "Date: "+ m + "/" + d + "/" + y;

const sendData = async (event) => {
  try {
    event.preventDefault();
    var thoughts = document.getElementById("jo-entry").value;

    const response = await fetch(`/api/profiles`, {
      method: 'POST',
      body: JSON.stringify({ thoughts }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/api/profiles');
    } else {
      alert('Failed to post data');
    }
  } catch (err) {
    console.log(err);
  }
};

const delData = async (event) => {
  try {
    if (event.target.hasAttribute('id')) {
      const entryId = event.target.getAttribute('id');

      const response = await fetch(`/api/profiles/${entryId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/api/profiles');
      } else {
        alert('Failed to post data');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

submitbttn.addEventListener("click", sendData);
if (deletebttnarr.length !== 0) {
  console.log(deletebttnarr);

  for (let i = 0; i < deletebttnarr.length; i++) {
    deletebttnarr[i].addEventListener("click", delData);
  }
}

