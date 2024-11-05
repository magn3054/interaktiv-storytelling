const planetContainer = document.querySelector('.planet-container');
let angle = 0;

document.getElementById('next').addEventListener('click', () => {
    angle -= 45; // Adjust rotation by 45 degrees
    planetContainer.style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    angle += 45;
    planetContainer.style.transform = `rotateY(${angle}deg)`;
});