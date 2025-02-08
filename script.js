document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("mode-btn");
    const body = document.body;

    function updateIcon() {
        toggleButton.innerHTML = body.classList.contains("dark-mode") ? "🌙" : "☀️";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        updateIcon();
    });

    updateIcon(); // Set correct icon on page load
});
