// Definer kartets grenser for Norge
var southWest = L.latLng(57.0, 4.0);
var northEast = L.latLng(71.5, 31.0);
var bounds = L.latLngBounds(southWest, northEast);

// Initialiser kartet med grensene
var map = L.map('map', {
    center: [64.5, 11],
    zoom: 5,
    minZoom: 5,
    maxZoom: 10,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
});

// Legg til OpenStreetMap-fliser
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Markører
//  Bodø Glimt Fotballklubb
var bodoglimtMarker = L.marker([67.2828, 14.4049]).addTo(map);
bodoglimtMarker.bindPopup("<b>Bodø Glimt</b><br>Fotballklubb i Bodø.");

// Kvik Halden Fotballklubb
var kvikHaldenMarker = L.marker([59.1202, 11.3771]).addTo(map);
kvikHaldenMarker.bindPopup("<b>Kvik Halden</b><br>Fotballklubb i Halden.");

// L Idd Fotballklubb
var iddMarker = L.marker([59.1031, 11.4687]).addTo(map);
iddMarker.bindPopup("<b>Idd Fotballklubb</b><br>Fotballklubb i Idd, Halden.");

//  Mjølner Fotballklubb
var mjolnerMarker = L.marker([68.4350, 17.4299]).addTo(map);
mjolnerMarker.bindPopup("<b>Mjølner</b><br>Fotballklubb i Narvik.");

//  Fredrikstad Fotballklubb
var fredrikstadMarker = L.marker([59.2075, 10.9546]).addTo(map);
fredrikstadMarker.bindPopup("<b>Fredrikstad FK</b><br>Fotballklubb i Fredrikstad.");




// Håndter klikkhendelser på kartet
function onMapClick(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent("Du klikket på kartet ved " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);