// Function to update package information
function updatePackageInfo() {
    // Simulated package data (replace this with actual data)
    const packageData = [
        {
            id: 'PKG123456',
            status: 'In Transit',
            lastLocation: 'Warehouse A',
            deliveryETA: 'December 5, 2023',
        },
        {
            id: 'PKG789012',
            status: 'Delivered',
            lastLocation: 'Warehouse B',
            deliveryETA: 'December 7, 2023',
        },
        // Add more package data objects as needed
        {
            id: 'PKG782012',
            status: 'Delivered',
            lastLocation: 'Warehouse c',
            deliveryETA: 'December 8, 2023',
        },
    ];

    // Accessing the Package-info-content element
    const packageInfoContent = document.querySelector('.Package-info-content');

    // Creating a container for package widgets
    const widgetContainer = document.createElement('div');
    widgetContainer.classList.add('widget-container');

    packageData.forEach(package => {
        // Creating a div for each package widget
        const packageWidget = document.createElement('div');
        packageWidget.classList.add('widget');

        // Generating HTML content for package details
        packageWidget.innerHTML = `
            <p>Package ID: ${package.id}</p>
            <p>Status: ${package.status}</p>
            <p>Last Location: ${package.lastLocation}</p>
            <p>Estimated Delivery: ${package.deliveryETA}</p>
        `;

        // Append each package widget to the container
        widgetContainer.appendChild(packageWidget);
    });

    // Append the container with package widgets to the Package-info-content
    packageInfoContent.appendChild(widgetContainer);

    // Set a fixed height for the package info content for scrolling
    packageInfoContent.style.height = '400px';
    packageInfoContent.style.overflowY = 'auto';

    // Get all dropdown elements within package widgets
    const statusDropdowns = document.querySelectorAll('.status-dropdown');

    // Set initial selected values for each dropdown based on package data
    statusDropdowns.forEach((dropdown, index) => {
        dropdown.value = packageData[index].status;

        dropdown.addEventListener('change', function () {
            packageData[index].status = dropdown.value;
            console.log("Selected status for package " + packageData[index].id + ": " + packageData[index].status);
            // Additional actions or function calls related to status change can be added here
        });
    });
}

// Call the function to update package information and set up the dropdowns
updatePackageInfo();
