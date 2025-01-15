/*=========================================================================================================================

Contact Form Handling

===========================================================================================================================*/

/*=========================================================================================================================

Contact Form Handling

===========================================================================================================================*/

const formContact = document.getElementById("contact-form");
const inputs = document.querySelectorAll("input[type='text'], textarea");
const successMessage = document.getElementById("successMessage");

const formData = { pseudo: null, email: null, password: null, confirm: null };

const errors = {
  name: "Le pseudo doit avoir entre 3 et 20 caractères, et ne contenir que des lettres, chiffres, et ._-",
  email: "Email incorrect, utilisez cet exemple : user@example.com",
  subject: "Le sujet doit avoir entre 5 et 100 caractères",
  message: "Le message doit avoir entre 15 et 2000 caractères",
};

const errorDisplay = (tag, message, valid = true) => {
  const container = document.querySelector(`.${tag}-container`);
  const span = document.querySelector(`.${tag}-container > span`);

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = "";
  }
};

const validators = {
  name: (value) =>
    /^[a-zA-Z0-9._-]{3,20}$/.test(value) ? [true, value] : [false, errors.name],
  email: (value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/.test(value)
      ? [true, value]
      : [false, errors.email],
  subject: (value) =>
    value.length >= 5 && value.length <= 100
      ? [true, value]
      : [false, errors.subject],
  message: (value) =>
    value.length >= 15 && value.length <= 2000
      ? [true, value]
      : [false, errors.message],
};

// Handle undefined validators more gracefully
const handleInput = (e) => {
  e.preventDefault();
  const { id, value } = e.target;

  // Check if validator exists for the field
  if (!validators[id]) {
    console.error(`No validator found for field: ${id}`);
    return;
  }

  const [valid, result] = validators[id](value);

  errorDisplay(id, valid ? "" : result, valid);
  formData[id] = valid ? result : null;
};

inputs.forEach((input) => {
  input.addEventListener("input", handleInput);
});

formContact.addEventListener("submit", async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      successMessage.innerText = "Message sent successfully!";
      successMessage.style.display = "block";
      successMessage.style.color = "green";
    } else {
      successMessage.innerText = "Please fill in all fields.";
      successMessage.style.display = "block";
      successMessage.style.color = "red";
    }
  } catch (error) {
    successMessage.innerText = "An error occurred. Please try again.";
    successMessage.style.display = "block";
    successMessage.style.color = "red";
  }
  console.log(formData);
});
