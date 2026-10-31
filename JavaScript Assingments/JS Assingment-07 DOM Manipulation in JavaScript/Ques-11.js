// 11. Add an Element Using appendChild()

const list = document.querySelector("#skills")
const newList = document.createElement("li")

newList.textContent = "HTML, CSS, JavaScript"
list.appendChild(newList)