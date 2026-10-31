// 12. Handle Multiple Buttons Using Event Delegation

let buttons = document.querySelector("#buttons")
let p = document.querySelector("#tag")

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(`${e.target.textContent},Button clicked`);
    }

})