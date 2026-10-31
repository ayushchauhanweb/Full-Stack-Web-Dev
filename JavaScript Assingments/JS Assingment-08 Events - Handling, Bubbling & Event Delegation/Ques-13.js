// 13. Handle a Dynamic List Using Event Delegation

let list = document.querySelector("#skillsLang")
let empty = document.querySelector("#empty")

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        console.log(`You choose, ${e.target.textContent}`);

    }

})