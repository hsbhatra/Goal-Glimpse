// ADD TASKS TO LIST

// Used to take input from user.
const inputBox = document.getElementById('input-box');
// Used to display output
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// CHECK-UNCHECK FEATURE & DELETE TASK FUNCTION

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// SAVE DATA

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// DISPLAY DATA

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Show loader on page load and hide after 2 seconds
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    setTimeout(function() {
        loader.style.display = 'none';
        mainContent.style.display = 'flex';
    }, 1500);
});
