<!-- 
    * tilpasset device 
    * 
-->

# Interaktiv-storytelling - Kom med Astra i rummet

## Sådan har vi brugt JSON

![Planeterne i rummet](img/json-output.png)

Med javascript henter vi vores JSON data ind i koden. Når en planet bliver valgt, gemmes den i parameteren **'planet'**.  

```Javascript
function info(planet) {
    fetch('./json/planet_facts.json')
        .then(response => response.json())
        .then(jsonData => {
            displayPlanetInfo(jsonData[planet], planet);
            selectedPlanet = planet;
        });
}
```

**'planet'** bliver brugt til at at specificere **objekt KEY**'en i JSON filen 

```JSON
"jorden": {
    "name": "Jorden",
    "diameter": "12742 km",
    "temperature": "-88/58°C",
    "gravity": "0,98 Newton",
    "mass": "5,9742*10^24 km3",
    "distance_from_earth": "0 km",
    "farve": "Blå og grøn",
    "color": "Blue and green",
    "order_from_sun": 3,
    "type": "klippeplaneter",
    "orbital_period": "365 dage",
    "day_length": "24 timer",
    "img": "/img/earth_map.png",
    "img2": "/img/earth_clouds.png",
    "fun_facts": [
      "Den eneste kendte planet med liv.",
      "Har en unik atmosfære med 21% ilt, som understøtter forskellige livsformer.",
      "Jordens hældning på aksen forårsager årstidsvariationer."
    ],
    "short_facts": [
      "Jorden.", 
      "Vores planet.", 
      "Årsagen til, at vi har forskellige årstider, er, at vores akse hælder en smule til siden.", 
      "Vi er også den eneste planet i universet, hvor mennesker har kendskab til liv."
    ],
    "audio_duration" : 12
  },
```

**objekt KEY**'en i dette tilfælde er jorden. Dens

<!-- keys bliver brugt til forskellige ting 
img bliver brugt
audio duration bliver også brugt med beregninger i forbindelse med
short facts som bliver hakket op -->