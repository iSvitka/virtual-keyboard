const choosenLanguage = (language = 'en') => {
  if (language === 'en') {
    const keys = document.querySelectorAll('.keyboard-key');
    keys.forEach((key) => {
      const ruKey = key.querySelector('.ru');
      ruKey.classList.add('hidden');
      const enKey = key.querySelector('.en');
      enKey.classList.remove('hidden');
      const enKeyCaseUp = enKey.querySelector('.caseUp');
      enKeyCaseUp.classList.add('hidden');
      const enKeyCaps = enKey.querySelector('.caps');
      enKeyCaps.classList.add('hidden');
      const enKeyShiftCaps = enKey.querySelector('.shiftCaps');
      enKeyShiftCaps.classList.add('hidden');
    });
  } else if (language === 'ru') {
    const keys = document.querySelectorAll('.keyboard-key');
    keys.forEach((key) => {
      const enKey = key.querySelector('.en');
      enKey.classList.add('hidden');
      const ruKey = key.querySelector('.ru');
      ruKey.classList.remove('hidden');
      const ruKeyCaseUp = ruKey.querySelector('.caseUp');
      ruKeyCaseUp.classList.add('hidden');
      const ruKeyCaps = ruKey.querySelector('.caps');
      ruKeyCaps.classList.add('hidden');
      const ruKeyShiftCaps = ruKey.querySelector('.shiftCaps');
      ruKeyShiftCaps.classList.add('hidden');
    });
  }

  return language;
};

export default choosenLanguage;
