import { keysArray } from './additional.js';

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
  keysArray.forEach((e) => {
    const key = document.createElement('button');

    switch (e[langf][statef]) {
      case 'Backspace':
        key.className = 'key key_long key_backspace';
        break;
      case 'Del':
        key.className = 'key key_del';
        break;
      case 'CapsLock':
        key.className = 'key key_long key_capslock key_changeState';
        break;
      case 'Shift':
        key.className = 'key key_long key_shift key_changeState';
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
      case '◀':
        key.className = 'key key_arrow key_arrow-left';
        break;
      case '▶':
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
    key.innerHTML = e[langf][statef];
    container.appendChild(key);
  });
}
drawKeyBoard();

// список переменных

const screen = document.querySelector('.key-textarea');
screen.focus();
const symbols = document.querySelectorAll('.key_symbol');
const arrows = document.querySelectorAll('.key_arrow');
const arrowLeft = document.querySelector('.key_arrow-left');
const arrowRight = document.querySelector('.key_arrow-right');
const arrowUp = document.querySelector('.key_arrow-up');
const arrowDown = document.querySelector('.key_arrow-down');
const tab = document.querySelector('.key_tab');
const enter = document.querySelector('.key_enter');
const space = document.querySelector('.key_space');
const backspace = document.querySelector('.key_backspace');
const del = document.querySelector('.key_del');
const capsLock = document.querySelector('.key_capslock');
const shifts = document.querySelectorAll('.key_shift');
const lang = document.querySelector('.key_lang');
const ctrls = document.querySelectorAll('.key_ctrl');
const win = document.querySelector('.key_win');
const alts = document.querySelectorAll('.key_alt');

let keysLanguage = 'en';
let keysState = 'text';
let newKeysState;

let shiftIsActive = false;
let capsIsActive = false;

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

function updateState() {
  if (capsIsActive && shiftIsActive) {
    newKeysState = 'capsShift';
  } else if (capsIsActive && !shiftIsActive) {
    newKeysState = 'capsLock';
  } else if (shiftIsActive && !capsIsActive) {
    newKeysState = 'shift';
  } else {
    newKeysState = 'text';
  }
}

function changeSymbols(newLanguage, newState) {
  for (let i = 0; i < symbols.length; i += 1) {
    for (let j = 0; j < keysArray.length; j += 1) {
      if (lang.innerHTML === keysArray[j][keysLanguage][keysState]) {
        lang.innerHTML = keysArray[j][newLanguage][newState];
      }
      if (symbols[i].innerHTML === keysArray[j][keysLanguage][keysState]) {
        symbols[i].innerHTML = keysArray[j][newLanguage][newState];
        break;
      }
    }
  }
  keysState = newKeysState;
}

function removeActiveFromShift() {
  if (shiftIsActive === true) {
    shiftIsActive = false;
  }
  shifts.forEach((shift) => {
    if (shift.classList.contains('active')) {
      shifts.forEach((e) => e.classList.remove('active'));
    }
  });
  updateState();
  changeSymbols(keysLanguage, newKeysState);
}

// All eventListeners

capsLock.addEventListener('click', () => {
  capsLock.classList.toggle('active');
  if (capsIsActive === true) {
    capsIsActive = false;
  } else {
    capsIsActive = true;
  }

  updateState();
  changeSymbols(keysLanguage, newKeysState);
  removeActiveFromShift();
});

shifts.forEach((shift) => {
  shift.addEventListener('click', () => {
    if (shiftIsActive === true) {
      shiftIsActive = false;
    } else {
      shiftIsActive = true;
    }

    if (shift.classList.contains('active')) {
      shifts.forEach((e) => e.classList.remove('active'));
    } else {
      shifts.forEach((e) => e.classList.add('active'));
    }

    updateState();
    changeSymbols(keysLanguage, newKeysState);
  });
});

lang.addEventListener('click', () => {
  const newKeysLanguage = keysLanguage === 'en' ? 'ru' : 'en';
  changeSymbols(newKeysLanguage, keysState);
  keysLanguage = newKeysLanguage;
  removeActiveFromShift();
});

symbols.forEach((symbol) => {
  symbol.addEventListener('click', () => {
    addSymbols(symbol.innerHTML);
    removeActiveFromShift();
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    addSymbols(arrow.innerHTML);
    removeActiveFromShift();
  });
});

enter.addEventListener('click', () => {
  addSymbols(enter.innerHTML);
  removeActiveFromShift();
});
tab.addEventListener('click', () => {
  addSymbols(tab.innerHTML);
  removeActiveFromShift();
});

space.addEventListener('click', () => {
  addSymbols(space.innerHTML);
  removeActiveFromShift();
});

backspace.addEventListener('click', () => {
  deletePreviousSymbol();
  removeActiveFromShift();
});

