
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


document.addEventListener("DOMContentLoaded", function () {

    // "Read More" Toggle
    const readMoreToggle = document.querySelector(".read-more-toggle");
    const fullText = document.querySelector(".full-text");
    const readLessToggle = document.createElement("span"); // Create a new span for closing
    readLessToggle.classList.add("read-less-toggle");
    readLessToggle.innerText = "..."; // Set text to ellipsis
    readLessToggle.style.cursor = "pointer";
    readLessToggle.style.color = "slategray";
    readLessToggle.style.textDecoration = "underline";
    
    if (readMoreToggle && fullText) {
        readMoreToggle.addEventListener("click", function () {
            fullText.style.display = "block"; // Show full text
            readMoreToggle.style.display = "none"; // Hide the first ellipsis
            fullText.appendChild(readLessToggle); // Add the second ellipsis at the end
        });

        readLessToggle.addEventListener("click", function () {
            fullText.style.display = "none"; // Hide full text
            readMoreToggle.style.display = "inline"; // Show the first ellipsis again
            readLessToggle.remove(); // Remove the second ellipsis when collapsing
        });
    }
});



