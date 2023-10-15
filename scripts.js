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
    }, 5000);
}

const fruits = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Kiwi", "Lemon", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon"];

function getRandomFruit() {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}

function addRandomFruits() {
    const fruitContainer = document.getElementById("fruit-container");

    const fruit1 = getRandomFruit();
    const fruit2 = getRandomFruit();

    fruitContainer.textContent = `Random Fruits: ${fruit1} and ${fruit2}`;
}

let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';

    setTimeout(nextSlide, 5000);
}

function nextSlide() {
    showSlide(++slideIndex);
}