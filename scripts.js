function showAlert() {
    alert('This is a popup alert!');
}

function showTime() {
    const timeDisplay = document.getElementById('time-display');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    timeDisplay.textContent = `Current time is: ${formattedTime}`;
}

function delayedAlert() {
    setTimeout(function() {
        alert('This is a delayed popup alert after 5 seconds.');
    }, 5000); // 5000 milliseconds = 5 seconds
}