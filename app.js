const input = document.querySelector(".inp");
const button = document.getElementById("Btn");
const img = document.querySelector(".Img");
const temp = document.querySelector(".degree");
const weather = document.querySelector(".WEATHER");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const min_temp = document.getElementById("min-temp");
const high_temp = document.getElementById("high-temp");
const cityname = document.getElementsByClassName("city");
const details = document.getElementsByClassName("details")[0];

async function checkweather(city) {
  const api_key = "5848bd2d5412c5893a31250bb640b8b5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  // console.log(weather_data);
  // console.log(cityname[0]);

  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  weather.innerHTML = `${weather_data.weather[0].main}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind.innerHTML = `${weather_data.wind.speed}Km/H`;
  min_temp.innerHTML = `${Math.round(weather_data.main.temp_min - 273.15)}°C`;
  high_temp.innerHTML = `${Math.round(weather_data.main.temp_max - 273.15)}°C`;
  cityname[0].innerHTML = `${weather_data.name}`;
  switch (weather_data.weather[0].main) {
    case "Clouds":
      img.src = "/weather app using javascript/weather-img/cloud.png";
      break;
    case "Mist":
      img.src = "/weather app using javascript/weather-img/mist.png";
      break;
    case "Clear":
      img.src = "/weather app using javascript/weather-img/sun.png";
      break;
    case "Rain":
      img.src = "/weather app using javascript/weather-img/rain.png";
      break;
    case "sun with rain":
      img.src = "/weather app using javascript/weather-img/sun with rain.png";
      break;
    case "Snow":
      img.src = "/weather app using javascript/weather-img/snow.png";
      break;
    case "Smoke":
      img.src = "/weather app using javascript/weather-img/sun with cloud.png";
      break;
  }
}

if (input.value == "") {
  console.log(input.value);
}

button.addEventListener("click", () => {
  checkweather(input.value);
  details.removeAttribute("class", "hidden");
});
