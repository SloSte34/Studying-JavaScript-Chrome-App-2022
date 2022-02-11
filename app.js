const loginForm = document.querySelector(".login-form");
const loginFormInput = loginForm.querySelector("input");
const loginFormButton = loginForm.querySelector("button");

function handleLoginButton() {
  console.log(loginFormInput.value);
  console.log("clicked!!!");
}

loginFormButton.addEventListener("click", handleLoginButton);
