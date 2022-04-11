// HEADER TIME 
var current = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#pTime").text(current);

// LOCAL STORAGE STUFF
var saveButton = document.querySelectorAll(".saveButton");
var inputBox = document.querySelectorAll(".inputBox")

function checkTime(){
    var time = moment().hours()
    for (let i = 9; i <= 17; i++) {
        const element = array[i];
        
    }

}

function storedProject(number) {
    var userInput = document.getElementById("inputBox-"+ number).value;
    localStorage.setItem("inputBox-"+ number,JSON.stringify(userInput));
}

function showProject(number) {
    var projectText = JSON.parse(localStorage.getItem("inputBox-"+ number));
    if (projectText !== null) {
        document.getElementById("inputBox-"+ number).value = projectText
    }
}

// SAVE BUTTON LISTENER
saveButton.forEach(function(btn){
    btn.addEventListener("click", function (event) {
        var number = event.target.getAttribute("id").split("-")[1]
        event.preventDefault();
        storedProject(number);
        showProject(number);
    });
})

function init() {
    for (let i = 1; i <= 9; i++) {
        showProject(i); 
    }
}
init();