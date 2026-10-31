// Section 4 - Bubbling, Capturing & Default Actions

// 10. Demonstrate Event Bubbling


let parentDiv = document.querySelector("#parentDiv")
let btnclick2 = document.querySelector("#btn4")
let child = document.querySelector("#childTag")
let child2 = document.querySelector("#childTag2")

btnclick2.addEventListener('click', () => {
    child.textContent = "button clicked"
    // console.log("btn click");

})

parentDiv.addEventListener('click', () => {
    child2.textContent = "parent clicked"
    // console.log("p click");

})
