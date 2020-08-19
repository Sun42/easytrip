// const axios = require('axios').default;
var mymap;

// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    mymap = L.map('mapid').setView([lat, lon], 14);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    // 
    // https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20,
        name: 'tiles'
    }).addTo(mymap);
    // hihi c'est chez moi
    var marker = L.marker([45.7540085, 4.8314578]).addTo(mymap);
    //on peut mettre du css dans la popup
    marker.bindPopup("<p>Chez moi!</p>");

    let city_field = document.getElementById('city-field');
    let distance_field = document.getElementById('distance-field');
    let distance_value = document.getElementById('distance-value');
/*
    distance_field.addEventListener('change', async function () {
        console.log("ca passe");
         // Ici nous chercherons les coordonnées GPS de la ville saisie
         city = this.value;
         data = await getNominatimData(city);
          // On convertit la réponse en objet Javascript
          console.log(data.response);
         json_response = JSON.parse(response);
        
        // On stocke la latitude et la longitude dans la variable ville
        coordinates = [data[0].lat, data[0].lon];

        // On centre la carte sur la ville
        carte.panTo(coordinates);
    });*/

    distance_field.addEventListener('change', function() {
        distance = this.value
        distance_value.innerText = distance + "km"
    });
}

async function searchCoordinates() {
    const city = document.getElementById('city-field').value;
    data = await getNominatimData(city);
    lat = data.data[0].lat;
    lon = data.data[0].lon;
    full_name = data.data[0].display_name;
    adress = data.data[0].address
    console.log(data);
    coordinates = [lat, lon];
    
    // On centre la carte sur la ville
    mymap.panTo(coordinates);
}

async function getNominatimData(city) {
    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json&addressdetails=1&limit=1&polygon_svg=1`;
        // const url = `https://nominatim.openstreetmap.org/search?city=${city}&amenity=bar&format=json&addressdetails=1&limit=1&polygon_svg=1`;
        const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error(error);
    }
  }