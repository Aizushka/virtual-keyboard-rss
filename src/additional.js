const keyCode = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 189, 222, 13],
  [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 37, 40, 39, 17],
];

const keysArray = [
  // row 1
  {
    type: 'symbol',
    keycode: 192,
    key: '`',
    en: {
      text: '`', capsLock: '`', shift: '~', capsShift: '~',
    },
    ru: {
      text: 'ё', capsLock: 'Ё', shift: 'Ё', capsShift: 'ё',
    },
  },
  {
    type: 'symbol',
    keycode: 49,
    key: '1',
    en: {
      text: '1', capsLock: '1', shift: '!', capsShift: '!',
    },
    ru: {
      text: '1', capsLock: '1', shift: '!', capsShift: '!',
    },
  },
  {
    type: 'symbol',
    keycode: 50,
    key: '2',
    en: {
      text: '2', capsLock: '2', shift: '@', capsShift: '@',
    },
    ru: {
      text: '2', capsLock: '2', shift: '"', capsShift: '"',
    },
  },
  {
    type: 'symbol',
    keycode: 51,
    key: '3',
    en: {
      text: '3', capsLock: '3', shift: '#', capsShift: '#',
    },
    ru: {
      text: '3', capsLock: '3', shift: '№', capsShift: '№',
    },
  },
  {
    type: 'symbol',
    keycode: 52,
    key: '4',
    en: {
      text: '4', capsLock: '4', shift: '$', capsShift: '$',
    },
    ru: {
      text: '4', capsLock: '4', shift: ';', capsShift: ';',
    },
  },
  {
    type: 'symbol',
    keycode: 53,
    key: '5',
    en: {
      text: '5', capsLock: '5', shift: '%', capsShift: '%',
    },
    ru: {
      text: '5', capsLock: '5', shift: '%', capsShift: '%',
    },
  },
  {
    type: 'symbol',
    keycode: 54,
    key: '6',
    en: {
      text: '6', capsLock: '6', shift: '^', capsShift: '^',
    },
    ru: {
      text: '6', capsLock: '6', shift: ':', capsShift: ':',
    },
  },
  {
    type: 'symbol',
    keycode: 55,
    key: '7',
    en: {
      text: '7', capsLock: '7', shift: '&', capsShift: '&',
    },
    ru: {
      text: '7', capsLock: '7', shift: '?', capsShift: '?',
    },
  },
  {
    type: 'symbol',
    keycode: 56,
    key: '8',
    en: {
      text: '8', capsLock: '8', shift: '*', capsShift: '*',
    },
    ru: {
      text: '8', capsLock: '8', shift: '*', capsShift: '*',
    },
  },
  {
    type: 'symbol',
    keycode: 57,
    key: '9',
    en: {
      text: '9', capsLock: '9', shift: '(', capsShift: '(',
    },
    ru: {
      text: '9', capsLock: '9', shift: '(', capsShift: '(',
    },
  },
  {
    type: 'symbol',
    keycode: 48,
    key: '0',
    en: {
      text: '0', capsLock: '0', shift: ')', capsShift: ')',
    },
    ru: {
      text: '0', capsLock: '0', shift: ')', capsShift: ')',
    },
  },
  {
    type: 'symbol',
    keycode: 189,
    key: '-',
    en: {
      text: '-', capsLock: '-', shift: '_', capsShift: '_',
    },
    ru: {
      text: '-', capsLock: '-', shift: '_', capsShift: '_',
    },
  },
  {
    type: 'symbol',
    keycode: 187,
    key: '=',
    en: {
      text: '=', capsLock: '=', shift: '+', capsShift: '+',
    },
    ru: {
      text: '=', capsLock: '=', shift: '+', capsShift: '+',
    },
  },

  {
    type: 'Backspace',
    keycode: 8,
    key: 'Backspace',
    en: {
      text: 'Backspace', capsLock: 'Backspace', shift: 'Backspace', capsShift: 'Backspace',
    },
    ru: {
      text: 'Backspace', capsLock: 'Backspace', shift: 'Backspace', capsShift: 'Backspace',
    },
  },

  // row 2

  {
    type: 'Tab',
    keycode: 9,
    key: 'Tab',
    en: {
      text: 'Tab', capsLock: 'Tab', shift: 'Tab', capsShift: 'Tab',
    },
    ru: {
      text: 'Tab', capsLock: 'Tab', shift: 'Tab', capsShift: 'Tab',
    },
  },

  {
    type: 'symbol',
    keycode: 81,
    key: 'q',
    en: {
      text: 'q', capsLock: 'Q', shift: 'Q', capsShift: 'q',
    },
    ru: {
      text: 'й', capsLock: 'Й', shift: 'Й', capsShift: 'й',
    },
  },
  {
    type: 'symbol',
    keycode: 87,
    key: 'w',
    en: {
      text: 'w', capsLock: 'W', shift: 'W', capsShift: 'w',
    },
    ru: {
      text: 'ц', capsLock: 'Ц', shift: 'Ц', capsShift: 'ц',
    },
  },
  {
    type: 'symbol',
    keycode: 69,
    key: 'e',
    en: {
      text: 'e', capsLock: 'E', shift: 'E', capsShift: 'e',
    },
    ru: {
      text: 'у', capsLock: 'У', shift: 'У', capsShift: 'у',
    },
  },
  {
    type: 'symbol',
    keycode: 82,
    key: 'r',
    en: {
      text: 'r', capsLock: 'R', shift: 'R', capsShift: 'r',
    },
    ru: {
      text: 'к', capsLock: 'К', shift: 'К', capsShift: 'к',
    },
  },
  {
    type: 'symbol',
    keycode: 84,
    key: 't',
    en: {
      text: 't', capsLock: 'T', shift: 'T', capsShift: 't',
    },
    ru: {
      text: 'е', capsLock: 'Е', shift: 'Е', capsShift: 'е',
    },
  },
  {
    type: 'symbol',
    keycode: 89,
    key: 'y',
    en: {
      text: 'y', capsLock: 'Y', shift: 'Y', capsShift: 'y',
    },
    ru: {
      text: 'н', capsLock: 'Н', shift: 'Н', capsShift: 'н',
    },
  },
  {
    type: 'symbol',
    keycode: 85,
    key: 'u',
    en: {
      text: 'u', capsLock: 'U', shift: 'U', capsShift: 'u',
    },
    ru: {
      text: 'г', capsLock: 'Г', shift: 'Г', capsShift: 'г',
    },
  },
  {
    type: 'symbol',
    keycode: 73,
    key: 'i',
    en: {
      text: 'i', capsLock: 'I', shift: 'I', capsShift: 'i',
    },
    ru: {
      text: 'ш', capsLock: 'Ш', shift: 'Ш', capsShift: 'ш',
    },
  },
  {
    type: 'symbol',
    keycode: 79,
    key: 'o',
    en: {
      text: 'o', capsLock: 'O', shift: 'O', capsShift: 'o',
    },
    ru: {
      text: 'щ', capsLock: 'Щ', shift: 'Щ', capsShift: 'щ',
    },
  },
  {
    type: 'symbol',
    keycode: 80,
    key: 'p',
    en: {
      text: 'p', capsLock: 'P', shift: 'P', capsShift: 'p',
    },
    ru: {
      text: 'з', capsLock: 'З', shift: 'З', capsShift: 'з',
    },
  },
  {
    type: 'symbol',
    keycode: 219,
    key: '[',
    en: {
      text: '[', capsLock: '[', shift: '{', capsShift: '{',
    },
    ru: {
      text: 'х', capsLock: 'Х', shift: 'Х', capsShift: 'х',
    },
  },
  {
    type: 'symbol',
    keycode: 221,
    key: ']',
    en: {
      text: ']', capsLock: ']', shift: '}', capsShift: '}',
    },
    ru: {
      text: 'ъ', capsLock: 'Ъ', shift: 'Ъ', capsShift: 'ъ',
    },
  },
  {
    type: 'symbol',
    keycode: 220,
    key: '\\',
    en: {
      text: '\\', capsLock: '\\', shift: '|', capsShift: '|',
    },
    ru: {
      text: '\\', capsLock: '\\', shift: '/', capsShift: '/',
    },
  },

  {
    type: 'Del',
    keycode: 46,
    key: 'Delete',
    en: {
      text: 'Del', capsLock: 'Del', shift: 'Del', capsShift: 'Del',
    },
    ru: {
      text: 'Del', capsLock: 'Del', shift: 'Del', capsShift: 'Del',
    },
  },

  // row 3

  {
    type: 'CapsLock',
    keycode: 20,
    key: 'CapsLock',
    en: {
      text: 'CapsLock', capsLock: 'CapsLock', shift: 'CapsLock', capsShift: 'CapsLock',
    },
    ru: {
      text: 'CapsLock', capsLock: 'CapsLock', shift: 'CapsLock', capsShift: 'CapsLock',
    },
  },

  {
    type: 'symbol',
    keycode: 65,
    key: 'a',
    en: {
      text: 'a', capsLock: 'A', shift: 'A', capsShift: 'a',
    },
    ru: {
      text: 'ф', capsLock: 'Ф', shift: 'Ф', capsShift: 'ф',
    },
  },
  {
    type: 'symbol',
    keycode: 83,
    key: 's',
    en: {
      text: 's', capsLock: 'S', shift: 'S', capsShift: 's',
    },
    ru: {
      text: 'ы', capsLock: 'Ы', shift: 'Ы', capsShift: 'ы',
    },
  },
  {
    type: 'symbol',
    keycode: 68,
    key: 'd',
    en: {
      text: 'd', capsLock: 'D', shift: 'D', capsShift: 'd',
    },
    ru: {
      text: 'в', capsLock: 'В', shift: 'В', capsShift: 'в',
    },
  },
  {
    type: 'symbol',
    keycode: 70,
    key: 'f',
    en: {
      text: 'f', capsLock: 'F', shift: 'F', capsShift: 'f',
    },
    ru: {
      text: 'а', capsLock: 'А', shift: 'А', capsShift: 'а',
    },
  },
  {
    type: 'symbol',
    keycode: 71,
    key: 'g',
    en: {
      text: 'g', capsLock: 'G', shift: 'G', capsShift: 'g',
    },
    ru: {
      text: 'п', capsLock: 'П', shift: 'П', capsShift: 'п',
    },
  },
  {
    type: 'symbol',
    keycode: 72,
    key: 'h',
    en: {
      text: 'h', capsLock: 'H', shift: 'H', capsShift: 'h',
    },
    ru: {
      text: 'р', capsLock: 'Р', shift: 'Р', capsShift: 'р',
    },
  },
  {
    type: 'symbol',
    keycode: 74,
    key: 'j',
    en: {
      text: 'j', capsLock: 'J', shift: 'J', capsShift: 'j',
    },
    ru: {
      text: 'о', capsLock: 'О', shift: 'О', capsShift: 'о',
    },
  },
  {
    type: 'symbol',
    keycode: 75,
    key: 'k',
    en: {
      text: 'k', capsLock: 'K', shift: 'K', capsShift: 'k',
    },
    ru: {
      text: 'л', capsLock: 'Л', shift: 'Л', capsShift: 'л',
    },
  },
  {
    type: 'symbol',
    keycode: 76,
    key: 'l',
    en: {
      text: 'l', capsLock: 'L', shift: 'L', capsShift: 'l',
    },
    ru: {
      text: 'д', capsLock: 'Д', shift: 'Д', capsShift: 'д',
    },
  },
  {
    type: 'symbol',
    keycode: 186,
    key: ';',
    en: {
      text: ';', capsLock: ';', shift: ':', capsShift: ':',
    },
    ru: {
      text: 'ж', capsLock: 'Ж', shift: 'Ж', capsShift: 'ж',
    },
  },
  {
    type: 'symbol',
    keycode: 222,
    key: '\'',
    en: {
      text: '\'', capsLock: '\'', shift: '"', capsShift: '"',
    },
    ru: {
      text: 'э', capsLock: 'Э', shift: 'Э', capsShift: 'э',
    },
  },
  {
    type: 'Enter',
    keycode: 13,
    key: 'Enter',
    en: {
      text: 'Enter', capsLock: 'Enter', shift: 'Enter', capsShift: 'Enter',
    },
    ru: {
      text: 'Enter', capsLock: 'Enter', shift: 'Enter', capsShift: 'Enter',
    },
  },

  // row 4

  {
    type: 'Shift',
    keycode: 16,
    key: 'Shift',
    en: {
      text: 'Shift', capsLock: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
    ru: {
      text: 'Shift', capsLock: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
  },

  {
    type: 'symbol',
    keycode: 90,
    key: 'z',
    en: {
      text: 'z', capsLock: 'Z', shift: 'Z', capsShift: 'z',
    },
    ru: {
      text: 'я', capsLock: 'Я', shift: 'Я', capsShift: 'я',
    },
  },
  {
    type: 'symbol',
    keycode: 88,
    key: 'x',
    en: {
      text: 'x', capsLock: 'X', shift: 'X', capsShift: 'x',
    },
    ru: {
      text: 'ч', capsLock: 'Ч', shift: 'Ч', capsShift: 'ч',
    },
  },
  {
    type: 'symbol',
    keycode: 67,
    key: 'c',
    en: {
      text: 'c', capsLock: 'C', shift: 'C', capsShift: 'c',
    },
    ru: {
      text: 'с', capsLock: 'С', shift: 'С', capsShift: 'с',
    },
  },
  {
    type: 'symbol',
    keycode: 86,
    key: 'v',
    en: {
      text: 'v', capsLock: 'V', shift: 'V', capsShift: 'v',
    },
    ru: {
      text: 'м', capsLock: 'М', shift: 'М', capsShift: 'м',
    },
  },
  {
    type: 'symbol',
    keycode: 66,
    key: 'b',
    en: {
      text: 'b', capsLock: 'B', shift: 'B', capsShift: 'b',
    },
    ru: {
      text: 'и', capsLock: 'И', shift: 'И', capsShift: 'и',
    },
  },
  {
    type: 'symbol',
    keycode: 78,
    key: 'n',
    en: {
      text: 'n', capsLock: 'N', shift: 'N', capsShift: 'n',
    },
    ru: {
      text: 'т', capsLock: 'Т', shift: 'Т', capsShift: 'т',
    },
  },
  {
    type: 'symbol',
    keycode: 77,
    key: 'm',
    en: {
      text: 'm', capsLock: 'M', shift: 'M', capsShift: 'm',
    },
    ru: {
      text: 'ь', capsLock: 'Ь', shift: 'Ь', capsShift: 'ь',
    },
  },
  {
    type: 'symbol',
    keycode: 188,
    key: ',',
    en: {
      text: ',', capsLock: ',', shift: '<', capsShift: '<',
    },
    ru: {
      text: 'б', capsLock: 'Б', shift: 'Б', capsShift: 'б',
    },
  },
  {
    type: 'symbol',
    keycode: 190,
    key: '.',
    en: {
      text: '.', capsLock: '.', shift: '>', capsShift: '>',
    },
    ru: {
      text: 'ю', capsLock: 'Ю', shift: 'Ю', capsShift: 'ю',
    },
  },
  {
    type: 'symbol',
    keycode: 191,
    key: '/',
    en: {
      text: '/', capsLock: '/', shift: '?', capsShift: '?',
    },
    ru: {
      text: '.', capsLock: '.', shift: ',', capsShift: ',',
    },
  },

  {
    type: 'Arrow',
    keycode: 38,
    key: 'ArrowUp',
    en: {
      text: '▲', capsLock: '▲', shift: '▲', capsShift: '▲',
    },
    ru: {
      text: '▲', capsLock: '▲', shift: '▲', capsShift: '▲',
    },
  },
  {
    type: 'Shift',
    keycode: 17,
    key: 'Shift',
    en: {
      text: 'Shift', capsLock: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
    ru: {
      text: 'Shift', capsLock: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
  },

  // row 5

  {
    type: 'Ctrl',
    keycode: 16,
    key: 'Control',
    en: {
      text: 'Ctrl', capsLock: 'Ctrl', shift: 'Ctrl', capsShift: 'Ctrl',
    },
    ru: {
      text: 'Ctrl', capsLock: 'Ctrl', shift: 'Ctrl', capsShift: 'Ctrl',
    },
  },
  {
    type: 'Win',
    keycode: 91,
    key: 'Meta',
    en: {
      text: 'Win', capsLock: 'Win', shift: 'Win', capsShift: 'Win',
    },
    ru: {
      text: 'Win', capsLock: 'Win', shift: 'Win', capsShift: 'Win',
    },
  },
  {
    type: 'Alt',
    keycode: 18,
    key: 'Alt',
    en: {
      text: 'Alt', capsLock: 'Alt', shift: 'Alt', capsShift: 'Alt',
    },
    ru: {
      text: 'Alt', capsLock: 'Alt', shift: 'Alt', capsShift: 'Alt',
    },
  },
  {
    type: 'Lang',
    keycode: 0,
    key: 'Lang',
    en: {
      text: 'en/ru', capsLock: 'EN/RU', shift: 'EN/RU', capsShift: 'en/ru',
    },
    ru: {
      text: 'en/ru', capsLock: 'EN/RU', shift: 'EN/RU', capsShift: 'en/ru',
    },
  },
  {
    type: 'Space',
    keycode: 32,
    key: '',
    en: {
      text: 'Space', capsLock: 'Space', shift: 'Space', capsShift: 'Space',
    },
    ru: {
      text: 'Space', capsLock: 'Space', shift: 'Space', capsShift: 'Space',
    },
  },
  {
    type: 'Alt',
    keycode: 18,
    key: 'Alt',
    en: {
      text: 'Alt', capsLock: 'Alt', shift: 'Alt', capsShift: 'Alt',
    },
    ru: {
      text: 'Alt', capsLock: 'Alt', shift: 'Alt', capsShift: 'Alt',
    },
  },
  {
    type: 'Arrow',
    keycode: 37,
    key: 'ArrowLeft',
    en: {
      text: '◀', capsLock: '◀', shift: '◀', capsShift: '◀',
    },
    ru: {
      text: '◀', capsLock: '◀', shift: '◀', capsShift: '◀',
    },
  },
  {
    type: 'Arrow',
    keycode: 40,
    key: 'ArrowDown',
    en: {
      text: '▼', capsLock: '▼', shift: '▼', capsShift: '▼',
    },
    ru: {
      text: '▼', capsLock: '▼', shift: '▼', capsShift: '▼',
    },
  },
  {
    type: 'Arrow',
    keycode: 39,
    key: 'ArrowRight',
    en: {
      text: '▶', capsLock: '▶', shift: '▶', capsShift: '▶',
    },
    ru: {
      text: '▶', capsLock: '▶', shift: '▶', capsShift: '▶',
    },
  },
  {
    type: 'Ctrl',
    keycode: 17,
    key: 'Control',
    en: {
      text: 'Ctrl', capsLock: 'Ctrl', shift: 'Ctrl', capsShift: 'Ctrl',
    },
    ru: {
      text: 'Ctrl', capsLock: 'Ctrl', shift: 'Ctrl', capsShift: 'Ctrl',
    },
  },
];

export { keysArray, keyCode };
