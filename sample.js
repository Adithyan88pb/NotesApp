// fist pickup html elements
const notesContainer = document.querySelector(".not-container");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box")

// showNotes functioncalling
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// LocalStorage start
// update localstorage function
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);  // stringify is used to convert object into string format so that it can be stored in
}

// button clicked function
creatBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);
})

// delete button clicked function

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})