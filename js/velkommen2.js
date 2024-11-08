"use strict;"

const audio = new Audio();
// const mund = document.getElementById("info-astra");

function handleClick() {
  document.getElementById('astra-standby').style.display = 'none';
  document.getElementById('astra-talking').style.display = 'flex';
  // mund.src = "/img/talking-gif.gif"; // Skift fra vink til gif af Astra der taler

  audio.src = "/audio/velkommen.mp3"; // afspiller lyden fra velkommen.mp3
  audio.play();
  audio.onended = ()=> {
    document.getElementById('astra-standby').style.display = 'flex';
    document.getElementById('astra-talking').style.display = 'none';
    document.getElementById('astra-standby').style.display = 'none';
    document.getElementById('spaceship').src = 'img/full-spaceship.png';
    document.getElementById('spaceship').style.animation = 'takeoff 2s ease-in-out forwards';
  };
}

