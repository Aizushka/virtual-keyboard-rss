import { keys } from './additional.js';
// import { keyCode } from './additional.js';

// add basic elements on screen
function drawMainPage() {
  const body = document.querySelector('body');

  const header = document.createElement('h1');
  header.innerHTML = 'Virtual Keyboard';
  header.className = 'title';

  const textarea = document.createElement('textarea');
  textarea.className = 'key-textarea';
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('cols', '50');

  const container = document.createElement('div');
  container.classList.add('key-container');

  const text1 = document.createElement('p');
  text1.className = 'subtitle';
  text1.innerHTML = 'The keyboard was created in the Windows operating system';

  const text2 = document.createElement('p');
  text2.className = 'subtitle';
  text2.innerHTML = 'To switch the language combination: left ctrl + alt';

  body.appendChild(header);
  body.appendChild(textarea);
  body.appendChild(container);
  body.appendChild(text1);
  body.appendChild(text2);
}

drawMainPage();

const container = document.querySelector('.key-container');

function drawKeys() {
  for (let i = 0; i < keys.length; i += 1) {
    for (let j = 0; j < keys[i].length; j += 1) {
      const key = document.createElement('button');
      if (keys[i][j] === 'CapsLock' || keys[i][j] === 'Shift' || keys[i][j] === 'Backspace' || keys[i][j] === 'Enter') {
        key.className = 'key key_long';
      } else if (keys[i][j] === 'space') {
        key.className = 'key key_space';
      } else {
        key.className = 'key';
      }
      key.innerHTML = keys[i][j];
      container.appendChild(key);
    }
  }
}

drawKeys();
