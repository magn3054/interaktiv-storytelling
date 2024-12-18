"use strict;"

const body = document.querySelector('body');
const circleCount = 100; // antal stjerner

for (let i = 0; i < circleCount; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Giver et random tal mellem 2 og 5 til størrelsen af stjernen
    const size = Math.random() * 4 + 1;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    // Giver en random position til stjernen
    let x = `${Math.random() * 100}`;
    let y = `${Math.random() * 100}`;
    circle.style.top = `${x}%`;
    circle.style.left = `${y}%`;

    const delay = Math.random() * 5; // giv et random delay til animationen af stjernen
    circle.style.animationDelay = `${delay}s`;
    
    body.appendChild(circle);
}
