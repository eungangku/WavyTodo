// openweathermap.org API

const API_KEY = "f50c83864869dd9da9d82ee5ddf3ca68";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const geolocation = {
        lat: lat,
        lon: lon
    }
    getWeather(geolocation);
    localStorage.setItem("geolocation", JSON.stringify(geolocation));
}

function onGeoFail() {
    alert("Failed to retrieve your geolocation!");
}

function getWeather(geolocation) {
    const lat = geolocation.lat;
    const lon = geolocation.lon;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = data.name;
        const weather = data.weather[0].main;

        const spanCity = document.querySelector("#city");
        const spanWeather = document.querySelector("#weather");

        spanCity.innerText = city;
        spanWeather.innerText = ", " + weather;
    })
}

const geolocation = localStorage.getItem("geolocation");
if (geolocation === null) {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
} else {
    getWeather(JSON.parse(geolocation));
}