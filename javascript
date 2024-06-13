// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var trafficLayer, congestionLayer;

function loadYear(year) {
    // Load the data for the selected year
    console.log(`Loading data for year: ${year}`);
    // Fetch and update map layers accordingly
}

function toggleLayer(layer) {
    if (layer === 'traffic') {
        if (map.hasLayer(trafficLayer)) {
            map.removeLayer(trafficLayer);
        } else {
            trafficLayer = L.layerGroup([/* traffic data here */]).addTo(map);
        }
    } else if (layer === 'congestion') {
        if (map.hasLayer(congestionLayer)) {
            map.removeLayer(congestionLayer);
        } else {
            congestionLayer = L.layerGroup([/* congestion data here */]).addTo(map);
        }
    }
}
