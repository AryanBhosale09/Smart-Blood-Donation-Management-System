
const container = document.getElementById('container');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const body = document.querySelector('body'); 

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    body.classList.add('register-mode'); 
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    body.classList.remove('register-mode');
});