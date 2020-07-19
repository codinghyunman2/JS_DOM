const div = document.querySelector("div");
const divs = document.querySelectorAll("div");

function paintColor(event) {
  const selection = event.target
  const parent = selection.parentNode

  divs.forEach(div => {
    div.style.backgroundColor = "white"
  })
  
  selection.style.backgroundColor = "blue"

  if (parent.tagName === "DIV")
    parent.style.backgroundColor = "yellow"
}

div.addEventListener('click', paintColor)