jQuery(document).ready(function() {
    Parse.$ = jQuery;
    Parse.initialize("...", "...");

    $('.form-logout').on('submit', function (e) {
        //Prevent Default Submit Event//
        e.preventDefault();

        console.log("Performing submit");

        //logout current user//
        if (Parse.User.current()) {
            Parse.User.logOut();

        //checking if really logged out//
        if(Parse.user.current())
            console.log("Failed to log out!");
        }

        //redirect to sign in
        window.location.href = ".Sign_In.html";
    });

});

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.type = "submit";
btn.name = "entriesBtn"
document.body.appendChild(btn);

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.type = "delete";
btn.name = "deleteBtn";
document.body.appendChild(btn);

function ConfirmDelete()
{
    var x = confirm("Are you sure you want to delete?");
    if (x)
    return true;
    else
    return false;
}

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.type = "update";
btn.name = "updateBtn";
document.body.appendChild(btn);

btn.addEventListener("click", ()=>{
    if(btn.innerText === "Old") {
        btn.innerText = "New";
    } else {
        btn.innertext = "New";
    }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.handlebars'));
  });
  
  app.get('/api/terms', (req, res) => res.json(termData));
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });