// X-Axis for Line Graphs (Route and Scan)
const xVals_line = [1, 5, 10, 15, 20, 25, 30]

// Route Compliance Graph
const RouteCompliance = new Chart("RouteCompliance", {
    type: "line",
    data: {
        labels: xVals_line,
        datasets: [{
            label: "Route Compliance",
            backgroundColor: "rgba(255,102,0,0.5",
            borderColor: "rgba(77,20,140,1.0)",
            data: [70, 80, 80, 85, 86, 95, 92],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }]
        }
    }
});

// Scan Compliance Graph
const ScanCompliance = new Chart("ScanCompliance", {
    type: "line",
    data: {
        labels: xVals_line,
        datasets: [{
            //backgroundColor: "rgba(77,20,140,1.0)",
            //borderColor: "rgba(255,102,0,1.0",
            label: "Scan Compliance",
            backgroundColor: "rgba(255,102,0,0.5",
            borderColor: "rgba(77,20,140,1.0)",
            data: [91, 86, 85, 86, 89, 95, 97],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }]
        }
    }
});

// Package Pie Chart
const GrossRevenue = new Chart("GrossRevenue", {
    type: "pie",
    data: {
        labels: [
            'Delivered',
            'Out for Delivery',
            'Exceptions'
        ],
        datasets: [{
            label: ['D,O,E'],
            data: [1500, 800, 200],
            backgroundColor: [
                'rgba(255,102,0,1.0)',
                'rgba(77,20,140,1.0)',
                'rgba(100,100,100,1.0)'
            ],
            hoverOffset: 1
        }]

    },
    options: {}
});

// Couriers Scheduled Graph
const CouriersScheduled = new Chart("CouriersScheduled", {
    type: 'bar',

    data: {
        labels: [1, 5, 10, 15, 20, 25, 30],
        datasets: [{
            label: "Couriers Scheduled",
            data: [15, 12, 13, 15, 17, 20, 18],
            backgroundColor: "rgba(255,102,0,0.5)",
            bordercolor: "rgba(255,102,0)"
        }],
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 25
                }
            }]
        }
    }
});