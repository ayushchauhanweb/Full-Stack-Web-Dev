// 13. Add Elements Using append() and prepend()

let old = document.querySelector("#oldList")
let html = document.createElement("li")

html.textContent = "HTML"

let react = document.createElement("li")

react.textContent = "React"

old.prepend(html)
old.append(react)