// 3. Select Multiple Elements Using querySelectorAll()

const all = document.querySelectorAll(".item")

all.forEach((item) => {
    item.setAttribute("style", "color:red")
})
console.log(all);