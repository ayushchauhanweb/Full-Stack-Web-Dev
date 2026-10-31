// 6. Get the Value of an Input Using the Event Object

const input = document.querySelector("#js")

input.addEventListener('input', (e) => {
    console.log("You Typed :", e.input.value);

})