// 7. Remove an Event Listener

let add = document.querySelector("#add");
let remove = document.querySelector("#newbtn");
let ptag = document.querySelector("#tag");

function clickFunction() {
    ptag.textContent = "Button Clicked!"
}


add.addEventListener('click', clickFunction);


remove.addEventListener('click', () => {

    add.removeEventListener('click', clickFunction);
    ptag.textContent = "No message displayed";
});
