const people = document.querySelectorAll(".person");
const peopleContainer = document.querySelector(".people-container");


function checkScrollPosition() {
    const containerTop = peopleContainer.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.5; 

    if (containerTop < triggerPoint) {
        people.forEach(person => person.classList.add("red"));
    } else {
        people.forEach(person => person.classList.remove("red"));
    }
}

window.addEventListener("scroll", checkScrollPosition);




  var map = L.map('map').setView([64.5, 11.5], 5); // Sentrum av Norge

  // Legg til et bakgrunnskart (tiles)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-bidragsytere'
  }).addTo(map);




