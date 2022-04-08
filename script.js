// HEADER TIME 
var current = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#pTime").text(current);

// LOCAL STORAGE STUFF
var saveButton = document.getElementById("saveButton");
var inputBox = document.getElementById("#inputBox")

function storedProject() {
    var userInput = document.getElementById("inputBox").value;
    localStorage.setItem(JSON.stringify(userInput));
}

function showProject() {
    var projectText = JSON.parse(localStorage.getItem("inputBox"));
    if (projectText !== null) {
        document.getElementById("inputBox").innerHTML = projectText
    }
}

// SAVE BUTTON LISTENER
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    storedProject();
    showProject();
});

function init() {
    showProject();
}
init();