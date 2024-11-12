/* https://elevenlabs.io/app/speech-synthesis/text-to-speech  Stemme: Jessica*/
"use strict;"

let selectedPlanet = ""; // Fungerer som en global placeholder for den valgte planet fordi koden afhænger af 'information.js'
const audio = new Audio();
const mund = document.getElementById("info-astra");

function tal() {
    fetch('./json/planet_facts.json')
        .then(response => response.json())
        .then(jsonData => { // Henter fakta fra JSON-filen 

            let undertekster = jsonData[selectedPlanet].short_facts;
            let audioDuration = jsonData[selectedPlanet].audio_duration;

            const taleBoble = document.getElementById("speech");
            const speechBubble = document.querySelector(".speech-bubble");
            const speechButton = document.querySelector(".btn");

            // Funktion til at vise hver fakta én ad gangen
            function displayFacts(index) {
                if (index < undertekster.length) {

                    mund.src = "/img/talking-gif.gif"; // Skifter til gif af Astra der taler
                    speechButton.style.display = "none" 

                    // Vis den passende fakta fra rækken
                    taleBoble.innerHTML = `<p>${undertekster[index]}</p>`;

                    const wordCount = undertekster[index].split(" ").length;
                    const displayTimePerWord = 350; // 350 ms pr. ord
                    const totalDisplayTime = audioDuration * 1000;

                    // Beregner tiden for den nuværende fakta ud fra antal ord og overordnet tid på lydfilen
                    const timeForCurrentFact = (wordCount * displayTimePerWord / totalDisplayTime) * totalDisplayTime;

                    // Sæt en timeout før den næste fakta
                    setTimeout(() => {
                        // Skifter tilbage til stillbillede af Astra
                        mund.src = "/img/talking-still.png";
                        // Fjerner den nuværende fakta
                        taleBoble.innerHTML = "";

                        // Går videre til den næste fakta
                        displayFacts(index + 1);
                    }, timeForCurrentFact);
                } else {
                    // Skjuler taleboblen efter den sidste fakta
                    speechBubble.style.display = "none";
                    speechButton.style.display = "flex"    
                }
            }

            // Starter funktionen over med parameteret nul så første fakta i rækken starter med at blive vidst
            displayFacts(0);
        });

    const taleBoble = document.querySelector(".speech-bubble");

    taleBoble.style.display = "flex";

    // Vælg planetens lydfil baseret på den valgte planet
    switch (selectedPlanet) {
        case "solen":
            audio.src = "/audio/solen.mp3";
            break;
        case "merkur":
            audio.src = "/audio/merkur.mp3";
            break;
        case "venus":
            audio.src = "/audio/venus.mp3";
            break;
        case "jorden":
            audio.src = "/audio/jorden.mp3";
            break;
        case "mars":
            audio.src = "/audio/mars.mp3";
            break;
        case "jupiter":
            audio.src = "/audio/jupiter.mp3";
            break;
        case "saturn":
            audio.src = "/audio/saturn.mp3";
            break;
        case "uranus":
            audio.src = "/audio/uranus.mp3";
            break;
        case "neptun":
            audio.src = "/audio/neptun.mp3";
            break;
    }

    // Afspil den valgte lyd
    audio.play();
}
