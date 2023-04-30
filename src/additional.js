const keyCode = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 189, 222, 13],
  [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 37, 40, 39, 17],
];

const keys = [
  {
    type: 'symbol', keycode: 192, key: '`', en: { text: '`', caps: '`', shift: '~' }, ru: { text: 'ё', caps: 'Ё', shift: 'Ё' },
  },
  {
    type: 'symbol', keycode: 49, key: '1', en: { text: '1', caps: '1', shift: '!' }, ru: { text: '1', caps: '1', shift: '!' },
  },
  {
    type: 'symbol', keycode: 50, key: '2', en: { text: '2', caps: '2', shift: '"' }, ru: { text: '2', caps: '2', shift: '"' },
  },
  {
    type: 'symbol', keycode: 51, key: '3', en: { text: '3', caps: '3', shift: '#' }, ru: { text: '3', caps: '3', shift: '№' },
  },
  {
    type: 'symbol', keycode: 52, key: '4', en: { text: '4', caps: '4', shift: '$' }, ru: { text: '4', caps: '4', shift: ';' },
  },
  {
    type: 'symbol', keycode: 53, key: '5', en: { text: '5', caps: '5', shift: '%' }, ru: { text: '5', caps: '5', shift: '%' },
  },
  {
    type: 'symbol', keycode: 54, key: '6', en: { text: '6', caps: '6', shift: '^' }, ru: { text: '6', caps: '6', shift: ':' },
  },
  {
    type: 'symbol', keycode: 55, key: '7', en: { text: '7', caps: '7', shift: '&' }, ru: { text: '7', caps: '7', shift: '?' },
  },
  {
    type: 'symbol', keycode: 56, key: '8', en: { text: '8', caps: '8', shift: '*' }, ru: { text: '8', caps: '8', shift: '*' },
  },
  {
    type: 'symbol', keycode: 57, key: '9', en: { text: '9', caps: '9', shift: '(' }, ru: { text: '9', caps: '9', shift: '(' },
  },
  {
    type: 'symbol', keycode: 48, key: '0', en: { text: '0', caps: '0', shift: ')' }, ru: { text: '0', caps: '0', shift: ')' },
  },
  {
    type: 'symbol', keycode: 189, key: '-', en: { text: '-', caps: '-', shift: '_' }, ru: { text: '-', caps: '-', shift: '_' },
  },
  {
    type: 'symbol', keycode: 187, key: '=', en: { text: '=', caps: '=', shift: '+' }, ru: { text: '=', caps: '=', shift: '+' },
  },

  {
    type: 'Backspace', keycode: 8, key: 'Backspace', en: { text: 'Backspace', caps: 'Backspace', shift: 'Backspace' }, ru: { text: 'Backspace', caps: 'Backspace', shift: 'Backspace' },
  },
  {
    type: 'Tab', keycode: 9, key: 'Tab', en: { text: 'Tab', caps: 'Tab', shift: 'Tab' }, ru: { text: 'Tab', caps: 'Tab', shift: 'Tab' },
  },

  {
    type: 'symbol', keycode: 81, key: 'q', en: { text: 'q', caps: 'Q', shift: 'Q' }, ru: { text: 'й', caps: 'Й', shift: 'Й' },
  },
  {
    type: 'symbol', keycode: 87, key: 'w', en: { text: 'w', caps: 'W', shift: 'W' }, ru: { text: 'ц', caps: 'Ц', shift: 'Ц' },
  },
  {
    type: 'symbol', keycode: 69, key: 'e', en: { text: 'e', caps: 'E', shift: 'E' }, ru: { text: 'у', caps: 'У', shift: 'У' },
  },
  {
    type: 'symbol', keycode: 82, key: 'r', en: { text: 'r', caps: 'R', shift: 'R' }, ru: { text: 'к', caps: 'К', shift: 'К' },
  },
  {
    type: 'symbol', keycode: 84, key: 't', en: { text: 't', caps: 'T', shift: 'T' }, ru: { text: 'е', caps: 'Е', shift: 'Е' },
  },
  {
    type: 'symbol', keycode: 89, key: 'y', en: { text: 'y', caps: 'Y', shift: 'Y' }, ru: { text: 'н', caps: 'Н', shift: 'Н' },
  },
  {
    type: 'symbol', keycode: 85, key: 'u', en: { text: 'u', caps: 'U', shift: 'U' }, ru: { text: 'г', caps: 'Г', shift: 'Г' },
  },
  {
    type: 'symbol', keycode: 73, key: 'i', en: { text: 'i', caps: 'I', shift: 'I' }, ru: { text: 'ш', caps: 'Ш', shift: 'Ш' },
  },
  {
    type: 'symbol', keycode: 79, key: 'o', en: { text: 'o', caps: 'O', shift: 'O' }, ru: { text: 'щ', caps: 'Щ', shift: 'Щ' },
  },
  {
    type: 'symbol', keycode: 80, key: 'p', en: { text: 'p', caps: 'P', shift: 'P' }, ru: { text: 'з', caps: 'З', shift: 'З' },
  },
  {
    type: 'symbol', keycode: 219, key: '[', en: { text: '[', caps: '[', shift: '{' }, ru: { text: 'х', caps: 'Х', shift: 'Х' },
  },
  {
    type: 'symbol', keycode: 221, key: ']', en: { text: ']', caps: ']', shift: '}' }, ru: { text: 'ъ', caps: 'Ъ', shift: 'Ъ' },
  },
  {
    type: 'symbol', keycode: 220, key: '\\', en: { text: '\\', caps: '\\', shift: '|' }, ru: { text: '\\', caps: '\\', shift: '/' },
  },

  {
    type: 'Del', keycode: 46, key: 'Delete', en: { text: 'Del', caps: 'Del', shift: 'Del' }, ru: { text: 'Del', caps: 'Del', shift: 'Del' },
  },
  {
    type: 'CapsLock', keycode: 20, key: 'CapsLock', en: { text: 'CapsLock', caps: 'CapsLock', shift: 'CapsLock' }, ru: { text: 'CapsLock', caps: 'CapsLock', shift: 'CapsLock' },
  },

  {
    type: 'symbol', keycode: 65, key: 'a', en: { text: 'a', caps: 'A', shift: 'A' }, ru: { text: 'ф', caps: 'Ф', shift: 'Ф' },
  },
  {
    type: 'symbol', keycode: 83, key: 's', en: { text: 's', caps: 'S', shift: 'S' }, ru: { text: 'ы', caps: 'Ы', shift: 'Ы' },
  },
  {
    type: 'symbol', keycode: 68, key: 'd', en: { text: 'd', caps: 'D', shift: 'D' }, ru: { text: 'в', caps: 'В', shift: 'В' },
  },
  {
    type: 'symbol', keycode: 70, key: 'f', en: { text: 'f', caps: 'F', shift: 'F' }, ru: { text: 'а', caps: 'А', shift: 'А' },
  },
  {
    type: 'symbol', keycode: 71, key: 'g', en: { text: 'g', caps: 'G', shift: 'G' }, ru: { text: 'п', caps: 'П', shift: 'П' },
  },
  {
    type: 'symbol', keycode: 72, key: 'h', en: { text: 'h', caps: 'H', shift: 'H' }, ru: { text: 'р', caps: 'Р', shift: 'Р' },
  },
  {
    type: 'symbol', keycode: 74, key: 'j', en: { text: 'j', caps: 'J', shift: 'J' }, ru: { text: 'о', caps: 'О', shift: 'О' },
  },
  {
    type: 'symbol', keycode: 75, key: 'k', en: { text: 'k', caps: 'K', shift: 'J' }, ru: { text: 'л', caps: 'Л', shift: 'Л' },
  },
  {
    type: 'symbol', keycode: 76, key: 'l', en: { text: 'l', caps: 'L', shift: 'L' }, ru: { text: 'д', caps: 'Д', shift: 'Д' },
  },
  {
    type: 'symbol', keycode: 186, key: ';', en: { text: ';', caps: ';', shift: ':' }, ru: { text: 'ж', caps: 'Ж', shift: 'Ж' },
  },
  {
    type: 'symbol', keycode: 222, key: '\'', en: { text: '\'', caps: '\'', shift: '"' }, ru: { text: 'э', caps: 'Э', shift: 'Э' },
  },

  {
    type: 'Enter', keycode: 13, key: 'Enter', en: { text: 'Enter', caps: 'Enter', shift: 'Enter' }, ru: { text: 'Enter', caps: 'Enter', shift: 'Enter' },
  },
  {
    type: 'Shift', keycode: 16, key: 'Shift', en: { text: 'Shift', caps: 'Shift', shift: 'Shift' }, ru: { text: 'Shift', caps: 'Shift', shift: 'Shift' },
  },

  {
    type: 'symbol', keycode: 90, key: 'z', en: { text: 'z', caps: 'Z', shift: 'Z' }, ru: { text: 'я', caps: 'Я', shift: 'Я' },
  },
  {
    type: 'symbol', keycode: 88, key: 'x', en: { text: 'x', caps: 'X', shift: 'X' }, ru: { text: 'ч', caps: 'Ч', shift: 'Ч' },
  },
  {
    type: 'symbol', keycode: 67, key: 'c', en: { text: 'c', caps: 'C', shift: 'C' }, ru: { text: 'с', caps: 'С', shift: 'С' },
  },
  {
    type: 'symbol', keycode: 86, key: 'v', en: { text: 'v', caps: 'V', shift: 'V' }, ru: { text: 'м', caps: 'М', shift: 'М' },
  },
  {
    type: 'symbol', keycode: 66, key: 'b', en: { text: 'b', caps: 'B', shift: 'B' }, ru: { text: 'и', caps: 'И', shift: 'И' },
  },
  {
    type: 'symbol', keycode: 78, key: 'n', en: { text: 'n', caps: 'N', shift: 'N' }, ru: { text: 'т', caps: 'Т', shift: 'Т' },
  },
  {
    type: 'symbol', keycode: 77, key: 'm', en: { text: 'm', caps: 'M', shift: 'M' }, ru: { text: 'ь', caps: 'Ь', shift: 'Ь' },
  },
  {
    type: 'symbol', keycode: 188, key: ',', en: { text: ',', caps: ',', shift: '<' }, ru: { text: 'б', caps: 'Б', shift: 'Б' },
  },
  {
    type: 'symbol', keycode: 190, key: '.', en: { text: '.', caps: '.', shift: '>' }, ru: { text: 'ю', caps: 'Ю', shift: 'Ю' },
  },
  {
    type: 'symbol', keycode: 191, key: '/', en: { text: '/', caps: '/', shift: '?' }, ru: { text: '.', caps: '.', shift: ',' },
  },

  {
    type: 'Arrow', keycode: 38, key: 'ArrowUp', en: { text: '▲', caps: '▲', shift: '▲' }, ru: { text: '▲', caps: '▲', shift: '▲' },
  },
  {
    type: 'Shift', keycode: 17, key: 'Shift', en: { text: 'Shift', caps: 'Shift', shift: 'Shift' }, ru: { text: 'Shift', caps: 'Shift', shift: 'Shift' },
  },

  {
    type: 'Ctrl', keycode: 16, key: 'Control', en: { text: 'Ctrl', caps: 'Ctrl', shift: 'Ctrl' }, ru: { text: 'Ctrl', caps: 'Ctrl', shift: 'Ctrl' },
  },
  {
    type: 'Win', keycode: 91, key: 'Meta', en: { text: 'Win', caps: 'Win', shift: 'Win' }, ru: { text: 'Win', caps: 'Win', shift: 'Win' },
  },
  {
    type: 'Alt', keycode: 18, key: 'Alt', en: { text: 'Alt', caps: 'Alt', shift: 'Alt' }, ru: { text: 'Alt', caps: 'Alt', shift: 'Alt' },
  },
  {
    type: 'Lang', keycode: 0, key: 'Lang', en: { text: 'en/ru', caps: 'EN/RU', shift: 'EN/RU' }, ru: { text: 'en/ru', caps: 'EN/RU', shift: 'EN/RU' },
  },
  {
    type: 'Space', keycode: 32, key: '', en: { text: 'Space', caps: 'Space', shift: 'Space' }, ru: { text: 'Space', caps: 'Space', shift: 'Space' },
  },
  {
    type: 'Alt', keycode: 18, key: 'Alt', en: { text: 'Alt', caps: 'Alt', shift: 'Alt' }, ru: { text: 'Alt', caps: 'Alt', shift: 'Alt' },
  },
  {
    type: 'Arrow', keycode: 37, key: 'ArrowLeft', en: { text: '◀', caps: '◀', shift: '◀' }, ru: { text: '◀', caps: '◀', shift: '◀' },
  },
  {
    type: 'Arrow', keycode: 40, key: 'ArrowDown', en: { text: '▼', caps: '▼', shift: '▼' }, ru: { text: '▼', caps: '▼', shift: '▼' },
  },
  {
    type: 'Arrow', keycode: 39, key: 'ArrowRight', en: { text: '▶', caps: '▶', shift: '▶' }, ru: { text: '▶', caps: '▶', shift: '▶' },
  },
  {
    type: 'Ctrl', keycode: 17, key: 'Control', en: { text: 'Ctrl', caps: 'Ctrl', shift: 'Ctrl' }, ru: { text: 'Ctrl', caps: 'Ctr', shift: 'Ctr' },
  },

];

export { keys, keyCode };
