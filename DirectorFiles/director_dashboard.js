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
  function updatePackageInfo() {
    // ... (Your existing package information update code)
  }
  
  // Call the function to update package information and set up the dropdown
  updatePackageInfo();
