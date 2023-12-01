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
        <p>Status: 
            <select class="status-dropdown">
                <option value="In Transit">In Transit</option>
                <option value="Delivered">Delivered</option>
            </select>
        </p>
        <p>Last Location: ${packageData.lastLocation}</p>
        <p>Estimated Delivery: ${packageData.deliveryETA}</p>
    `;

    // Updating the content of Package-info-content with package information
    packageInfoContent.innerHTML = packageInfoHTML;

    // Get the dropdown element
    const statusDropdown = document.querySelector('.status-dropdown');

    // Set the initial selected value based on package data
    statusDropdown.value = packageData.status;

    // Add event listener to update the status when the selection changes
    statusDropdown.addEventListener('change', function () {
        packageData.status = statusDropdown.value;
        // Call a function to update the status or perform other actions based on the selected value
        // For example: updateStatus(packageData.status);
        // Replace updateStatus with the actual function to update status or perform necessary actions
        console.log("Selected status: " + packageData.status); // Example: Log the selected status
    });
}

// Call the function to update package information and set up the dropdown
updatePackageInfo();
