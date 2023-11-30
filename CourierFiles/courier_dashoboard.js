// courier_dashboard.js
// Example JavaScript in courier_dashboard.js

// Function to update package information
function updatePackageInfo() {
    // Simulated package data (replace this with actual data)
    const packageData = {
      id: 'PKG123456',
      status: 'In Transit',
      lastLocation: 'Warehouse A',
      deliveryETA: 'December 5, 2023',
    };
  
    // Accessing the Package-info-content element
    const packageInfoContent = document.querySelector('.Package-info-content');
  
    // Creating HTML content with package information
    const packageInfoHTML = `
      <p>Package ID: ${packageData.id}</p>
      <p>Status: ${packageData.status}</p>
      <p>Last Location: ${packageData.lastLocation}</p>
      <p>Estimated Delivery: ${packageData.deliveryETA}</p>
    `;
  
    // Updating the content of Package-info-content with package information
    packageInfoContent.innerHTML = packageInfoHTML;
  }
  
  // Call the function to update package information
  updatePackageInfo();
  