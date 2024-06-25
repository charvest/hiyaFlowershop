const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

// Event listeners for input fields to handle focus and blur states
inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value !== "") return;
    inp.classList.remove("active");
  });
});

// Event listeners for toggle buttons to switch between sign in and sign up views
toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

// Function to move the carousel based on the selected bullet
function moveSlider() {
  let index = this.dataset.value;
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

// Event listeners for carousel bullets
bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Enhanced form submission handling for the sign-up form
document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const password = formData.get("password");
    const submitButton = this.querySelector('input[type="submit"]');
    submitButton.disabled = true;
    submitButton.value = "Signing Up...";

    if (!isPasswordStrong(password)) {
      const alertPasswordWeak = document.getElementById("alert-password-weak");
      alertPasswordWeak.querySelector("strong").textContent =
        "Password too weak. Ensure it is at least 8 characters long, contains letters and numbers.";
      alertPasswordWeak.classList.remove("hidden");
      alertPasswordWeak.classList.add("show");
      setTimeout(() => {
        alertPasswordWeak.classList.add("hidden");
        alertPasswordWeak.classList.remove("show");
      }, 5000);
      submitButton.disabled = false;
      submitButton.value = "Sign Up";
      return;
    }

    fetch("admin_signup.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(handleResponse)
      .catch(handleError);
  });

// Sign-In Form Submission Handling
document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Collect form data
    const submitButton = this.querySelector('input[type="submit"]');
    submitButton.disabled = true;
    submitButton.value = "Signing In...";

    // Make the AJAX call to the PHP backend
    fetch("admin_signin.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        submitButton.disabled = false;
        submitButton.value = "Sign In";

        if (data.error) {
          const alertNoEmailFound = document.getElementById(
            "alert-no-email-found"
          );
          if (data.type === "email") {
            alertNoEmailFound.querySelector("strong").textContent =
              "Email not found.";
          } else if (data.type === "password") {
            alertNoEmailFound.querySelector("strong").textContent =
              "Incorrect password.";
          }
          alertNoEmailFound.classList.remove("hidden");
          alertNoEmailFound.classList.add("show");
          setTimeout(() => {
            alertNoEmailFound.classList.add("hidden");
            alertNoEmailFound.classList.remove("show");
          }, 5000);
        } else if (data.success) {
          // Redirect to dashboard or home page on successful login
          window.location.href =
            "/HIYAS FLOWERSHOP/hiyas_dashboard/admin dashboard.php"; // Adjust this URL to your needs
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        submitButton.disabled = false;
        submitButton.value = "Sign In";
      });
  });

function isPasswordStrong(password) {
  return (
    password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)
  );
}

function handleResponse(data) {
  const submitButton = document
    .getElementById("signUpForm")
    .querySelector('input[type="submit"]');
  submitButton.disabled = false;
  submitButton.value = "Sign Up";

  const alertEmailTaken = document.getElementById("alert-email-taken");
  const alertUsernameTaken = document.getElementById("alert-username-taken");
  const alertSignupSuccessful = document.getElementById(
    "alert-signup-successful"
  );

  [alertEmailTaken, alertUsernameTaken, alertSignupSuccessful].forEach(
    (alert) => {
      alert.classList.add("hidden");
    }
  );

  if (data.error) {
    let alertDiv;
    switch (data.type) {
      case "email":
        alertDiv = alertEmailTaken;
        break;
      case "username":
        alertDiv = alertUsernameTaken;
        break;
    }
    alertDiv.querySelector("strong").textContent = data.message;
    alertDiv.classList.remove("hidden");
    alertDiv.classList.add("show");

    setTimeout(() => {
      alertDiv.classList.add("hidden");
      alertDiv.classList.remove("show");
    }, 3000);
  } else if (data.success) {
    alertSignupSuccessful.querySelector("strong").textContent = data.message;
    alertSignupSuccessful.classList.remove("hidden");
    alertSignupSuccessful.classList.add("show");

    setTimeout(() => {
      alertSignupSuccessful.classList.add("hidden");
      alertSignupSuccessful.classList.remove("show");
    }, 3000);
  }
}

function handleError(error) {
  console.error("Error:", error);
  const submitButton = document
    .getElementById("signUpForm")
    .querySelector('input[type="submit"]');
  submitButton.disabled = false;
  submitButton.value = "Sign Up";
}
