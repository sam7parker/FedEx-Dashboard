// Function to initialize the map
function initMap() {
  var mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
      zoom: 10,
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const packageData = {
      id: "PKG123456",
      status: "In Transit",
      lastLocation: "Warehouse A",
      deliveryETA: "December 5, 2023",
      coordinates: { lat: 37.7749, lng: -122.4194 },
  };

  var marker = new google.maps.Marker({
      position: packageData.coordinates,
      map: map,
      title: `Last Location: ${packageData.lastLocation}`,
  });
}

// Call the function to initialize the map
initMap();

// Function to update live time
function updateLiveTime() {
  var liveTimeElement = document.getElementById("liveTime");

  function updateTime() {
      var currentTime = new Date();
      var options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
      };

      var formattedTime = currentTime.toLocaleDateString("en-US", options);
      liveTimeElement.textContent = formattedTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// Call the function to update live time
updateLiveTime();

// Placeholder data for different time ranges
const dailyData = {
  labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
  datasets: [
    { label: "Route Compliance", backgroundColor: "rgba(128,0,128,0.2)", borderColor: "rgba(77,20,140,1)", data: [81, 77, 62, 78, 80, 72, 88, 75], fill: true },
    { label: "Scan Compliance", backgroundColor: "rgba(255,165,0,0.2)", borderColor: "rgba(255,102,0,1)", data: [88, 89, 74, 84, 80, 72, 89, 65], fill: true }
  ]
};

const weeklyData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    { label: "Route Compliance", backgroundColor: "rgba(128,0,128,0.2)", borderColor: "rgba(77,20,140,1)", data: [68, 79, 50, 51, 65, 58, 78], fill: true },
    { label: "Scan Compliance", backgroundColor: "rgba(255,165,0,0.2)", borderColor: "rgba(255,102,0,1)", data: [54, 57, 60, 79, 66, 80, 80], fill: true }
  ]
};

const monthlyData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    { label: "Route Compliance", backgroundColor: "rgba(128,0,128,0.2)", borderColor: "rgba(77,20,140,1)", data:[60, 48, 45, 46], fill: true },
    { label: "Scan Compliance", backgroundColor: "rgba(255,165,0,0.2)", borderColor: "rgba(255,102,0,1)", data: [67, 54, 60, 58], fill: true }
  ]
};

const yearlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    { label: "Route Compliance", backgroundColor: "rgba(128,0,128,0.2)", borderColor: "rgba(77,20,140,1)", data: [35, 52, 45, 40, 34, 49, 45, 42, 41, 50, 45, 35], fill: true },
    { label: "Scan Compliance", backgroundColor: "rgba(255,165,0,0.2)", borderColor: "rgba(255,102,0,1)", data: [30, 38, 48, 34, 57, 42, 53, 45, 59, 42, 33, 40], fill: true }
  ]
};

// Creating the Compliance Stats chart
const combinedCompliance = new Chart(document.getElementById("combinedCompliance"), {
  type: "line",
  data: dailyData,
  options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,
      scales: {
          y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                  callback: function (value) {
                      return value + '%';
                  }
              }
          },
          x: {
              title: {
                  display: true,
                  text: 'Time'
              }
          }
      },
      plugins: {
          legend: {
              display: true,
              position: 'bottom',
              labels: {
                  boxWidth: 20,
                  padding: 5,
                  fontSize: 10,
              }
          },
      },
      layout: {
          padding: {
              top: 20,
              right: 20,
              bottom: 25,
              left: 20,
          }
      },
  }
});

// Event listener for the stats dropdown
document.getElementById('statsDropdown').addEventListener('change', function (e) {
  let selectedTimeRange = e.target.value;
  updateChartData(selectedTimeRange);
});

function updateChartData(timeRange) {
  let newData;

  switch (timeRange) {
      case 'today':
          newData = dailyData;
          break;
      case 'weekly':
          newData = weeklyData;
          break;
      case 'monthly':
          newData = monthlyData;
          break;
      case 'yearly':
          newData = yearlyData;
          break;
      default:
          newData = dailyData;
  }

  combinedCompliance.data.labels = newData.labels;
  combinedCompliance.data.datasets = newData.datasets;
  combinedCompliance.update();
}

// Example data for different regions
const regionData = {
  region1: {
    shipments: '1500 <span class="percentage">(+5%)</span>',
    outForDelivery: '200 <span class="percentage">(+2%)</span>',
    avgDeliveryTime: '1 HR 45 min <span class="percentage">(+4%)</span>',
    inRoute: '303 <span class="percentage">(+7%)</span>',
    avgStopTime: '5 min 14 sec <span class="percentage">(+7%)</span>',
    missedDelivery: '(+4.7%) <span class="percentage">(+5%)</span>',
},
region2: {
    shipments: '1800 <span class="percentage">(+8%)</span>',
    outForDelivery: '450 <span class="percentage">(+3%)</span>',
    avgDeliveryTime: '2 HR 45 min <span class="percentage">(+3%)</span>',
    inRoute: '300 <span class="percentage">(+7%)</span>',
    avgStopTime: '3 min 23 sec <span class="percentage">(+5%)</span>',
    missedDelivery: '67 <span class="percentage">(+6.7%)</span>',
},
region3: {
    shipments: '1200 <span class="percentage">(+5%)</span>',
    outForDelivery: '350 <span class="percentage">(+1%)</span>',
    avgDeliveryTime: '1 HR 04 min <span class="percentage">(+9%)</span>',
    inRoute: '400 <span class="percentage">(+10%)</span>',
    avgStopTime: '7 min 31 sec <span class="percentage">(+9%)</span>',
    missedDelivery: '35 <span class="percentage">(+5%)</span>',
},
overall: {
    shipments: '2000 <span class="percentage">(+10%)</span>',
    outForDelivery: '500 <span class="percentage">(+1%)</span>',
    avgDeliveryTime: '3 HR 23 min <span class="percentage">(+1%)</span>',
    inRoute: '700 <span class="percentage">(+12%)</span>',
    avgStopTime: '8 min 13 sec <span class="percentage">(+6.6%)</span>',
    missedDelivery: '25 <span class="percentage">(+4.2%)</span>',
}
};

document.getElementById('regionSelect').addEventListener('change', function(e) {
  let selectedRegion = e.target.value;
  updateWidgetData(selectedRegion);
});

function updateWidgetData(region) {
  const data = regionData[region] || regionData.overall;

  // Update the 'Shipments' widget
  document.querySelector('.stats-pair-one .stats-widget:first-child .stats-value').innerHTML = data.shipments;
  document.querySelector('.stats-pair-one .stats-widget:nth-child(2) .stats-value').innerHTML = data.outForDelivery;
  document.querySelector('.stats-pair-two .stats-widget:first-child .stats-value').innerHTML = data.avgDeliveryTime;
  document.querySelector('.stats-pair-two .stats-widget:nth-child(2) .stats-value').innerHTML = data.inRoute;
  document.querySelector('.stats-pair-three .stats-widget:first-child .stats-value').innerHTML = data.avgStopTime;
  document.querySelector('.stats-pair-three .stats-widget:nth-child(2) .stats-value').innerHTML = data.missedDelivery;
}
