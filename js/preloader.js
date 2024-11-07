"use strict;"

document.addEventListener("DOMContentLoaded", () => {
    // Array af billeder til preload
    const imageUrls = [
        "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
        "https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg",
        "https://www.solarsystemscope.com/textures/download/2k_mars.jpg",
        "https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg",
        "https://www.solarsystemscope.com/textures/download/2k_saturn.jpg",
        "https://www.solarsystemscope.com/textures/download/2k_uranus.jpg",
        "https://www.solarsystemscope.com/textures/download/2k_neptune.jpg"
    ];

    // looper igennem arrayet og loader billederne
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});
