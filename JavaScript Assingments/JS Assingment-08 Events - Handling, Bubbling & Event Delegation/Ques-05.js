// 5. Display Mouse Coordinates

let div = document.createElement("div")

div.textContent = "Display Mouse Coordinates"

let body = document.querySelector("body")
body.appendChild(div)

div.addEventListener('mousemove', (e) => {
    console.log("X:", e.clientX);
    console.log("Y:", e.clientY);
})    