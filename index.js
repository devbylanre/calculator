const screenInput = document.querySelector('#screenInput');
const screenResult = document.querySelector('#screenResult');

// add the button value to the calculator input screen
const inputValue = (value) => {
	return screenInput.insertAdjacentText('beforeend', value);
};

const buttons = document.querySelectorAll('.btn > button');
buttons.forEach((button) => {
	const value = button.getAttribute('value');
	console.log(typeof value);
	value !== null
		? button.addEventListener('click', () => inputValue(value))
		: button.removeEventListener('click', () => inputValue(value));
});

// deletes all character from the screen
const clearScreen = () => {
	screenInput.textContent = '';
};

document
	.querySelector('#clearScreen')
	.addEventListener('click', () => clearScreen());

// deletes the last character from the screen
const deleteLastIndex = () => {
	inputText = screenInput.textContent;
	let newText = inputText.slice(0, -1);
	screenInput.textContent = newText;
};

document
	.querySelector('#delete')
	.addEventListener('click', () => deleteLastIndex());

// performs or executes assignment operations e.g 8 + 8
const result = () => {
	const inputText = screenInput.textContent;
	const sum = eval(inputText);
	screenResult.textContent = sum;
	console.log(screenResult.textContent);
	screenInput.textContent = '';
};

document.querySelector('#result').addEventListener('click', () => result());
