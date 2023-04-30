import { keys } from './additional.js';
// import { keyCode } from './additional.js';

// отрисовать базовые элементы страницы: название, блок ввода текста, блок под кнопки, подписи
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

// отрисовать кнопки в контейнере
const container = document.querySelector('.key-container');

function drawKeyBoard(langf = 'en', statef = 'text') {
  for (let i = 0; i < keys.length; i += 1) {
    const key = document.createElement('button');

    switch (keys[i][langf][statef]) {
      case 'Backspace':
        key.className = 'key key_long key_backspace';
        break;
      case 'Del':
        key.className = 'key key_del';
        break;
      case 'CapsLock':
        key.className = 'key key_long key_capslock';
        break;
      case 'Shift':
        key.className = 'key key_long key_shift';
        break;
      case 'Ctrl':
        key.className = 'key key_ctrl';
        break;
      case 'Win':
        key.className = 'key key_win';
        break;
      case 'Alt':
        key.className = 'key key_alt';
        break;
      case 'Enter':
        key.className = 'key key_long key_enter';
        break;
      case 'Tab':
        key.className = 'key key_tab';
        break;
      case 'en/ru':
        key.className = 'key key_lang';
        break;
      case 'Space':
        key.className = 'key key_space';
        break;
      case '◀️':
        key.className = 'key key_arrow key_arrow-left';
        break;
      case '▶️':
        key.className = 'key key_arrow key_arrow-right';
        break;
      case '▲':
        key.className = 'key key_arrow key_arrow-up';
        break;
      case '▼':
        key.className = 'key key_arrow key_arrow-down';
        break;
      default:
        key.className = 'key key_symbol';
    }

    key.setAttribute('type', 'button');
    key.innerHTML = keys[i][langf][statef];
    container.appendChild(key);
  }
}
drawKeyBoard();

// список переменных

const screen = document.querySelector('.key-textarea');
const symbols = document.querySelectorAll('.key_symbol');
const arrows = document.querySelectorAll('.key_arrow');
const tab = document.querySelector('.key_tab');
const enter = document.querySelector('.key_enter');
const space = document.querySelector('.key_space');
const backspace = document.querySelector('.key_backspace');
// const del = document.querySelector('.key_del');
const capsLock = document.querySelector('.key_capslock');
const lang = document.querySelector('.key_lang');
// const shifts = document.querySelectorAll('.key_shift');
// const ctrls = document.querySelectorAll('.key_ctrl');
// const win = document.querySelectorAll('.key_win');
// const alt = document.querySelectorAll('.key_alt');

let keysLanguage = 'en';
let keysState = 'text';

// список функций

function addSymbols(symbol) {
  switch (symbol) {
    case 'Enter':
      screen.innerHTML += '\n';
      break;
    case 'Space':
      screen.innerHTML += ' ';
      break;
    case 'Tab':
      screen.innerHTML += '    ';
      break;
    default:
      screen.innerHTML += symbol;
      break;
  }
}
function deletePreviousSymbol() {
  screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
}
function changeCase(language, state, newState) {
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i][language][state] === lang.innerHTML) {
      lang.innerHTML = keys[i][language][newState];
      break;
    }
    for (let j = 0; j < symbols.length; j += 1) {
      if (keys[i][language][state] === symbols[j].innerHTML) {
        symbols[j].innerHTML = keys[i][language][newState];
        break;
      }
    }
  }
}

function changeLang(language, newLanguage, state) {
  for (let i = 0; i < symbols.length; i += 1) {
    for (let j = 0; j < keys.length; j += 1) {
      if (symbols[i].innerHTML === keys[j][language][state]) {
        symbols[i].innerHTML = keys[j][newLanguage][state];
        break;
      }
    }
  }
}

// screen.focus();
// function deleteNextSymbol() {
//   console.log('del');

//   screen.focus();

//   screen.setRangeText('', screen.selectionStart, screen.selectionstart + 1, 'start');
// }

// отслеживание курсора

// add EventListeners

// screen.addEventListener('focus', () => {
//   let start = screen.selectionStart;
//   let end = screen.selectionEnd;
//   console.log(start);
//   console.log(end);
// });

for (let i = 0; i < symbols.length; i += 1) {
  symbols[i].addEventListener('click', () => {
    addSymbols(symbols[i].innerHTML);
  });
}
for (let i = 0; i < arrows.length; i += 1) {
  arrows[i].addEventListener('click', () => {
    addSymbols(arrows[i].innerHTML);
  });
}
enter.addEventListener('click', () => { addSymbols(enter.innerHTML); });
tab.addEventListener('click', () => { addSymbols(tab.innerHTML); });
space.addEventListener('click', () => { addSymbols(space.innerHTML); });
backspace.addEventListener('click', () => { deletePreviousSymbol(); });
// del.addEventListener('click', () => { deleteNextSymbol(); });
capsLock.addEventListener('click', () => {
  capsLock.classList.toggle('active');

  let newKeysState;
  if (keysState === 'text') {
    newKeysState = 'caps';
  } else if (keysState === 'caps') {
    newKeysState = 'text';
  }
  changeCase(keysLanguage, keysState, newKeysState);
  keysState = newKeysState;
});

lang.addEventListener('click', () => {
  let newKeysLanguage;
  if (keysLanguage === 'en') {
    newKeysLanguage = 'ru';
  } else {
    newKeysLanguage = 'en';
  }
  changeLang(keysLanguage, newKeysLanguage, keysState);
  keysLanguage = newKeysLanguage;
});

// document.addEventListener('keydown', (event) => {
//   console.log(event.key);
// });
