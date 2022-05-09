import { addBasicLayout } from './scripts/layout';
import { choosenLanguage } from './scripts/choosen-language';
import { chooseCase } from './scripts/choose-case';

addBasicLayout();

const textarea = document.querySelector('.textarea');
const keys = document.querySelectorAll('.keyboard-key');
let lang;
let currentCase = 'caseDown';
let textIndex = 0;
let currentKey;
let isCapsDown = false;
let isShiftDown = false;
let isCtrlDown = false;
let isAltDown = false;

if (JSON.parse(localStorage.getItem('userLanguage')) === null) {
  lang = choosenLanguage();
} else {
  lang = JSON.parse(localStorage.getItem('userLanguage'));
  lang = choosenLanguage(lang);
}

const insertChar = function (newChar) {
  textarea.value = (textarea.value.slice(0, textIndex) + newChar + textarea.value.slice(textIndex));
  textIndex += 1;
  textarea.selectionStart = textIndex;
  textarea.selectionEnd = textIndex;
};

const deleteChar = function (choise) {
  const textareaValue = textarea.value;
  if (choise === true) {
    if (textIndex > 0) {
      textarea.value = textareaValue.slice(0, textIndex - 1) + textareaValue.slice(textIndex);
      textIndex -= 1;
      textarea.selectionStart = textIndex;
      textarea.selectionEnd = textIndex;
    }
  }
  if (choise === false) {
    textarea.value = textareaValue.slice(0, textIndex) + textareaValue.slice(textIndex + 1);
    textarea.selectionStart = textIndex;
    textarea.selectionEnd = textIndex;
  }
};

const keyDown = function (event) {
  const arrKeys = Array.from(keys);
  const isKey = arrKeys.some((key) => key.classList[1] === event.code);
  if (isKey) {
    const pressedKey = document.querySelector(`.${event.code}`).querySelector(`.${lang}`).querySelector(`.${currentCase}`).innerHTML;

    if (pressedKey.length <= 1 && pressedKey !== '\u269D') {
      insertChar(pressedKey);
    }
    if (pressedKey === 'Tab') {
      insertChar('    ');
    }
    if (pressedKey === 'Backspace') {
      deleteChar(true);
    }
    if (pressedKey === 'Del') {
      deleteChar(false);
    }
    if (pressedKey === 'Enter') {
      insertChar('\n');
    }
    if (pressedKey === '&amp;') {
      insertChar('\u0026');
    }
    if (pressedKey === '&lt;') {
      insertChar('\u003C');
    }
    if (pressedKey === '&gt;') {
      insertChar('\u003E');
    }

    keys.forEach((key) => {
      if (key.classList[1] === event.code && event.code === 'CapsLock') {
        if (isCapsDown) {
          return;
        }
        isCapsDown = true;
        if (key.classList[2] === 'active') {
          key.classList.remove('active');
          if (currentCase === 'caps') {
            currentCase = chooseCase(currentCase, 'caseDown', lang);
          } else if (currentCase === 'shiftCaps') {
            currentCase = chooseCase(currentCase, 'caseUp', lang);
          }
        } else {
          key.classList.add('active');
          if (currentCase === 'caseDown') {
            currentCase = chooseCase(currentCase, 'caps', lang);
          } else if (currentCase === 'caseUp') {
            currentCase = chooseCase(currentCase, 'shiftCaps', lang);
          }
        }
      }
      if ((key.classList[1] === event.code && event.code === 'ShiftLeft') || (key.classList[1] === event.code && event.code === 'ShiftRight')) {
        if (isShiftDown) {
          return;
        }
        isShiftDown = true;
        if (currentCase === 'caseDown') {
          currentCase = chooseCase(currentCase, 'caseUp', lang);
        } else if (currentCase === 'caps') {
          currentCase = chooseCase(currentCase, 'shiftCaps', lang);
        }
      }
      if (key.classList[1] === event.code && event.code !== 'CapsLock') {
        key.classList.add('active');
      }
      if (key.classList[1] === event.code && event.code === 'AltLeft') {
        if (isAltDown) {
          return;
        }
        isAltDown = true;
        if (document.querySelector('.ControlLeft').classList[2] === 'active') {
          if (lang === 'en') {
            lang = choosenLanguage('ru');
            currentCase = chooseCase(currentCase, currentCase, lang);
            localStorage.setItem('userLanguage', JSON.stringify(lang));
          } else {
            lang = choosenLanguage('en');
            currentCase = chooseCase(currentCase, currentCase, lang);
            localStorage.setItem('userLanguage', JSON.stringify(lang));
          }
        }
      } else if (key.classList[1] === event.code && event.code === 'ControlLeft') {
        if (isCtrlDown) {
          return;
        }
        isCtrlDown = true;
        if (document.querySelector('.AltLeft').classList[2] === 'active') {
          if (lang === 'en') {
            lang = choosenLanguage('ru');
            currentCase = chooseCase(currentCase, currentCase, lang);
            localStorage.setItem('userLanguage', JSON.stringify(lang));
          } else {
            lang = choosenLanguage('en');
            currentCase = chooseCase(currentCase, currentCase, lang);
            localStorage.setItem('userLanguage', JSON.stringify(lang));
          }
        }
      }
    });
  }
};
const keyUp = function (event) {
  keys.forEach((key) => {
    if (key.classList[1] === event.code && event.code !== 'CapsLock') {
      key.classList.remove('active');
    }
  });
  if (event.code === 'CapsLock') {
    isCapsDown = false;
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftDown = false;
    if (currentCase === 'caseUp') {
      currentCase = chooseCase(currentCase, 'caseDown', lang);
    } else if (currentCase === 'shiftCaps') {
      currentCase = chooseCase(currentCase, 'caps', lang);
    }
  }
  if (event.code === 'AltLeft') {
    isAltDown = false;
  }
  if (event.code === 'ControlLeft') {
    isCtrlDown = false;
  }
};

