function ClearAlert() {
    let alert = document.getElementById("alert")
    let parent = alert.parentElement

    // Create new div with no alert message
    let div = document.createElement("div")
    let msg = document.createElement("p")

    div.style.background = "None"
    div.style.textAlign = "Center"
    div.style.margin = "0"

    const screen_width = window.innerWidth
    if (screen_width >= 1000) {
        div.style.width = "45vw"
    }
    else {
        div.style.width = "80vw"
    }

    msg.innerHTML = "No Alerts..."
    div.append(msg)

    alert.remove()
    parent.append(div)
    parent.style.rowGap = "0"
}