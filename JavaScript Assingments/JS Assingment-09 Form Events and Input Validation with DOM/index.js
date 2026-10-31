// Section 1 – Form and Input Events

// 1. Handle Form Submit Event

const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    // e.preventDefault()
    // console.log("Form submited successufully");
})


// 2. Prevent Form Submission

form.addEventListener('submit', (e) => {
    e.preventDefault()
})


// 3. Display Input Using the input Event

const inputName = document.querySelector("input")
const button = document.querySelector("#btn")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log("You entered:", `${inputName.value}`);
})


// 4. Detect Changes Using the change Event

const select = document.querySelector("#select-Language")

select.addEventListener('change', (e) => {
    console.log("Selected Language: ", `${select.value}`);
})


// 5. Handle the focus Event

const focusEvent = document.querySelector("#focus-event")



focusEvent.addEventListener('focus', (e) => {

    focusEvent.style.border = "2px solid red"

})


// 6. Handle the blur Event


const blurEvent = document.querySelector("#blur-event")

blurEvent.addEventListener('blur', (e) => {

    console.log("You left the input field.");

})


// Section 2 – Basic Form Validation

// 7. Validate a Required Name Field

const userName = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
// const errormessage = document.querySelector(".errorMessage")

function error(input, errormessage) {
    input.parentElement.querySelector(".errorMessage").textContent = errormessage
}

function clearError(input) {
    input.parentElement.querySelector(".errorMessage").textContent = ""
}

function validUsername(userName) {
    console.log(userName.parentElement.querySelector(".errorMessage"));

    if (userName.value.trim().length === 0) {
        error(userName, "Enter your name")
        return false
    }

    clearError(userName)
    return true
}

// 8. Validate Email Field

function validEmail(email) {
    console.log(email.parentElement.querySelector(".errorMessage"));

    if (email.value.trim().length === 0) {
        error(email, "Enter your email")
        return false
    }

    clearError(email)
    return true
}

// 9. Validate Password Length

function validPassword(password) {
    console.log(password.parentElement.querySelector(".errorMessage"));

    if (password.value.trim().length === 0) {
        error(password, "Enter your password")
        return false
    }

    if (password.value.trim().length < 6) {
        error(password, "Password must be at least 6 characters")
        return false
    }

    clearError(password)
    return true
}

// 10. Validate Multiple Form Fields

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isValidUserName = validUsername(userName)
    const isValidemail = validEmail(email)
    const isValidPassword = validPassword(password)

    if (isValidUserName && isValidemail && isValidPassword) {
        console.log("good");
    }

})