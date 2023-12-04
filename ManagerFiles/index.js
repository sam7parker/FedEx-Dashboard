function ClearAlert() {
    let alert = document.getElementById("alert")
    let parent = alert.parentElement

    // Create new div with no alert message
    let div = document.createElement("div")
    let msg = document.createElement("p")

    div.style.background = "None"
    div.style.textAlign = "Center"
    div.style.width = "80vw"
    div.style.margin = "0"

    msg.innerHTML = "No Alerts..."
    div.append(msg)

    alert.remove()
    parent.append(div)
    parent.style.rowGap = "0"
}