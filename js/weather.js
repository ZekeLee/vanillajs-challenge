const API_KEY = '06ceebc2c9dd7e0f781b193b102f1223';

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const $city = document.getElementById('city');
      const $weather = document.getElementById('weather');
      $city.innerText = `${data.name}, ${data.sys.country}`;
      $weather.innerText = `${data.weather[0].main}, ${data.main.temp}℃`;
    });
};
const onGeoError = () => {
  alert(`Can't find you. No weather for you😭`);
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
