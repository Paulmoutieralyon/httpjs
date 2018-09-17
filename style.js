// Récupère 
const btn = document.getElementById("myBtn");
const input = document.getElementById("myInput");
const meteo = document.getElementById('meteo');
const myForm = document.getElementById("myForm");

//  "Entrée" 
const formSubmit = function(event) {
    event.preventDefault();
    getTown();
};

const getTown = function(){
    getWeather(input.value);
};


myForm.addEventListener("submit", formSubmit, true);
btn.addEventListener("click", getTown, true);


function getWeather(town){
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9ec2fae71f20bc96dc9154a4ab5db5e`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            
            let temp = (data.main.temp - 273.15).toFixed(1) + "°C";
          
            meteo.innerHTML = data.weather[0].description + "<br>" + temp;
        }
    );
}
