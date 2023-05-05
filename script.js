buttonChangeMode = document.querySelector("#modeIcon")

function goNext() {
  return window.scrollBy(400, 700);
} 

function changeMode() {
  document.body.classList.toggle("dark")
}

