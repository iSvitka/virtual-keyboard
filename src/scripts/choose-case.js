export function chooseCase(currentCase = 'caseDown', choosenCase, currentLang) {
  const keys = document.querySelectorAll('.keyboard-key');
  keys.forEach((key) => {
    const caseDown = key.querySelector(`.${currentLang}`).querySelector('.caseDown');
    const caseUp = key.querySelector(`.${currentLang}`).querySelector('.caseUp');
    const caps = key.querySelector(`.${currentLang}`).querySelector('.caps');
    const shiftCaps = key.querySelector(`.${currentLang}`).querySelector('.shiftCaps');

    if (choosenCase === 'caseUp') {
      if (currentCase === 'caps') {
        choosenCase === 'shiftCaps';
      } else {
        caseDown.classList.add('hidden');
        shiftCaps.classList.add('hidden');
        caseUp.classList.remove('hidden');
      }
    }
    if (choosenCase === 'caps') {
      if (currentCase === 'caseUp') {
        choosenCase === 'shiftCaps';
      } else {
        caseDown.classList.add('hidden');
        shiftCaps.classList.add('hidden');
        caps.classList.remove('hidden');
      }
    }
    if (choosenCase === 'shiftCaps') {
      caseDown.classList.add('hidden');
      caseUp.classList.add('hidden');
      caps.classList.add('hidden');
      shiftCaps.classList.remove('hidden');
    }
    if (choosenCase === 'caseDown') {
      if (currentCase === 'shiftCaps') {
        shiftCaps.classList.add('hidden');
        caseUp.classList.remove('hidden');
      } else {
        caseDown.classList.remove('hidden');
        caseUp.classList.add('hidden');
        caps.classList.add('hidden');
        shiftCaps.classList.add('hidden');
      }
    }
  });
  return choosenCase;
}
