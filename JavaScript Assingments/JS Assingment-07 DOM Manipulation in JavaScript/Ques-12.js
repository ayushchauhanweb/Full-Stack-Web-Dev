// 12. Insert an Element Using insertBefore()

const oldList = document.querySelector("#new")
const add = document.querySelector(".add")

const List = document.createElement("li")
List.textContent = "CSS"

oldList.insertBefore(List, add)
console.log(oldList);