textarea.addEventListener('click', (event) => {
  textIndex = event.currentTarget.selectionStart;
});

keys.forEach((key) => {
  key.addEventListener('mousedown', (event) => {
    currentKey = event.currentTarget;
    if (key.classList[1] === 'CapsLock') {
      if (key.classList[2] !== 'active') {
        key.classList.add('active');
        if (currentCase === 'caseDown') {
          currentCase = chooseCase(currentCase, 'caps', lang);
        } else if (currentCase === 'caseUp') {
          currentCase = chooseCase(currentCase, 'shiftCaps', lang);
        }
      } else {
        key.classList.remove('active');
        if (currentCase === 'caps') {
          currentCase = chooseCase(currentCase, 'caseDown', lang);
        } else if (currentCase === 'shiftCaps') {
          currentCase = chooseCase(currentCase, 'caseUp', lang);
        }
      }
    } else if (key.classList[1] === 'ShiftLeft' || key.classList[1] === 'ShiftRight') {
      key.classList.add('active');
      if (currentCase === 'caseDown') {
        currentCase = chooseCase(currentCase, 'caseUp', lang);
      } else if (currentCase === 'caps') {
        currentCase = chooseCase(currentCase, 'shiftCaps', lang);
      }
    } else {
      key.classList.add('active');
    }
    if (key.classList[1] === 'AltLeft') {
      if (document.querySelector('.ControlLeft').classList[2] === 'active') {
        if (lang === 'en') {
          lang = choosenLanguage('ru');
          currentCase = chooseCase(currentCase, currentCase, lang);
          localStorage.setItem('userLanguage', JSON.stringify(lang));
        } else {
          lang = choosenLanguage('en');
          currentCase = chooseCase(currentCase, currentCase, lang);
          localStorage.setItem('userLanguage', JSON.stringify(lang));
        }
      }
    } else if (key.classList[1] === 'ControlLeft') {
      if (document.querySelector('.AltLeft').classList[2] === 'active') {
        if (lang === 'en') {
          lang = choosenLanguage('ru');
          currentCase = chooseCase(currentCase, currentCase, lang);
          localStorage.setItem('userLanguage', JSON.stringify(lang));
        } else {
          lang = choosenLanguage('en');
          currentCase = chooseCase(currentCase, currentCase, lang);
          localStorage.setItem('userLanguage', JSON.stringify(lang));
        }
      }
    }

    const keyValue = event.currentTarget.querySelector(`.${lang}`).querySelector(`.${currentCase}`).innerHTML;
    if (keyValue.length <= 1 && keyValue !== '\u269D') {
      insertChar(keyValue);
    }
    if (keyValue === 'Backspace') {
      deleteChar(true);
    }
    if (keyValue === 'Del') {
      deleteChar(false);
    }
    if (keyValue === 'Tab') {
      insertChar('    ');
    }
    if (keyValue === 'Enter') {
      insertChar('\n');
    }
    if (keyValue === '&amp;') {
      insertChar('\u0026');
    }
    if (keyValue === '&lt;') {
      insertChar('\u003C');
    }
    if (keyValue === '&gt;') {
      insertChar('\u003E');
    }
  });
});

document.addEventListener('mouseup', () => {
  if (currentKey) {
    if (currentKey.classList[1] !== 'CapsLock') {
      currentKey.classList.remove('active');
    }
    if (currentKey.classList[1] === 'ShiftLeft' || currentKey.classList[1] === 'ShiftRight') {
      if (currentCase === 'caseUp') {
        currentCase = chooseCase(currentCase, 'caseDown', lang);
      }
    }
  }
  if (currentCase === 'shiftCaps') {
    currentCase = chooseCase(currentCase, 'shiftCaps', lang);
  }
});

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

document.onkeydown = function (event) {
  event.preventDefault();
};
