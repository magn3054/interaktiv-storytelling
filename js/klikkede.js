"use strict;"

function klikkede(event) {
    const id = event.target.id;

    // Get the clicked items from session storage or initialize an empty array
    let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];

    // Add the clicked ID if it isn't already in the list
    if (!clickedItems.includes(id)) {
        clickedItems.push(id);
        sessionStorage.setItem('clickedItems', JSON.stringify(clickedItems));
    }

    // Check if all elements in the list have been clicked
    // checkAllClicked();
}

// The list of IDs to track
const planetliste = [
    "sun",
    "c-mercury",
    "c-venus",
    "c-earth",
    "c-mars",
    "c-jupiter",
    "c-saturn",
    "c-uranus",
    "c-neptune"
];

// Function to check if all IDs in the list are clicked
function checkAllClicked() {
    const clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];

    // Check if all elements in `planetliste` are in `clickedItems`
    const allClicked = planetliste.every(id => clickedItems.includes(id));

    if (allClicked) {
        // Show the modal
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach click handlers to elements with IDs
    document.querySelectorAll('[id]').forEach(element => {
        element.addEventListener('click', klikkede);
    });

    // Re-check the state on page load
    checkAllClicked();
});