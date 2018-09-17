const weathersIcone = {
    "clear sky"             : "wi wi-day-sunny",
    "few clouds"            : "wi wi-day-cloudy",
    "scattered clouds"      : "wi wi-cloudy",
    "broken clouds"         : "wi wi-smoke",
    "shower rain"           : "wi wi-showers",
    "rain"                  : "wi wi-night-sleet",
    "thunderstorm"          : "wi wi-storm-showers",
    "snow"                  : "wi wi-snow",
    "mist"                  : "wi-day-fog",

};


const form  = document.querySelector('.form');
const input = document.querySelector('.form > input');
const ville = document.querySelector('.ville');

function displayWeather(city) {
window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=06b50d32565202dcd5d76bc954529d6b`)
    .then(resultat => resultat.json())
    .then(json => {
    const meteo = json;
    console.log(meteo);
    affichage(meteo)
    });
}


function affichage(meteo) {
    
    const city = meteo.name;
    const temp = meteo.main.temp;
    const description = meteo.weather[0].description;
    const icon = meteo.weather[0].icon;
   
    document.querySelector(".description").textContent = description;
    document.querySelector('.temp').textContent = Math.round(temp) + "°";
    document.querySelector('.ville').textContent = city;
    document.querySelector('.wi').className = weathersIcone[description];
}



function cityRecovery(e) {
    e.preventDefault();
    displayWeather(input.value);
    this.reset();
}


form.addEventListener("submit",cityRecovery);

