function showImage(imageSrc, description) {
    document.getElementById("selected-image").src = imageSrc;
    document.getElementById("image-description").innerText = description;
    document.getElementById("selected-image-container").style.display = "block";
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    let modeBtn = document.getElementById("mode-btn");
    if (document.body.classList.contains("dark-mode")) {
        modeBtn.innerText = "🌙 Dark Mode";
    } else {
        modeBtn.innerText = " Light Mode";
    }
}
