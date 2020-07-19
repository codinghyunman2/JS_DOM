const input = document.getElementById("textarea");
const word = document.getElementById("Word")
const nonspace_word = document.getElementById("nonSpace_Word");

function getTextLength(str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    len++
  }
  return len
}

function printResult() {
  word.innerHTML = getTextLength(input.value)
  nonspace_word.innerHTML = getTextLength(input.value.replace(/\s/gi, ""))
}



