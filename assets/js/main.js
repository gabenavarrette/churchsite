const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {

    menu.classList.toggle("open");

    toggle.textContent =
        menu.classList.contains("open")
            ? "✕"
            : "☰";

});

<script src="assets/js/main.js"></script>
