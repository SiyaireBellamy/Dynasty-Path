window.addEventListener("load", function() {
setTimeout(() => {
const loader = document.getElementById("loading-screen");
if(loader) loader.style.display = "none";
}, 2000);
});

function animateCounter(id, target) {
let count = 0;
const element = document.getElementById(id);
const interval = setInterval(() => {
count++;
element.textContent = count;
if (count >= target) clearInterval(interval);
}, 30);
}

window.addEventListener("load", function() {
animateCounter("members", 100);
});
