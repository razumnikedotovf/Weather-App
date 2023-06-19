const weatherForm = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");
const weatherInfo = document.getElementById("weather-info");

weatherForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const location = locationInput.value;
    if (location !== "") {
        getWeather(location);
        locationInput.value = "";
    }
});

function getWeather(location) {
    // Fetch weather data from an API
    fetch(`https://api.your-weather-api.com/weather?q=${location}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.temperature;
            const description = data.description;
            // Display weather information
            weatherInfo.textContent = `Temperature: ${temperature}°C, Description: ${description}`;
        })
        .catch(error => console.log(error));
}
