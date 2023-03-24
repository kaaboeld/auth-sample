document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData.entries())
  getValidationPasswordStatus(data.password)
  console.table(data)
})

function getValidationPasswordStatus(str) {
  if (!testPassword(str)) {
    errMsg()
    testSubmit(true)
    return false;
  }
  okMsg()
  testSubmit(false)
}

function testPassword(str) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(str);
}

function testSubmit(isDisabled) {
  const actionButton = document.querySelector("button[type='submit']")
  if (isDisabled) {
    actionButton.setAttribute('disabled', 'disabled')
  } else {
    actionButton.removeAttribute('disabled')
  }
}

function errMsg() {
  const field = document.querySelector(".field-password")
  const hint = field.querySelector(".hint")
  hint.classList.add("show")
  hint.innerHTML = "Пароль должен содержать буквы, цифры, в разном регистре и спец. символы"
}
function okMsg() {
  const field = document.querySelector(".field-password")
  const hint = field.querySelector(".hint")
  hint.innerHTML = ""
  hint.classList.remove("show")
}
