const chooseCase = (choosenCase, currentLang, currentCase = 'caseDown') => {
  let alt = false;
  const keys = document.querySelectorAll('.keyboard-key');
  keys.forEach((key) => {
    const caseDown = key.querySelector(`.${currentLang}`).querySelector('.caseDown');
    const caseUp = key.querySelector(`.${currentLang}`).querySelector('.caseUp');
    const caps = key.querySelector(`.${currentLang}`).querySelector('.caps');
    const shiftCaps = key.querySelector(`.${currentLang}`).querySelector('.shiftCaps');

    if (choosenCase === 'caseUp') {
      if (currentCase === 'caps') {
        alt = true;
      } else {
        caseDown.classList.add('hidden');
        shiftCaps.classList.add('hidden');
        caseUp.classList.remove('hidden');
      }
    }
    if (choosenCase === 'caps') {
      if (currentCase === 'caseUp') {
        alt = true;
      } else {
        caseDown.classList.add('hidden');
        shiftCaps.classList.add('hidden');
        caps.classList.remove('hidden');
      }
    }
    if (choosenCase === 'shiftCaps' || alt === true) {
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
};

export default chooseCase;
