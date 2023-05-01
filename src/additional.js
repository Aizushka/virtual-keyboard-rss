const keyCode = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 189, 222, 13],
  [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 37, 40, 39, 17],
];

const keysArray = [
  {
    type: 'symbol', keycode: 192, key: '`', en: { text: '`', CapsLock: '`', Shift: '~', capsShift: '`' }, ru: { text: 'ё', CapsLock: 'Ё', Shift: 'Ё', capsShift: '`' }
  },
  {
    type: 'symbol', keycode: 49, key: '1', en: { text: '1', CapsLock: '1', Shift: '!', capsShift: '!' }, ru: { text: '1', CapsLock: '1', Shift: '!', capsShift: '`'  },
  },
  {
    type: 'symbol', keycode: 50, key: '2', en: { text: '2', CapsLock: '2', Shift: '"', capsShift: '`' }, ru: { text: '2', CapsLock: '2', Shift: '"' },
  },
  {
    type: 'symbol', keycode: 51, key: '3', en: { text: '3', CapsLock: '3', Shift: '#', capsShift: '`' }, ru: { text: '3', CapsLock: '3', Shift: '№' },
  },
  {
    type: 'symbol', keycode: 52, key: '4', en: { text: '4', CapsLock: '4', Shift: '$', capsShift: '`' }, ru: { text: '4', CapsLock: '4', Shift: ';' },
  },
  {
    type: 'symbol', keycode: 53, key: '5', en: { text: '5', CapsLock: '5', Shift: '%', capsShift: '`' }, ru: { text: '5', CapsLock: '5', Shift: '%' },
  },
  {
    type: 'symbol', keycode: 54, key: '6', en: { text: '6', CapsLock: '6', Shift: '^', capsShift: '`' }, ru: { text: '6', CapsLock: '6', Shift: ':' },
  },
  {
    type: 'symbol', keycode: 55, key: '7', en: { text: '7', CapsLock: '7', Shift: '&', capsShift: '`' }, ru: { text: '7', CapsLock: '7', Shift: '?' },
  },
  {
    type: 'symbol', keycode: 56, key: '8', en: { text: '8', CapsLock: '8', Shift: '*', capsShift: '`' }, ru: { text: '8', CapsLock: '8', Shift: '*' },
  },
  {
    type: 'symbol', keycode: 57, key: '9', en: { text: '9', CapsLock: '9', Shift: '(', capsShift: '`' }, ru: { text: '9', CapsLock: '9', Shift: '(' },
  },
  {
    type: 'symbol', keycode: 48, key: '0', en: { text: '0', CapsLock: '0', Shift: ')', capsShift: '`' }, ru: { text: '0', CapsLock: '0', Shift: ')' },
  },
  {
    type: 'symbol', keycode: 189, key: '-', en: { text: '-', CapsLock: '-', Shift: '_', capsShift: '`' }, ru: { text: '-', CapsLock: '-', Shift: '_' },
  },
  {
    type: 'symbol', keycode: 187, key: '=', en: { text: '=', CapsLock: '=', Shift: '+', capsShift: '`' }, ru: { text: '=', CapsLock: '=', Shift: '+' },
  },

  {
    type: 'Backspace', keycode: 8, key: 'Backspace', en: { text: 'Backspace', CapsLock: 'Backspace', Shift: 'Backspace', capsShift: '`' }, ru: { text: 'Backspace', CapsLock: 'Backspace', Shift: 'Backspace' },
  },
  {
    type: 'Tab', keycode: 9, key: 'Tab', en: { text: 'Tab', CapsLock: 'Tab', Shift: 'Tab', capsShift: '`' }, ru: { text: 'Tab', CapsLock: 'Tab', Shift: 'Tab' },
  },

  {
    type: 'symbol', keycode: 81, key: 'q', en: { text: 'q', CapsLock: 'Q', Shift: 'Q' }, ru: { text: 'й', CapsLock: 'Й', Shift: 'Й' },
  },
  {
    type: 'symbol', keycode: 87, key: 'w', en: { text: 'w', CapsLock: 'W', Shift: 'W' }, ru: { text: 'ц', CapsLock: 'Ц', Shift: 'Ц' },
  },
  {
    type: 'symbol', keycode: 69, key: 'e', en: { text: 'e', CapsLock: 'E', Shift: 'E' }, ru: { text: 'у', CapsLock: 'У', Shift: 'У' },
  },
  {
    type: 'symbol', keycode: 82, key: 'r', en: { text: 'r', CapsLock: 'R', Shift: 'R' }, ru: { text: 'к', CapsLock: 'К', Shift: 'К' },
  },
  {
    type: 'symbol', keycode: 84, key: 't', en: { text: 't', CapsLock: 'T', Shift: 'T' }, ru: { text: 'е', CapsLock: 'Е', Shift: 'Е' },
  },
  {
    type: 'symbol', keycode: 89, key: 'y', en: { text: 'y', CapsLock: 'Y', Shift: 'Y' }, ru: { text: 'н', CapsLock: 'Н', Shift: 'Н' },
  },
  {
    type: 'symbol', keycode: 85, key: 'u', en: { text: 'u', CapsLock: 'U', Shift: 'U' }, ru: { text: 'г', CapsLock: 'Г', Shift: 'Г' },
  },
  {
    type: 'symbol', keycode: 73, key: 'i', en: { text: 'i', CapsLock: 'I', Shift: 'I' }, ru: { text: 'ш', CapsLock: 'Ш', Shift: 'Ш' },
  },
  {
    type: 'symbol', keycode: 79, key: 'o', en: { text: 'o', CapsLock: 'O', Shift: 'O' }, ru: { text: 'щ', CapsLock: 'Щ', Shift: 'Щ' },
  },
  {
    type: 'symbol', keycode: 80, key: 'p', en: { text: 'p', CapsLock: 'P', Shift: 'P' }, ru: { text: 'з', CapsLock: 'З', Shift: 'З' },
  },
  {
    type: 'symbol', keycode: 219, key: '[', en: { text: '[', CapsLock: '[', Shift: '{' }, ru: { text: 'х', CapsLock: 'Х', Shift: 'Х' },
  },
  {
    type: 'symbol', keycode: 221, key: ']', en: { text: ']', CapsLock: ']', Shift: '}' }, ru: { text: 'ъ', CapsLock: 'Ъ', Shift: 'Ъ' },
  },
  {
    type: 'symbol', keycode: 220, key: '\\', en: { text: '\\', CapsLock: '\\', Shift: '|' }, ru: { text: '\\', CapsLock: '\\', Shift: '/' },
  },

  {
    type: 'Del', keycode: 46, key: 'Delete', en: { text: 'Del', CapsLock: 'Del', Shift: 'Del' }, ru: { text: 'Del', CapsLock: 'Del', Shift: 'Del' },
  },
  {
    type: 'CapsLock', keycode: 20, key: 'CapsLock', en: { text: 'CapsLock', CapsLock: 'CapsLock', Shift: 'CapsLock' }, ru: { text: 'CapsLock', CapsLock: 'CapsLock', Shift: 'CapsLock' },
  },

  {
    type: 'symbol', keycode: 65, key: 'a', en: { text: 'a', CapsLock: 'A', Shift: 'A' }, ru: { text: 'ф', CapsLock: 'Ф', Shift: 'Ф' },
  },
  {
    type: 'symbol', keycode: 83, key: 's', en: { text: 's', CapsLock: 'S', Shift: 'S' }, ru: { text: 'ы', CapsLock: 'Ы', Shift: 'Ы' },
  },
  {
    type: 'symbol', keycode: 68, key: 'd', en: { text: 'd', CapsLock: 'D', Shift: 'D' }, ru: { text: 'в', CapsLock: 'В', Shift: 'В' },
  },
  {
    type: 'symbol', keycode: 70, key: 'f', en: { text: 'f', CapsLock: 'F', Shift: 'F' }, ru: { text: 'а', CapsLock: 'А', Shift: 'А' },
  },
  {
    type: 'symbol', keycode: 71, key: 'g', en: { text: 'g', CapsLock: 'G', Shift: 'G' }, ru: { text: 'п', CapsLock: 'П', Shift: 'П' },
  },
  {
    type: 'symbol', keycode: 72, key: 'h', en: { text: 'h', CapsLock: 'H', Shift: 'H' }, ru: { text: 'р', CapsLock: 'Р', Shift: 'Р' },
  },
  {
    type: 'symbol', keycode: 74, key: 'j', en: { text: 'j', CapsLock: 'J', Shift: 'J' }, ru: { text: 'о', CapsLock: 'О', Shift: 'О' },
  },
  {
    type: 'symbol', keycode: 75, key: 'k', en: { text: 'k', CapsLock: 'K', Shift: 'J' }, ru: { text: 'л', CapsLock: 'Л', Shift: 'Л' },
  },
  {
    type: 'symbol', keycode: 76, key: 'l', en: { text: 'l', CapsLock: 'L', Shift: 'L' }, ru: { text: 'д', CapsLock: 'Д', Shift: 'Д' },
  },
  {
    type: 'symbol', keycode: 186, key: ';', en: { text: ';', CapsLock: ';', Shift: ':' }, ru: { text: 'ж', CapsLock: 'Ж', Shift: 'Ж' },
  },
  {
    type: 'symbol', keycode: 222, key: '\'', en: { text: '\'', CapsLock: '\'', Shift: '"' }, ru: { text: 'э', CapsLock: 'Э', Shift: 'Э' },
  },

  {
    type: 'Enter', keycode: 13, key: 'Enter', en: { text: 'Enter', CapsLock: 'Enter', Shift: 'Enter' }, ru: { text: 'Enter', CapsLock: 'Enter', Shift: 'Enter' },
  },
  {
    type: 'Shift', keycode: 16, key: 'Shift', en: { text: 'Shift', CapsLock: 'Shift', Shift: 'Shift' }, ru: { text: 'Shift', CapsLock: 'Shift', Shift: 'Shift' },
  },

  {
    type: 'symbol', keycode: 90, key: 'z', en: { text: 'z', CapsLock: 'Z', Shift: 'Z' }, ru: { text: 'я', CapsLock: 'Я', Shift: 'Я' },
  },
  {
    type: 'symbol', keycode: 88, key: 'x', en: { text: 'x', CapsLock: 'X', Shift: 'X' }, ru: { text: 'ч', CapsLock: 'Ч', Shift: 'Ч' },
  },
  {
    type: 'symbol', keycode: 67, key: 'c', en: { text: 'c', CapsLock: 'C', Shift: 'C' }, ru: { text: 'с', CapsLock: 'С', Shift: 'С' },
  },
  {
    type: 'symbol', keycode: 86, key: 'v', en: { text: 'v', CapsLock: 'V', Shift: 'V' }, ru: { text: 'м', CapsLock: 'М', Shift: 'М' },
  },
  {
    type: 'symbol', keycode: 66, key: 'b', en: { text: 'b', CapsLock: 'B', Shift: 'B' }, ru: { text: 'и', CapsLock: 'И', Shift: 'И' },
  },
  {
    type: 'symbol', keycode: 78, key: 'n', en: { text: 'n', CapsLock: 'N', Shift: 'N' }, ru: { text: 'т', CapsLock: 'Т', Shift: 'Т' },
  },
  {
    type: 'symbol', keycode: 77, key: 'm', en: { text: 'm', CapsLock: 'M', Shift: 'M' }, ru: { text: 'ь', CapsLock: 'Ь', Shift: 'Ь' },
  },
  {
    type: 'symbol', keycode: 188, key: ',', en: { text: ',', CapsLock: ',', Shift: '<' }, ru: { text: 'б', CapsLock: 'Б', Shift: 'Б' },
  },
  {
    type: 'symbol', keycode: 190, key: '.', en: { text: '.', CapsLock: '.', Shift: '>' }, ru: { text: 'ю', CapsLock: 'Ю', Shift: 'Ю' },
  },
  {
    type: 'symbol', keycode: 191, key: '/', en: { text: '/', CapsLock: '/', Shift: '?' }, ru: { text: '.', CapsLock: '.', Shift: ',' },
  },

  {
    type: 'Arrow', keycode: 38, key: 'ArrowUp', en: { text: '▲', CapsLock: '▲', Shift: '▲' }, ru: { text: '▲', CapsLock: '▲', Shift: '▲' },
  },
  {
    type: 'Shift', keycode: 17, key: 'Shift', en: { text: 'Shift', CapsLock: 'Shift', Shift: 'Shift' }, ru: { text: 'Shift', CapsLock: 'Shift', Shift: 'Shift' },
  },

  {
    type: 'Ctrl', keycode: 16, key: 'Control', en: { text: 'Ctrl', CapsLock: 'Ctrl', Shift: 'Ctrl' }, ru: { text: 'Ctrl', CapsLock: 'Ctrl', Shift: 'Ctrl' },
  },
  {
    type: 'Win', keycode: 91, key: 'Meta', en: { text: 'Win', CapsLock: 'Win', Shift: 'Win' }, ru: { text: 'Win', CapsLock: 'Win', Shift: 'Win' },
  },
  {
    type: 'Alt', keycode: 18, key: 'Alt', en: { text: 'Alt', CapsLock: 'Alt', Shift: 'Alt' }, ru: { text: 'Alt', CapsLock: 'Alt', Shift: 'Alt' },
  },
  {
    type: 'Lang', keycode: 0, key: 'Lang', en: { text: 'en/ru', CapsLock: 'EN/RU', Shift: 'EN/RU' }, ru: { text: 'en/ru', CapsLock: 'EN/RU', Shift: 'EN/RU' },
  },
  {
    type: 'Space', keycode: 32, key: '', en: { text: 'Space', CapsLock: 'Space', Shift: 'Space' }, ru: { text: 'Space', CapsLock: 'Space', Shift: 'Space' },
  },
  {
    type: 'Alt', keycode: 18, key: 'Alt', en: { text: 'Alt', CapsLock: 'Alt', Shift: 'Alt' }, ru: { text: 'Alt', CapsLock: 'Alt', Shift: 'Alt' },
  },
  {
    type: 'Arrow', keycode: 37, key: 'ArrowLeft', en: { text: '◀', CapsLock: '◀', Shift: '◀' }, ru: { text: '◀', CapsLock: '◀', Shift: '◀' },
  },
  {
    type: 'Arrow', keycode: 40, key: 'ArrowDown', en: { text: '▼', CapsLock: '▼', Shift: '▼' }, ru: { text: '▼', CapsLock: '▼', Shift: '▼' },
  },
  {
    type: 'Arrow', keycode: 39, key: 'ArrowRight', en: { text: '▶', CapsLock: '▶', Shift: '▶' }, ru: { text: '▶', CapsLock: '▶', Shift: '▶' },
  },
  {
    type: 'Ctrl', keycode: 17, key: 'Control', en: { text: 'Ctrl', CapsLock: 'Ctrl', Shift: 'Ctrl' }, ru: { text: 'Ctrl', CapsLock: 'Ctr', Shift: 'Ctr' },
  },

];

export { keysArray, keyCode };
