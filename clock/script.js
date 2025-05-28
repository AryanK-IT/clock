(() => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme") || "dark";
    body.setAttribute("data-theme", savedTheme);
    themeToggle.textContent = savedTheme === "dark" ? "light mode" : "dark mode";

    themeToggle.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        body.setAttribute("data-theme", newTheme);
        themeToggle.textContent = newTheme === "dark" ? "light mode" : "dark mode";
        localStorage.setItem("theme", newTheme);
    });

    function clockTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        document.getElementById("clock").textContent = `${hours} : ${minutes} : ${seconds}`;
    }

    setInterval(clockTime, 1000);
    clockTime(); // Initial call

    const timerDiv = document.getElementById("timerDiv");
    const stopWatchDiv = document.getElementById("stopWatchDiv");

    window.toggleTimer = function () {
        stopWatchDiv.style.display = "none";
        timerDiv.style.display = (timerDiv.style.display === "none" || timerDiv.style.display === "") ? "block" : "none";
    };

    window.toggleStopWatch = function () {
        timerDiv.style.display = "none";
        stopWatchDiv.style.display = (stopWatchDiv.style.display === "none" || stopWatchDiv.style.display === "") ? "block" : "none";
    };
})();
