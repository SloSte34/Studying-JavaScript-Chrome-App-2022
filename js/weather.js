function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const WEATHER_API_KEY = '';
  console.log(WEATHER_API_KEY);
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:nth-child(2)');
      const temp = document.querySelector('#weather span:nth-child(3)');
      city.innerText = `${data.name} / `;
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = ` / ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("Can't Find Your Location. No Weatehr Information.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
