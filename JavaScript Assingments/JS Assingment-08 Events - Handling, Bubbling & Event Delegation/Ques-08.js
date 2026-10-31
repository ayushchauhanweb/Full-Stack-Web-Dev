// 8.Run an Event Only Once

const button = document.createElement("button")

button.textContent = "Click me"
document.body.appendChild(button);

function clickOnce (){
    console.log("This message will be displayed only once");
}

button.addEventListener('click',clickOnce,{once:true})
document.body.append(button)