"use strict";

function info(planet) {
    const infoscreen = document.getElementById("infoscreen");
    const milkyway = document.getElementById("milkyway");
    
    // Opretter et nyt videoelement til at vise en film om planeten 
    const movieElement = document.createElement("video");
    movieElement.id = "rocket-clip";
    movieElement.controls = false;
    movieElement.src = './img/flying-spaceship.mp4';
    document.querySelector("body").appendChild(movieElement);
    movieElement.autoplay = true;
    movieElement.onended = () => { // Skal være en callback funktion for ikke at stoppe videoen med det samme
        movieElement.remove();
    };

    // Skifter visningen, så informationsskærmen vises og Milky Way forsvinder
    setTimeout(() => {
        infoscreen.style.display = "grid";
        milkyway.style.display = "none";
    }, 2000);

    fetch('./json/planet_facts.json')
        .then(response => response.json())
        .then(jsonData => {
            // Viser oplysningerne for den valgte planet
            displayPlanetInfo(jsonData[planet], planet);
            selectedPlanet = planet;
        });

}

function displayPlanetInfo(data, planetName) {
    // Udfylder div'en med data for den valgte planet
    let planetImage = document.querySelector(".planet-image");
    planetImage.id = planetName;

    // Hvis planeten er Jorden, tilføjes et ekstra lag for skyer
    if (planetName === "jorden") {
        const cloudsDiv = document.createElement("div");
        cloudsDiv.className = "planet-image";
        cloudsDiv.id = "clouds";
        document.querySelector(".turning-planet").appendChild(cloudsDiv);
    }

    const planetTitle = document.getElementById("planet-title");
    planetTitle.innerHTML = planetName;

    const facta = document.getElementById("planet-facts");

    // Indsætter alle fakta for planeten i HTML
    facta.innerHTML = `
    <ul>
    <li>Diameter: ${data.diameter}</li>
    <li>Temperatur: ${data.temperature}</li>
    <li>Tyngdekraft: ${data.gravity}</li>
    <li>Masse: ${data.mass}</li>
    <li>Distance fra Jorden: ${data.distance_from_earth}</li>
    <li>Planetens farve: ${data.farve}</li>
    <li>Nr. ${data.order_from_sun} fra solen</li>
    <li>Planettype: ${data.type}</li>
    <li>Kredsløbstid: ${data.orbital_period}</li>
    <li>Dagslængde: ${data.day_length}</li>
    </ul>
    `;
    
    const breadText = document.getElementById("planet-text");

    // Indsætter alle fakta for planeten i HTML
    breadText.innerHTML = `${data.breadtext}`;

}

function crossAway() {
    const infoscreenAway = document.getElementById("infoscreen");
    const milkyAway = document.getElementById("milkyway");
    const factaAway = document.getElementById("planet-facts");
    const planetNameAway = document.getElementById("planet-title");
    const textAway = document.getElementById("planet-text")
    const taleBobleAway = document.querySelector(".speech-bubble");
    const tekstBobleAway = document.getElementById("speech");

    // Skjuler informationsskærmen og genskaber Milky Way visningen
    infoscreenAway.style.display = "none";
    milkyAway.style.display = "flex";
    planetNameAway.innerHTML = "";
    factaAway.innerHTML = "";
    textAway.innerHTML = "";

    // Fjerner eventuelle skyer, der blev tilføjet for Jorden
    if (document.getElementById("clouds")) {
        const cloudsDivAway = document.getElementById("clouds");
        cloudsDivAway.remove();
    }

    // Skjuler taleboblen og rydder tekstboblen
    taleBobleAway.style.display = "none"; 
    tekstBobleAway.innerHTML = "";

    // Nulstiller den valgte planet og stopper for animation og lyd
    selectedPlanet = "";
    audio.pause();
    audio.currentTime = 0;
    mund.src = "/img/talking-still.png";
    checkAllClicked();
}