var mode = document.getElementById("mode-icon")
var style = document.getElementById("style")
var styleLight = document.getElementById("style-light")

function DarkLight() {
  styleLight.innerHTML = '<link rel="stylesheet" href="styles/style.css">'
  style.innerHTML = '<link rel="stylesheet" href="styles/style-light.css"></link>'
  if (mode.classList.contains("fa-sun")) {
    mode.classList.remove("fa-sun")
    mode.classList.add("fa-moon")
} else if (mode.classList.contains("fa-moon")) {
  styleLight.innerHTML = '<link rel="stylesheet" href="styles/style-light.css"></link>'
  style.innerHTML = '<link rel="stylesheet" href="styles/style.css">'
    mode.classList.remove("fa-moon")
    mode.classList.add("fa-sun")
}
}
