const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];
const screen = document.querySelector('body');
const imagePicker = () => {
  const imagePick = images[Math.floor(Math.random() * images.length)];
  screen.style.background = `url('https://dingunote.github.io/vanillajs-challenge/img/${imagePick}') no-repeat center / cover`;
};

imagePicker();
