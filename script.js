document.addEventListener("DOMContentLoaded", function() {

const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const surnameError = document.getElementById("surnameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Валідації
function validateName() {
    if (nameInput.value.length < 2) {
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        nameError.textContent = "Мінімум 2 символи";
        return false;
    } else {
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
        nameError.textContent = ""; //немає помилки
        return true;
    }
}


function validateSurname() {
    if (surnameInput.value.length < 2) {
        surnameInput.classList.add("invalid");
        surnameInput.classList.remove("valid");
        surnameError.textContent = "Мінімум 2 символи";
        return false;
    } else {
        surnameInput.classList.add("valid");
        surnameInput.classList.remove("invalid");
        surnameError.textContent = ""; //немає помилки
        return true;
    }
}


function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //шаблон для перевірки email

    if (!regex.test(emailInput.value)) {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        emailError.textContent = "Невірний email";
        return false;
    } else {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        emailError.textContent = ""; //немає помилки
        return true;
    }
}


function validatePassword() {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; //шаблон для перевірки пароля: мінімум 8 символів, має містити букви і цифри

    if (!regex.test(passwordInput.value)) {
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        passwordError.textContent = "Мінімум 8 символів, букви і цифри";
        return false;
    } else {
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");
        passwordError.textContent = ""; //немає помилки
        return true;
    }
}

// В реальному часі перевірка при введенні даних
nameInput.addEventListener("input", validateName);
surnameInput.addEventListener("input", validateSurname);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// Обробка відправки форми
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const isValid =
        validateName() &&
        validateSurname() &&
        validateEmail() &&
        validatePassword();

    if (isValid) {
        alert("Форма успішно відправлена!");
    }
})});