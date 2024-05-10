document.getElementById("contact").addEventListener("input", function () {
  var phoneInput = this.value.trim();
  var phoneError = document.getElementById("phoneError");
  if (phoneInput === "" || isNaN(phoneInput)) {
    phoneError.style.display = "inline";
  } else {
    phoneError.style.display = "none";
  }
});

document.getElementById("name").addEventListener("input", function () {
  var nameInput = this.value.trim();
  var nameError = document.getElementById("nameError");
  if (nameInput === "") {
    nameError.style.display = "inline";
  } else {
    nameError.style.display = "none";
  }
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById("email").addEventListener("input", function () {
  var emailInput = this.value.trim();
  var emailError = document.getElementById("emailError");
  if (emailInput === "" || !isValidEmail(emailInput)) {
    emailError.style.display = "inline";
  } else {
    emailError.style.display = "none";
  }
});

function isValidName(name) {
  var nameRegex = /^[^\d\s]+$/;
  return nameRegex.test(name);
}

document.getElementById("name").addEventListener("input", function () {
  var nameInput = this.value.trim();
  var nameError = document.getElementById("nameError");
  if (nameInput === "" || !isValidName(nameInput)) {
    nameError.style.display = "inline";
  } else {
    nameError.style.display = "none";
  }
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  
  let formData = new FormData(this);
  let isValid = true;

  let name = formData.get("name");
  if (!name.trim() || !isValidName(name)) {
    alert("Please enter your name.");
    isValid = false;
    return;
  }

  let orgname = formData.get("org-name");

  if (!orgname.trim()) {
    alert("Please enter your organisation name.");
    isValid = false;
    return;
  }
  let email = formData.get("email");
  if (!email.trim() || !isValidEmail(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
    return;
  }

  let contact = formData.get("contact");
  if (!contact.trim() || isNaN(contact.trim())) {
    alert("Please enter a valid contact number.");
    isValid = false;
    return;
  }

  if (isValid) {
    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Form submission failed.");
        }
      })
      .then((data) => {
        document.getElementById("success-message").style.display = "block";
        setTimeout(function () {
          document.getElementById("success-message").style.display = "none";
          document.getElementById("myForm").reset();
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Form submission failed. Please try again.");
      });
  }
});
