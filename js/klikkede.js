"use strict;"

function klikkede(event) {
    const id = event.target.id;
    let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];

    if (!clickedItems.includes(id)) {
        clickedItems.push(id);
        sessionStorage.setItem('clickedItems', JSON.stringify(clickedItems));
    }
}

const planetliste = [
    "sun", "c-mercury", "c-venus", "c-earth", "c-mars", "c-jupiter", "c-saturn", "c-uranus", "c-neptune"
];

function checkAllClicked() {
    const clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
    const allClicked = planetliste.every(id => clickedItems.includes(id));

    if (allClicked) {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[id]').forEach(element => {
        element.addEventListener('click', klikkede);
    });

    checkAllClicked();
});