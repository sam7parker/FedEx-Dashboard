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

// Function to update package information
function updatePackageInfo() {
  // ... (Your existing package information update code)
}

// Call the function to update package information and set up the dropdown
updatePackageInfo();
