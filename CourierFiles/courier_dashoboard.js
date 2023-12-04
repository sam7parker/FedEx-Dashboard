// courier_dashboard.js

// Function to initialize the map
function initMap() {
  // Specify the initial map options (center, zoom, etc.)
  var mapOptions = {
    center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco, CA
    zoom: 10,
  };

  // Create the map object
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Simulated package data (replace this with actual data)
  const packageData = {
    id: "PKG123456",
    status: "In Transit",
    lastLocation: "Warehouse A",
    deliveryETA: "December 5, 2023",
    coordinates: { lat: 37.7749, lng: -122.4194 }, // Example: Coordinates for Warehouse A
  };

  // Add a marker for the last location of the package
  var marker = new google.maps.Marker({
    position: packageData.coordinates,
    map: map,
    title: `Last Location: ${packageData.lastLocation}`,
  });
}

// Call the function to initialize the map
initMap();

// Function to update live time
// Function to update live time
function updateLiveTime() {
  var liveTimeElement = document.getElementById("liveTime");

  function updateTime() {
    var currentTime = new Date();

    // Format the date and time
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    var formattedTime = currentTime.toLocaleDateString("en-US", options);

    // Update the live time element
    liveTimeElement.textContent = formattedTime;
  }

  // Update the time initially
  updateTime();

  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);
}

// Call the function to update live time
updateLiveTime();

// Call the function to update live time
updateLiveTime();

// Function to update package information
// Function to update package information
// Function to update package information
function updatePackageInfo() {
  // Simulated package information (replace this with actual data retrieval)
  const packageInfo = [
    {
      id: "PKG123456",
      status: "In Transit",
      lastLocation: "Warehouse A",
      deliveryETA: "December 5, 2023",
    },
    {
      id: "PKG231424",
      status: "In Transit",
      lastLocation: "Warehouse B",
      deliveryETA: "December 5, 2023",
    },
    {
      id: "AFK231424",
      status: "In Transit",
      lastLocation: "Warehouse C",
      deliveryETA: "December 5, 2023",
    },
    {
      id: "WER231424",
      status: "In Transit",
      lastLocation: "Warehouse D",
      deliveryETA: "December 5, 2023",
    },
  ];

  const packageDataContainer = document.querySelector(".package-data");

  packageDataContainer.innerHTML = ""; // Clear previous package information

  packageInfo.forEach((pkg) => {
    const packageDiv = document.createElement("div");
    packageDiv.classList.add("package-item");

    packageDiv.innerHTML = `
      <p>Package ID: ${pkg.id}</p>
      <p>Status: ${pkg.status}</p>
      <p>Last Location: ${pkg.lastLocation}</p>
      <p>Delivery ETA: ${pkg.deliveryETA}</p>
    `;
    packageDataContainer.appendChild(packageDiv);
  });
}

// Call the function to update package information after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  updatePackageInfo();
});

const latitude = 33.4503998; // Update with your actual latitude
const longitude = -88.8183872; // Update with your actual longitude
const apiKey = "6519df159dbfc0af73e927df274063dd"; // Replace with your OpenWeatherMap API key

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 1.8 + 32;
}

function fetchWeatherData(latitude, longitude, apiKey) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Process the fetched weather data
      const weatherForecastElement = document.getElementById("weatherForecast");
      const temperatureInFahrenheit = kelvinToFahrenheit(data.main.temp); // Convert temperature to Fahrenheit
      const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Weather icon URL

      weatherForecastElement.innerHTML = `
          <img src="${weatherIcon}" alt="Weather Icon" class="weather-icon" style="width: 80px; height: 80px;">
          <p class="temperature">Temperature: ${temperatureInFahrenheit.toFixed(
            2
          )}°F</p>
          <p class="weather-description">Weather: ${
            data.weather[0].description
          }</p>
          <p class="additional-info">Humidity: ${data.main.humidity}%</p>
          <p class="additional-info">Wind Speed: ${data.wind.speed} m/s</p>
          <p class="additional-info">Highest Temperature: ${kelvinToFahrenheit(
            data.main.temp_max
          ).toFixed(2)}°F</p>
          <p class="additional-info">Lowest Temperature: ${kelvinToFahrenheit(
            data.main.temp_min
          ).toFixed(2)}°F</p>
        `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Call the fetchWeatherData function with the updated latitude, longitude, and API key
fetchWeatherData(latitude, longitude, apiKey);

function updateStats() {
  const dropdown = document.getElementById("statsDropdown");
  const selectedOption = dropdown.value;

  // Get the container for personal statistics
  const personalStatsContainer = document.querySelector(".personal-stats");

  // Update statistics based on the selected option
  switch (selectedOption) {
    case "today":
      // Update stats for today
      personalStatsContainer.innerHTML = `
        <p>Deliveries Today: 23</p>
        <p>Successful Deliveries: 20</p>
        <p>Failed Deliveries: 3</p>
        <p>Average Delivery Time: 1h 30m</p>
        <p>Average Stop Duration: 5m</p>
        <!-- Add more statistics as needed -->
      `;
      break;
    case "weekly":
      // Update stats for the week
      personalStatsContainer.innerHTML = `
        <p>Deliveries This Week: 150</p>
        <p>Successful Deliveries: 130</p>
        <p>Failed Deliveries: 20</p>
        <p>Average Delivery Time: 1h 45m</p>
        <p>Average Stop Duration: 10m</p>
        <!-- Add more statistics as needed -->
      `;
      break;
    case "monthly":
      // Update stats for the month
      personalStatsContainer.innerHTML = `
        <p>Deliveries This Month: 650</p>
        <p>Successful Deliveries: 600</p>
        <p>Failed Deliveries: 50</p>
        <p>Average Delivery Time: 1h 55m</p>
        <p>Average Stop Duration: 20m</p>
        <!-- Add more statistics as needed -->
      `;
      break;
    case "yearly":
      // Update stats for the year
      personalStatsContainer.innerHTML = `
        <p>Deliveries This Year: 5200</p>
        <p>Successful Deliveries: 5000</p>
        <p>Failed Deliveries: 200</p>
        <p>Average Delivery Time: 2h</p>
        <p>Average Stop Duration: 30m</p>
        <!-- Add more statistics as needed -->
      `;
      break;
    default:
      break;
  }
}

// Call the updateStats function when the dropdown value changes
document
  .getElementById("statsDropdown")
  .addEventListener("change", updateStats);

// Update statistics initially based on the default selected option
updateStats();
