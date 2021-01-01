const open = document.getElementById("open")
const close = document.getElementById("close")
const tainer = document.querySelector(".container")

open.addEventListener("click", () => tainer.classList.add("show-nav"))

close.addEventListener("click", () => tainer.classList.remove("show-nav"))