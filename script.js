// ⏳ Timer Script – Since You Met
const timerEl = document.getElementById("timer");

// ✅ You met on 28 May 2025, 5:10 PM
const startDate = new Date("2025-05-28T17:10:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  timerEl.textContent = `❤️ Together Since: ${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateTimer, 1000);
updateTimer();
