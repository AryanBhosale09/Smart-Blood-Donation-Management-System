const container = document.getElementById('container');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const body = document.querySelector('body'); // Target the body

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    body.classList.add('register-mode'); // Trigger the background shift
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    body.classList.remove('register-mode'); // Revert the background shift
});