const loginBtn = document.querySelector('.loginBtn');
const loginForm = document.querySelector('.right');

function loginEvent() {
    console.log('login click');
    loginForm.classList.toggle('active');
}

loginBtn.addEventListener('click', loginEvent);
