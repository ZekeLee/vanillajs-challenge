const API_KEY = '06ceebc2c9dd7e0f781b193b102f1223';

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const iconUrl = 'http://openweathermap.org/img/wn/';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.weather[0].icon);
      const $city = document.getElementById('city');
      const $weather = document.getElementById('weather');
      const weatherIcon = data.weather[0].icon;

      $city.innerText = `${data.name}, ${data.sys.country}`;
      $weather.innerHTML = `<img src='${iconUrl}${weatherIcon}@2x.png' alt='${data.weather[0].main}'>${data.main.temp}℃`;
    });
};
const onGeoError = () => {
  alert(`Can't find you. No weather for you😭`);
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
