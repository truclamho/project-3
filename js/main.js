const cities = ["Tokyo", "Kyoto", "Nara", "Osaka"];
let cityContainer = document.querySelector('.city-names');
let sign1 = document.querySelector('.sign1');

let spinning = false;

function spinAndStop() {
  if (spinning) return; 
  spinning = true; 

  let citiesMarkup = cities.concat(cities).map(city => `<div>${city}</div>`).join('');
  cityContainer.innerHTML = citiesMarkup;

  cityContainer.style.animation = `spinCity 2s linear 3`;  

  setTimeout(() => {
    cityContainer.style.animation = "none";

    let randomCityIndex = Math.floor(Math.random() * cities.length);

    cityContainer.innerHTML = `<div>${cities[randomCityIndex]}</div>`;

    spinning = false;
  }, 2000); 
}

sign1.addEventListener('click', spinAndStop);

let clickCount = 0; 

window.addEventListener('click', function() {
  clickCount++;

  let lightBlue = `rgb(173, 216, 230)`; 
  let yellow = `rgb(255, 255, 0)`;     
  let orange = `rgb(244, 105, 6)`;       
  let purple = `rgb(41, 5, 74)`;       

  if (clickCount % 4 === 1) {
    document.body.style.background = `linear-gradient(141deg, ${lightBlue} 0%, ${yellow} 50%, ${orange} 100%)`;
  } else if (clickCount % 4 === 2) {
    document.body.style.background = `linear-gradient(141deg, ${yellow} 0%, ${orange} 50%, ${purple} 100%)`;
  } else if (clickCount % 4 === 3) {
    document.body.style.background = `linear-gradient(141deg, ${orange} 0%, ${purple} 50%, ${lightBlue} 100%)`;
  } else {
    document.body.style.background = `linear-gradient(141deg, ${purple} 0%, ${lightBlue} 50%, ${yellow} 100%)`;
  }
});
