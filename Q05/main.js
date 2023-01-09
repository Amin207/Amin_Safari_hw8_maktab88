const form = document.getElementById("formDiv");

const usernameDiv = document.getElementById("validateUsername");
const passwordDiv = document.getElementById("validatePassword");
const passwordAgainDiv = document.getElementById("validatePasswordAgain");

const passwordDivFeedback = document.getElementById("validatePasswordFeedback");
const passwordAgainDivFeedback = document.getElementById(
  "validatePasswordAgainFeedback"
);

let usernameValue = "";
let passwordValue = "";
let passwordAgainValue = "";

const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/;

usernameDiv.addEventListener("change", (e) => {
  usernameValue = e.target.value;
});

passwordDiv.addEventListener("change", (e) => {
  passwordValue = e.target.value;
});

passwordAgainDiv.addEventListener("change", (e) => {
  passwordAgainValue = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Username Validation
  if (usernameValue === "") {
    usernameDiv.className += " is-invalid";
  } else {
    usernameDiv.className = "form-control";
  }

  // Password Validation
  if (passwordValue === "") {
    passwordDivFeedback.innerHTML = "الزامی";
    passwordDiv.className += " is-invalid";
  } else if (passwordValue !== "") {
    if (passwordValue.length < 8 && regex.test(passwordValue)) {
      passwordDiv.className = "form-control";
    } else {
      passwordDivFeedback.innerHTML =
        "رمز عبور باید شاملی حداقل 8 کاراکتر و حداقل یک حرف و یک عدد باشد";
    }
  }

  // Password Again Validation
  if (passwordAgainValue === "") {
    passwordAgainDivFeedback.innerHTML = "الزامی";
    passwordAgainDiv.className += " is-invalid";
  } else if (passwordAgainValue !== "") {
    if (passwordAgainValue !== passwordValue) {
      passwordAgainDivFeedback.innerHTML = "رمزهای وارد شده یکسان نیستند";
    } else {
      passwordAgainDiv.className = "form-control";
    }
  }
});
