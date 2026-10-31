// 9. Stop Event Propagation

let parenDiv = document.querySelector("#parent")
let btnclick = document.querySelector("#btn3")
let childDiv = document.querySelector("#child-tag")

btnclick.addEventListener('click', (e) => {
    childDiv.textContent = "parent clicked"

})

btnclick.addEventListener('click', (e) => {
    e.stopPropagation;
    childDiv.textContent = "Button clicked"

})

