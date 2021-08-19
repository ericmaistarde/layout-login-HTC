const $dataEmail = document.querySelector("#data-email")
const $datapassword = document.querySelector("#data-password")
const $button = document.querySelector(".button")

const $dataLabelEmail = document.querySelector(".data")
const $dataLabelPassword = document.querySelector(".data-password")

let textInput = $dataEmail.value

$button.addEventListener("click", (e) => {
    e.preventDefault()
    inputValidate($dataEmail,$dataLabelEmail)
    inputValidate($datapassword, $dataLabelPassword)
})

function inputValidate(input,label) {
    if (input.value != "") {
        // input.classList.add("data-checked")
        label.classList.add("data-checked")
        label.textContent = "prossiga"
        // $dataLabelPassword.textContent = "prossiga"
        setTimeout(function () {
            label.classList.remove("data-checked")
            label.textContent = ""
            // $dataLabelEmail.textContent = "email"
            // $dataLabelPassword.textContent = "senha"
        }, 5000)
    } else {
         // label.classList.add("data-checked")
         label.classList.add("data-not-checked")
         label.textContent = "este campo é obrigatório"
         // $dataLabelPassword.textContent = "prossiga"
         setTimeout(function () {
             label.classList.remove("data-not-checked")
             label.textContent = "senha"
             // $dataLabelEmail.textContent = "email"
             // $dataLabelPassword.textContent = "senha"
         }, 5000)
    }
}

