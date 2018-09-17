// Récupère les éléments du DOM
const btn = document.getElementById("myBtn");
const input = document.getElementById("myInput");
const meteo = document.getElementById('meteo');
const myForm = document.getElementById("myForm");

// Permet d'utiliser "Entrée" sans envoyer le formulaire
const formSubmit = function(event) {
    event.preventDefault();
    getTown();
};

const getTown = function(){
    getWeather(input.value);
};

// Gère les evènements (clic sur le bouton et "Entrée" dans l'input)
myForm.addEventListener("submit", formSubmit, true);
btn.addEventListener("click", getTown, true);

// Récupère les données et les affiche
function getWeather(town){
    // Interroge l'api openWeather avec la ville entrée en paramètre
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9ec2fae71f20bc96dc9154a4ab5db5e`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Arrondi la température à un nombre après la virgule
            let temp = (data.main.temp - 273.15).toFixed(1) + "°C";
            // Affiche la météo | description + température
            meteo.innerHTML = data.weather[0].description + "<br>" + temp;
        }
    );
}
