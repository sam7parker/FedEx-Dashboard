function ClearAllAlerts() {
    let alerts = document.querySelectorAll(".widget")

    if (alerts.length != 0) {
        let page_header = document.getElementById("page-header")
        let msg = document.createElement("h3")
        msg.innerHTML = "No alerts..."

        for (alert of alerts) {
            alert.remove()
        }

        page_header.insertAdjacentElement("afterend", msg)
    }
}