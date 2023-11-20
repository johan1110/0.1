const elForm = document.querySelector(".form")
const elFormInput = elForm.querySelector(".form__input")
const elList = document.querySelector(".chat")


elForm.addEventListener("submit", e => {
    e.preventDefault()
    let inputValue = elFormInput.value.trim()
 
    elList = innerHTML = inputValue 

    elFormInput.value = null
})