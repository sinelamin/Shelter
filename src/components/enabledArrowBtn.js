'use strict';

export const enabledArrowBtn = (btn, target) => {
  btn.style.pointerEvents = 'auto';

  if (target === 'paginator') {
    btn.classList.remove('paginator-btn__disable');
  };
};