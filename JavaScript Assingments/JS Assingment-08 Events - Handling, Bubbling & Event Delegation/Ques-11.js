// 11. Demonstrate Event Capturing

let parentDiv2 = document.querySelector("#parentDiv2")
let btnclick3 = document.querySelector("#btn5")
let childp = document.querySelector("#childTag2")
let child3 = document.querySelector("#childTag3")

parentDiv2.addEventListener('click', () => {
    childp.textContent = "parent clicked"
    console.log("p click");

})

btnclick3.addEventListener('click', () => {
    child3.textContent = "button clicked"
    console.log("btn click");

})

