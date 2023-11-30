'use strict';

export const disableArrowBtn = (btn, target) => {
  btn.style.pointerEvents = 'none';

  if (target === 'paginator') {
    btn.classList.add('paginator-btn__disable');
  };
};
