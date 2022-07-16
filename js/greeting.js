const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const greetingList = ['Hello', 'Welcome', 'Howdy', 'Hola', '안녕', 'Namaste'];
const greet = greetingList[Math.floor(Math.random() * greetingList.length)];

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const onLoginSubmit = (event) => {
  const username = loginInput.value;

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const paintGreetings = (username) => {
  const initButton = document.createElement('button');
  const clearInfo = () => localStorage.clear();
  initButton.classList.add('button');
  initButton.innerText = 'Initialized';
  initButton.addEventListener('click', () => {
    if (window.confirm('Initialize all the information. Do you agree?')) {
      clearInfo();
      window.location.reload();
    } else {
      return;
    }
  });
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `${greet}, <strong>${username}</strong>`;
  greeting.appendChild(initButton);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  paintGreetings(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
}
