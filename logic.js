document.addEventListener('DOMContentLoaded', function() {
    const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // Si la cuenta regresiva termina, muestra "EXPIRED"
        if (distance < 0) {
            clearInterval(interval);
            document.querySelector(".countdown").innerHTML = "EXPIRED";
        }
    }

    // Actualiza el contador al cargar la página
    updateCountdown();

    // Actualiza el contador cada segundo
    const interval = setInterval(updateCountdown, 1000);
});
