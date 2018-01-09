// Define a Function
function sayOuch() {
    alert('Oh heeeyyy');
}

// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');

// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;