



  var map = L.map('map').setView([64.5, 11.5], 5); // Sentrum av Norge

  // Legg til et bakgrunnskart (tiles)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-bidragsytere'
  }).addTo(map);




