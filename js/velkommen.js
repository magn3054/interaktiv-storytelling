"use strict;"

const audio = new Audio();
const mund = document.getElementById("info-astra");

function handleClick() {
  document.querySelector('.velkommen-vink').style.display = 'none';
  document.getElementById('velkommen-tale').style.display = 'block';
  mund.src = "/img/talking-gif.gif"; // Skift fra vink til gif af Astra der taler
  audio.src = "/audio/velkommen.mp3"; // afspiller lyden fra velkommen.mp3
  audio.play();
  audio.onended = function() {
      mund.src = "/img/talking-still.png";   // skifter billedet tilbage til still når hun har snakket
  };
}

// kodning af video der flyver fra jorden

function showVideo(){
document.getElementById('velkommen-tale').style.display = 'none'; // Skjuler velkomst indholdet  
const video = document.getElementById ('takingOff'); //henter id'en fra videon og gøre den synlig
video.style.display = "block";
video.play();

video.onended = function(){
  window.location.href = "solsystem.html"; // Der tilføjes en eventlistener, som gør at den skifter til side, når videon er færdig
};
}