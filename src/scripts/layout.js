export const addBasicLayout = () => {
  const keyboardKeys = [
    // ROW 1

    {
      code: 'Backquote',
      ru: {
        caseDown: 'ё',
        caseUp: 'Ё',
        caps: 'Ё',
        shiftCaps: 'ё',
      },
      en: {
        caseDown: '`',
        caseUp: '~',
        caps: '`',
        shiftCaps: '~',
      },
    },
    {
      code: 'Digit1',
      ru: {
        caseDown: '1',
        caseUp: '!',
        caps: '1',
        shiftCaps: '!',
      },
      en: {
        caseDown: '1',
        caseUp: '!',
        caps: '1',
        shiftCaps: '!',
      },
    },
    {
      code: 'Digit2',
      ru: {
        caseDown: '2',
        caseUp: '"',
        caps: '2',
        shiftCaps: '"',
      },
      en: {
        caseDown: '2',
        caseUp: '@',
        caps: '2',
        shiftCaps: '@',
      },
    },
    {
      code: 'Digit3',
      ru: {
        caseDown: '3',
        caseUp: '№',
        caps: '3',
        shiftCaps: '№',
      },
      en: {
        caseDown: '3',
        caseUp: '#',
        caps: '3',
        shiftCaps: '#',
      },
    },
    {
      code: 'Digit4',
      ru: {
        caseDown: '4',
        caseUp: ';',
        caps: '4',
        shiftCaps: ';',
      },
      en: {
        caseDown: '4',
        caseUp: '$',
        caps: '4',
        shiftCaps: '$',
      },
    },
    {
      code: 'Digit5',
      ru: {
        caseDown: '5',
        caseUp: '%',
        caps: '5',
        shiftCaps: '%',
      },
      en: {
        caseDown: '5',
        caseUp: '%',
        caps: '5',
        shiftCaps: '%',
      },
    },
    {
      code: 'Digit6',
      ru: {
        caseDown: '6',
        caseUp: ':',
        caps: '6',
        shiftCaps: ':',
      },
      en: {
        caseDown: '6',
        caseUp: '^',
        caps: '6',
        shiftCaps: '^',
      },
    },
    {
      code: 'Digit7',
      ru: {
        caseDown: '7',
        caseUp: '?',
        caps: '7',
        shiftCaps: '?',
      },
      en: {
        caseDown: '7',
        caseUp: '&',
        caps: '7',
        shiftCaps: '&',
      },
    },
    {
      code: 'Digit8',
      ru: {
        caseDown: '8',
        caseUp: '*',
        caps: '8',
        shiftCaps: '*',
      },
      en: {
        caseDown: '8',
        caseUp: '*',
        caps: '8',
        shiftCaps: '*',
      },
    },
    {
      code: 'Digit9',
      ru: {
        caseDown: '9',
        caseUp: '(',
        caps: '9',
        shiftCaps: '(',
      },
      en: {
        caseDown: '9',
        caseUp: '(',
        caps: '9',
        shiftCaps: '(',
      },
    },
    {
      code: 'Digit0',
      ru: {
        caseDown: '0',
        caseUp: ')',
        caps: '0',
        shiftCaps: ')',
      },
      en: {
        caseDown: '0',
        caseUp: ')',
        caps: '0',
        shiftCaps: ')',
      },
    },
    {
      code: 'Minus',
      ru: {
        caseDown: '-',
        caseUp: '_',
        caps: '-',
        shiftCaps: '_',
      },
      en: {
        caseDown: '-',
        caseUp: '_',
        caps: '-',
        shiftCaps: '_',
      },
    },
    {
      code: 'Equal',
      ru: {
        caseDown: '=',
        caseUp: '+',
        caps: '=',
        shiftCaps: '+',
      },
      en: {
        caseDown: '=',
        caseUp: '+',
        caps: '=',
        shiftCaps: '+',
      },
    },
    {
      code: 'Backspace',
      ru: {
        caseDown: 'Backspace',
        caseUp: 'Backspace',
        caps: 'Backspace',
        shiftCaps: 'Backspace',
      },
      en: {
        caseDown: 'Backspace',
        caseUp: 'Backspace',
        caps: 'Backspace',
        shiftCaps: 'Backspace',
      },
    },

    // ROW 2

    {
      code: 'Tab',
      ru: {
        caseDown: 'Tab',
        caseUp: 'Tab',
        caps: 'Tab',
        shiftCaps: 'Tab',
      },
      en: {
        caseDown: 'Tab',
        caseUp: 'Tab',
        caps: 'Tab',
        shiftCaps: 'Tab',
      },
    },
    {
      code: 'KeyQ',
      ru: {
        caseDown: 'й',
        caseUp: 'Й',
        caps: 'Й',
        shiftCaps: 'й',
      },
      en: {
        caseDown: 'q',
        caseUp: 'Q',
        caps: 'Q',
        shiftCaps: 'q',
      },
    },
    {
      code: 'KeyW',
      ru: {
        caseDown: 'ц',
        caseUp: 'Ц',
        caps: 'Ц',
        shiftCaps: 'ц',
      },
      en: {
        caseDown: 'w',
        caseUp: 'W',
        caps: 'W',
        shiftCaps: 'w',
      },
    },
    {
      code: 'KeyE',
      ru: {
        caseDown: 'у',
        caseUp: 'У',
        caps: 'У',
        shiftCaps: 'у',
      },
      en: {
        caseDown: 'e',
        caseUp: 'E',
        caps: 'E',
        shiftCaps: 'e',
      },
    },
    {
      code: 'KeyR',
      ru: {
        caseDown: 'к',
        caseUp: 'К',
        caps: 'К',
        shiftCaps: 'к',
      },
      en: {
        caseDown: 'r',
        caseUp: 'R',
        caps: 'R',
        shiftCaps: 'r',
      },
    },
    {
      code: 'KeyT',
      ru: {
        caseDown: 'е',
        caseUp: 'Е',
        caps: 'Е',
        shiftCaps: 'е',
      },
      en: {
        caseDown: 't',
        caseUp: 'T',
        caps: 'T',
        shiftCaps: 't',
      },
    },
    {
      code: 'KeyY',
      ru: {
        caseDown: 'н',
        caseUp: 'Н',
        caps: 'Н',
        shiftCaps: 'н',
      },
      en: {
        caseDown: 'y',
        caseUp: 'Y',
        caps: 'Y',
        shiftCaps: 'y',
      },
    },
    {
      code: 'KeyU',
      ru: {
        caseDown: 'г',
        caseUp: 'Г',
        caps: 'Г',
        shiftCaps: 'г',
      },
      en: {
        caseDown: 'u',
        caseUp: 'U',
        caps: 'U',
        shiftCaps: 'u',
      },
    },
    {
      code: 'KeyI',
      ru: {
        caseDown: 'ё',
        caseUp: 'Ё',
        caps: 'Ё',
        shiftCaps: 'ё',
      },
      en: {
        caseDown: 'i',
        caseUp: 'I',
        caps: 'I',
        shiftCaps: 'i',
      },
    },
    {
      code: 'KeyO',
      ru: {
        caseDown: 'щ',
        caseUp: 'Щ',
        caps: 'Щ',
        shiftCaps: 'щ',
      },
      en: {
        caseDown: 'o',
        caseUp: 'O',
        caps: 'O',
        shiftCaps: 'o',
      },
    },
    {
      code: 'KeyP',
      ru: {
        caseDown: 'з',
        caseUp: 'З',
        caps: 'З',
        shiftCaps: 'з',
      },
      en: {
        caseDown: 'p',
        caseUp: 'P',
        caps: 'P',
        shiftCaps: 'p',
      },
    },
    {
      code: 'BracketLeft',
      ru: {
        caseDown: 'х',
        caseUp: 'Х',
        caps: 'Х',
        shiftCaps: 'х',
      },
      en: {
        caseDown: '[',
        caseUp: '{',
        caps: '[',
        shiftCaps: '{',
      },
    },
    {
      code: 'BracketRight',
      ru: {
        caseDown: 'ъ',
        caseUp: 'Ъ',
        caps: 'Ъ',
        shiftCaps: 'ъ',
      },
      en: {
        caseDown: ']',
        caseUp: '}',
        caps: ']',
        shiftCaps: '}',
      },
    },
    {
      code: 'Backslash',
      ru: {
        caseDown: '\\',
        caseUp: '/',
        caps: '\\',
        shiftCaps: '/',
      },
      en: {
        caseDown: '\\',
        caseUp: '|',
        caps: '\\',
        shiftCaps: '|',
      },
    },
    {
      code: 'Delete',
      ru: {
        caseDown: 'Del',
        caseUp: 'Del',
        caps: 'Del',
        shiftCaps: 'Del',
      },
      en: {
        caseDown: 'Del',
        caseUp: 'Del',
        caps: 'Del',
        shiftCaps: 'Del',
      },
    },

    // ROW 3

    {
      code: 'CapsLock',
      ru: {
        caseDown: 'CapsLock',
        caseUp: 'CapsLock',
        caps: 'CapsLock',
        shiftCaps: 'CapsLock',
      },
      en: {
        caseDown: 'CapsLock',
        caseUp: 'CapsLock',
        caps: 'CapsLock',
        shiftCaps: 'CapsLock',
      },
    },
    {
      code: 'KeyA',
      ru: {
        caseDown: 'ф',
        caseUp: 'Ф',
        caps: 'Ф',
        shiftCaps: 'ф',
      },
      en: {
        caseDown: 'a',
        caseUp: 'A',
        caps: 'A',
        shiftCaps: 'a',
      },
    },
    {
      code: 'KeyS',
      ru: {
        caseDown: 'ы',
        caseUp: 'Ы',
        caps: 'Ы',
        shiftCaps: 'ы',
      },
      en: {
        caseDown: 's',
        caseUp: 'S',
        caps: 'S',
        shiftCaps: 's',
      },
    },
    {
      code: 'KeyD',
      ru: {
        caseDown: 'в',
        caseUp: 'В',
        caps: 'В',
        shiftCaps: 'в',
      },
      en: {
        caseDown: 'd',
        caseUp: 'D',
        caps: 'D',
        shiftCaps: 'd',
      },
    },
    {
      code: 'KeyF',
      ru: {
        caseDown: 'а',
        caseUp: 'А',
        caps: 'А',
        shiftCaps: 'а',
      },
      en: {
        caseDown: 'f',
        caseUp: 'F',
        caps: 'F',
        shiftCaps: 'f',
      },
    },
    {
      code: 'KeyG',
      ru: {
        caseDown: 'п',
        caseUp: 'П',
        caps: 'П',
        shiftCaps: 'п',
      },
      en: {
        caseDown: 'g',
        caseUp: 'G',
        caps: 'G',
        shiftCaps: 'g',
      },
    },
    {
      code: 'KeyH',
      ru: {
        caseDown: 'р',
        caseUp: 'Р',
        caps: 'Р',
        shiftCaps: 'р',
      },
      en: {
        caseDown: 'h',
        caseUp: 'H',
        caps: 'H',
        shiftCaps: 'h',
      },
    },
    {
      code: 'KeyJ',
      ru: {
        caseDown: 'о',
        caseUp: 'О',
        caps: 'О',
        shiftCaps: 'о',
      },
      en: {
        caseDown: 'j',
        caseUp: 'J',
        caps: 'J',
        shiftCaps: 'j',
      },
    },
    {
      code: 'KeyK',
      ru: {
        caseDown: 'л',
        caseUp: 'Л',
        caps: 'Л',
        shiftCaps: 'л',
      },
      en: {
        caseDown: 'k',
        caseUp: 'K',
        caps: 'K',
        shiftCaps: 'k',
      },
    },
    {
      code: 'KeyL',
      ru: {
        caseDown: 'д',
        caseUp: 'Д',
        caps: 'Д',
        shiftCaps: 'д',
      },
      en: {
        caseDown: 'l',
        caseUp: 'L',
        caps: 'L',
        shiftCaps: 'l',
      },
    },
    {
      code: 'Semicolon',
      ru: {
        caseDown: 'ж',
        caseUp: 'Ж',
        caps: 'Ж',
        shiftCaps: 'ж',
      },
      en: {
        caseDown: ';',
        caseUp: ':',
        caps: ';',
        shiftCaps: ':',
      },
    },
    {
      code: 'Quote',
      ru: {
        caseDown: 'э',
        caseUp: 'Э',
        caps: 'Э',
        shiftCaps: 'э',
      },
      en: {
        caseDown: "'",
        caseUp: '"',
        caps: "'",
        shiftCaps: '"',
      },
    },
    {
      code: 'Enter',
      ru: {
        caseDown: 'Enter',
        caseUp: 'Enter',
        caps: 'Enter',
        shiftCaps: 'Enter',
      },
      en: {
        caseDown: 'Enter',
        caseUp: 'Enter',
        caps: 'Enter',
        shiftCaps: 'Enter',
      },
    },

    // ROW 4

    {
      code: 'ShiftLeft',
      ru: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift',
      },
      en: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift',
      },
    },
    {
      code: 'KeyZ',
      ru: {
        caseDown: 'я',
        caseUp: 'Я',
        caps: 'Я',
        shiftCaps: 'я',
      },
      en: {
        caseDown: 'z',
        caseUp: 'Z',
        caps: 'Z',
        shiftCaps: 'z',
      },
    },
    {
      code: 'KeyX',
      ru: {
        caseDown: 'ч',
        caseUp: 'Ч',
        caps: 'Ч',
        shiftCaps: 'ч',
      },
      en: {
        caseDown: 'x',
        caseUp: 'X',
        caps: 'X',
        shiftCaps: 'x',
      },
    },
    {
      code: 'KeyC',
      ru: {
        caseDown: 'с',
        caseUp: 'С',
        caps: 'С',
        shiftCaps: 'с',
      },
      en: {
        caseDown: 'c',
        caseUp: 'C',
        caps: 'C',
        shiftCaps: 'c',
      },
    },
    {
      code: 'KeyV',
      ru: {
        caseDown: 'м',
        caseUp: 'М',
        caps: 'М',
        shiftCaps: 'м',
      },
      en: {
        caseDown: 'v',
        caseUp: 'V',
        caps: 'V',
        shiftCaps: 'v',
      },
    },
    {
      code: 'KeyB',
      ru: {
        caseDown: 'и',
        caseUp: 'И',
        caps: 'И',
        shiftCaps: 'и',
      },
      en: {
        caseDown: 'b',
        caseUp: 'B',
        caps: 'B',
        shiftCaps: 'b',
      },
    },
    {
      code: 'KeyN',
      ru: {
        caseDown: 'т',
        caseUp: 'Т',
        caps: 'Т',
        shiftCaps: 'т',
      },
      en: {
        caseDown: 'n',
        caseUp: 'N',
        caps: 'N',
        shiftCaps: 'n',
      },
    },
    {
      code: 'KeyM',
      ru: {
        caseDown: 'ь',
        caseUp: 'Ь',
        caps: 'Ь',
        shiftCaps: 'ь',
      },
      en: {
        caseDown: 'm',
        caseUp: 'M',
        caps: 'M',
        shiftCaps: 'm',
      },
    },
    {
      code: 'Comma',
      ru: {
        caseDown: 'б',
        caseUp: 'Б',
        caps: 'Б',
        shiftCaps: 'б',
      },
      en: {
        caseDown: ',',
        caseUp: '<',
        caps: ',',
        shiftCaps: '<',
      },
    },
    {
      code: 'Period',
      ru: {
        caseDown: 'ю',
        caseUp: 'Ю',
        caps: 'Ю',
        shiftCaps: 'ю',
      },
      en: {
        caseDown: '.',
        caseUp: '>',
        caps: '.',
        shiftCaps: '>',
      },
    },
    {
      code: 'Slash',
      ru: {
        caseDown: '.',
        caseUp: ',',
        caps: '.',
        shiftCaps: ',',
      },
      en: {
        caseDown: '/',
        caseUp: '?',
        caps: '/',
        shiftCaps: '?',
      },
    },
    {
      code: 'ArrowUp',
      ru: {
        caseDown: '\u1403',
        caseUp: '\u1403',
        caps: '\u1403',
        shiftCaps: '\u1403',
      },
      en: {
        caseDown: '\u1403',
        caseUp: '\u1403',
        caps: '\u1403',
        shiftCaps: '\u1403',
      },
    },
    {
      code: 'ShiftRight',
      ru: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift',
      },
      en: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift',
      },
    },

    // ROW 5

    {
      code: 'ControlLeft',
      ru: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
      en: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
    },
    {
      code: 'MetaLeft',
      ru: {
        caseDown: '\u269D',
        caseUp: '\u269D',
        caps: '\u269D',
        shiftCaps: '\u269D',
      },
      en: {
        caseDown: '\u269D',
        caseUp: '\u269D',
        caps: '\u269D',
        shiftCaps: '\u269D',
      },
    },
    {
      code: 'AltLeft',
      ru: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt',
      },
      en: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt',
      },
    },
    {
      code: 'Space',
      ru: {
        caseDown: ' ',
        caseUp: ' ',
        caps: ' ',
        shiftCaps: ' ',
      },
      en: {
        caseDown: ' ',
        caseUp: ' ',
        caps: ' ',
        shiftCaps: ' ',
      },
    },
    {
      code: 'AltRight',
      ru: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt',
      },
      en: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt',
      },
    },
    {
      code: 'ArrowLeft',
      ru: {
        caseDown: '\u140A',
        caseUp: '\u140A',
        caps: '\u140A',
        shiftCaps: '\u140A',
      },
      en: {
        caseDown: '\u140A',
        caseUp: '\u140A',
        caps: '\u140A',
        shiftCaps: '\u140A',
      },
    },
    {
      code: 'ArrowDown',
      ru: {
        caseDown: '\u1401',
        caseUp: '\u1401',
        caps: '\u1401',
        shiftCaps: '\u1401',
      },
      en: {
        caseDown: '\u1401',
        caseUp: '\u1401',
        caps: '\u1401',
        shiftCaps: '\u1401',
      },
    },
    {
      code: 'ArrowRight',
      ru: {
        caseDown: '\u1405',
        caseUp: '\u1405',
        caps: '\u1405',
        shiftCaps: '\u1405',
      },
      en: {
        caseDown: '\u1405',
        caseUp: '\u1405',
        caps: '\u1405',
        shiftCaps: '\u1405',
      },
    },
    {
      code: 'ControlRight',
      ru: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
      en: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
    },
  ];
  const keys = JSON.parse(JSON.stringify(keyboardKeys));

  const textarea = document.createElement('textarea');
  const mainDiv = document.createElement('div');
  const keyboardDiv = document.createElement('div');
  const title = document.createElement('p');
  const osInfo = document.createElement('p');
  const langSwitchInfo = document.createElement('p');

  mainDiv.classList.add('main-div');

  title.classList.add('title');
  title.innerHTML = 'RSS Virtual Keyboard';

  textarea.classList.add('textarea');

  keyboardDiv.classList.add('keyboard');
  keyboardDiv.setAttribute('id', 'keyboard');
  for (let i = 1; i <= 5; i += 1) {
    const rowNum = i;
    let amountOfChars;
    const keyboardRowDiv = document.createElement('div');
    keyboardRowDiv.classList.add('keyboard-row');
    switch (rowNum) {
      case 1:
        amountOfChars = 14;
        break;
      case 2:
        amountOfChars = 15;
        break;
      case 3:
        amountOfChars = 13;
        break;
      case 4:
        amountOfChars = 13;
        break;
      case 5:
        amountOfChars = 9;
        break;
      default:
        amountOfChars = 14;
        break;
    }

    for (let j = 1; j <= amountOfChars; j += 1) {
      const keyboardKeyDiv = document.createElement('div');
      keyboardKeyDiv.classList.add('keyboard-key');

      let x = 1;
      while (x <= 2) {
        const keyCaseDown = document.createElement('span');
        keyCaseDown.classList.add('caseDown');
        const keyCaseUp = document.createElement('span');
        keyCaseUp.classList.add('caseUp');
        const keyCaps = document.createElement('span');
        keyCaps.classList.add('caps');
        const keyShiftCaps = document.createElement('span');
        keyShiftCaps.classList.add('shiftCaps');

        if (x === 1) {
          const keyboardLangKey = document.createElement('div');
          keyboardLangKey.classList.add('en');
          keyboardLangKey.append(keyCaseDown, keyCaseUp, keyCaps, keyShiftCaps);
          keyboardKeyDiv.append(keyboardLangKey);
        }
        if (x === 2) {
          const keyboardLangKey = document.createElement('div');
          keyboardLangKey.classList.add('ru');
          keyboardLangKey.append(keyCaseDown, keyCaseUp, keyCaps, keyShiftCaps);
          keyboardKeyDiv.append(keyboardLangKey);
        }
        x += 1;
      }
      keyboardRowDiv.append(keyboardKeyDiv);
    }

    keyboardDiv.append(keyboardRowDiv);
  }

  osInfo.classList.add('os-info');
  osInfo.innerHTML = 'Keyboard was developed in Windows OS';

  langSwitchInfo.classList.add('lang-switch-info');
  langSwitchInfo.innerHTML = 'Ctrl + Alt for switching language';

  mainDiv.append(title, textarea, keyboardDiv, osInfo, langSwitchInfo);
  const { body } = document;

  body.append(mainDiv);

  const allKeys = document.querySelectorAll('.keyboard-key');
  allKeys.forEach((key, index) => {
    const ruKeys = key.querySelector('.ru');
    let caseDown = ruKeys.querySelector('.caseDown');
    let caseUp = ruKeys.querySelector('.caseUp');
    let caps = ruKeys.querySelector('.caps');
    let shiftCaps = ruKeys.querySelector('.shiftCaps');

    caseDown.innerHTML = keys[index].ru.caseDown;
    caseUp.innerHTML = keys[index].ru.caseUp;
    caps.innerHTML = keys[index].ru.caps;
    shiftCaps.innerHTML = keys[index].ru.shiftCaps;

    const enKeys = key.querySelector('.en');
    caseDown = enKeys.querySelector('.caseDown');
    caseUp = enKeys.querySelector('.caseUp');
    caps = enKeys.querySelector('.caps');
    shiftCaps = enKeys.querySelector('.shiftCaps');

    caseDown.innerHTML = keys[index].en.caseDown;
    caseUp.innerHTML = keys[index].en.caseUp;
    caps.innerHTML = keys[index].en.caps;
    shiftCaps.innerHTML = keys[index].en.shiftCaps;

    key.classList.add(keys[index].code);
  });
};

export default addBasicLayout();
