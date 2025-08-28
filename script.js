// Digital Clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Quote Generator
const quotes = [
  "Keep learning, keep growing.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Dream big, start small, act now."
];
function newQuote() {
  const rand = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[rand];
}
