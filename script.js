function menuButton(x) {
  x.classList.toggle("change");


// Toggle the "open" class on the side panel
const sidePanel = document.getElementById("side-panel");
sidePanel.classList.toggle("open");
// Show or hide the overlay
const overlay = document.getElementById("overlay");
if (sidePanel.classList.contains("open")) {
 overlay.classList.add("show"); // Show the overlay
} else {
 overlay.classList.remove("show"); // Hide the overlay
}
}

function closeSidePanel() {
// Remove change class from the hamburger menu
const menuButton = document.querySelector(".container");
menuButton.classList.remove("change");

// Close side panel
const sidePanel = document.getElementById("side-panel");
sidePanel.classList.remove("open");

// Hide overlay
const overlay = document.getElementById("overlay");
overlay.classList.remove("show");
}

function counterDays() {
const last = new Date("2025-05-21"); // last day we won 

const updateCounter = () => {
  const now = new Date(); // Get current date and time each time the function runs

  const differenceInMS = now - last; // Difference in milliseconds

  const differenceInSeconds = Math.floor(differenceInMS / 1000); // Total seconds
  const differenceInMinutes = Math.floor(differenceInSeconds / 60); // Total minutes
  const differenceInHours = Math.floor(differenceInMinutes / 60); // Total hours
  const differenceInDays = Math.floor(differenceInHours / 24); // Total days

  const remainingHours = differenceInHours % 24; // Remaining hours
  const remainingMinutes = differenceInMinutes % 60; // Remaining minutes
  const remainingSeconds = differenceInSeconds % 60; // Remaining seconds

  // Log for debugging
  console.log(`Difference in days: ${differenceInDays}`);
  console.log(`Remaining hours: ${remainingHours}`);
  console.log(`Remaining minutes: ${remainingMinutes}`);
  console.log(`Remaining seconds: ${remainingSeconds}`);

  // Update the counter div with the result
  const counterDiv = document.getElementById("counter");
  counterDiv.innerHTML = `
    <div class="time-part">
      <span class="time-unit" id="days">${differenceInDays}</span>
    </div>
    <div class="time-part">
      <span class="time-unit" id="hours">${remainingHours}</span>
    </div>
    <div class="time-part">
      <span class="time-unit" id="minutes">${remainingMinutes}</span>
    </div>
    <div class="time-part">
      <span class="time-unit" id="seconds">${remainingSeconds}</span>
    </div>
  `;
};

// Initial update
updateCounter();

// Update the counter every second (1000 ms)
setInterval(updateCounter, 1000);
}

// Call function on page load
window.onload = counterDays;

var elements = document.getElementsByClassName("column");

var i;

