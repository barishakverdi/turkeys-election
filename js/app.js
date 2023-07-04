// Target date and time
const targetDate = new Date("2028-05-07T00:00:00");

// Function to update the counter
function updateCounter() {
    const currentTime = new Date();

    // Calculate the remaining time
    const remainingTime = targetDate - currentTime;

    // Convert the remaining time to years, months, days, hours, minutes, and seconds
    const remainingYears = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 365));
    const remainingMonths = Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const remainingDays = Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the counter area
    document.getElementById("year").innerHTML = remainingYears.toString();
    document.getElementById("month").innerHTML = remainingMonths.toString();
    document.getElementById("day").innerHTML = remainingDays.toString();
    document.getElementById("hour").innerHTML = remainingHours.toString();
    document.getElementById("minute").innerHTML = remainingMinutes.toString();
    document.getElementById("second").innerHTML = remainingSeconds.toString();
}

// Initial counter update
updateCounter();

// Update the counter every second
setInterval(updateCounter, 1000);