del.addEventListener('click', () => { removeActiveFromShift(); });

// события физической клавиатуры

// keyDown

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  screen.focus();
  const eventKey = event.key;

  if (eventKey.toString().length === 1) {
    if (eventKey === ' ') {
      space.classList.add('active');
      addSymbols('Space');
    } else {
      symbols.forEach((symbol) => {
        if (symbol.innerHTML === eventKey) {
          symbol.classList.add('active');
          addSymbols(symbol.innerHTML);
        }
      });
    }
  } else if (eventKey.toString().length > 1) {
    if (eventKey === 'Tab' || eventKey === 'Enter') { //  Tab, Enter
      const currentKey = eventKey.toLowerCase();
      const currentButton = document.querySelector(`.key_${currentKey}`);
      currentButton.classList.add('active');
      addSymbols(eventKey);
    } else if (eventKey === 'Backspace') { // Backspace
      backspace.classList.add('active');
      deletePreviousSymbol();
    } else if (eventKey === 'Delete') { // Delete
      del.classList.add('active');
    } else if (eventKey === 'Control') { // Control
      ctrls.forEach((ctrl) => {
        ctrl.classList.add('active');
      });
    } else if (eventKey === 'Alt') { // Alt
      alts.forEach((alt) => {
        alt.classList.add('active');
      });
    } else if (eventKey === 'Meta') { // Win
      win.classList.add('active');
    } else if (eventKey === 'ArrowLeft') { // Arrow Left
      arrowLeft.classList.add('active');
    } else if (eventKey === 'ArrowUp') { // Arrow Up
      arrowUp.classList.add('active');
    } else if (eventKey === 'ArrowDown') { // Arrow Down
      arrowDown.classList.add('active');
    } else if (eventKey === 'ArrowRight') { // Arrow Right
      arrowRight.classList.add('active');
    } else if (eventKey === 'Shift') { // Shift
      if (shiftIsActive === true) {
        shiftIsActive = false;
      } else {
        shiftIsActive = true;
      }
      let currentActiveState;
      shifts.forEach((shift) => {
        currentActiveState = shift.classList.contains('active') ? 'active' : 'notActive';
      });
      shifts.forEach(() => {
        if (currentActiveState === 'active') {
          shifts.forEach((e) => e.classList.remove('active'));
        } else {
          shifts.forEach((e) => e.classList.add('active'));
        }
      });
      updateState();
      changeSymbols(keysLanguage, newKeysState);
    } else if (eventKey === 'CapsLock') { // CapsLock
      capsLock.classList.toggle('active');
      if (capsIsActive === true) {
        capsIsActive = false;
      } else {
        capsIsActive = true;
      }
      updateState();
      changeSymbols(keysLanguage, newKeysState);
    }
  }
});

// keyUp

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  screen.focus();
  const eventKey = event.key;

  if (eventKey.toString().length === 1) {
    if (eventKey === ' ') {
      space.classList.remove('active');
      removeActiveFromShift();
    } else {
      symbols.forEach((symbol) => {
        if (symbol.innerHTML === eventKey) {
          symbol.classList.remove('active');
        }
      });
    }
  } else if (eventKey.toString().length > 1) {
    if (eventKey === 'Tab' || eventKey === 'Enter') { //  Tab, Enter
      const currentKey = eventKey.toLowerCase();
      const currentButton = document.querySelector(`.key_${currentKey}`);
      currentButton.classList.remove('active');
      removeActiveFromShift();
    } else if (eventKey === 'Backspace') { // Backspace
      backspace.classList.remove('active');
      removeActiveFromShift();
    } else if (eventKey === 'Delete') { // Delete
      del.classList.remove('active');
      removeActiveFromShift();
    } else if (eventKey === 'Control') { // Control
      ctrls.forEach((ctrl) => {
        ctrl.classList.remove('active');
      });
      removeActiveFromShift();
    } else if (eventKey === 'Alt') { // Alt
      alts.forEach((alt) => {
        alt.classList.remove('active');
      });
      removeActiveFromShift();
    } else if (eventKey === 'Meta') { // Win
      win.classList.remove('active');
      removeActiveFromShift();
    } else if (eventKey === 'ArrowLeft') { // Arrow Left
      arrowLeft.classList.remove('active');
      removeActiveFromShift();
    } else if (eventKey === 'ArrowUp') { // Arrow Up
      arrowUp.classList.remove('active');
      removeActiveFromShift();
    } else if (eventKey === 'ArrowDown') { // Arrow Down
      arrowDown.classList.remove('active');
      removeActiveFromShift();
    } else if (eventKey === 'ArrowRight') { // Arrow Right
      arrowRight.classList.remove('active');
      removeActiveFromShift();
    }
  }
});
