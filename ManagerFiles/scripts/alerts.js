function ClearAllAlerts() {
    let alerts = document.querySelectorAll(".widget")

    if (alerts.length != 0) {
        for (alert of alerts) {
            alert.remove()
        }
    }
}