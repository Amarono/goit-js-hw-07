const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');
let sizes = 30;
create.addEventListener('click', createMarkup);
destroy.addEventListener('click', () => {
  box.innerHTML = '';
  sizes = 30;
});
function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log('error');
    return;
  }
  createBoxes(input.value);
}
function createBoxes(amount) {
  input.value = '';
  box.innerHTML = '';
  sizes = 30;
  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    box.append(myBox);
    sizes += 10;
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
