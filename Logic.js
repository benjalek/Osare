
// Inicia los contadores en blanco
document.getElementById("days").innerText = '';
document.getElementById("hours").innerText = '';
document.getElementById("minutes").innerText = '';
document.getElementById("seconds").innerText = '';

// Calcula el tiempo restante
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
const now = new Date().getTime();
const distance = countdownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Actualiza los elementos del DOM
document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
