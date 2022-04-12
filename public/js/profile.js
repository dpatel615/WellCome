var button = document.getElementById("entries");
var info = document.getElementById("info").value; //.value was added// suggested by tutor
 //var delete = document.getElementByID("delete");
 // var update = document.getElementByID("update");



button.addEventListener("click", function buttonClick() {
    console.log(info.value)
    console.log("Was Good"); 

});

function editEntry(){
    fetch('/api/post')  // tutoring session //


}
 
async function submitBtn(){
const response = fetch('/api/post') // tutoring session //

}

// was instructed to add a global scope for functions & add asynchroinous functions //