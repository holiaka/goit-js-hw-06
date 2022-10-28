// Task 8
console.log("\n TASK #8 \n");

// Find HTML element
const logInFormRef = document.querySelector(".login-form");

// Create event listener
logInFormRef.addEventListener("submit", onfillOutForm);

const dataUser = {};

function onfillOutForm(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Attention!!!\nAll fields must be filled!!!");
  } else {
    dataUser.email = email.value;
    dataUser.password = password.value;
    console.log(dataUser);
    return logInFormRef.reset();
  }
}
