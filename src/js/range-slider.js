function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

const rangeSliders = document.querySelectorAll('.js-widget-slider');

rangeSliders.forEach(function(item, i, arr) {
  const range = item.querySelector('.js-widget-slider-range');
  const input = item.querySelector('.js-widget-slider-input');
  const buttonMin = item.querySelector('.js-widget-button-min');
  const buttonMax = item.querySelector('.js-widget-button-max');

  range.addEventListener('input', handleInputChange);

  if(input != null) {
    range.addEventListener('input', handleInputChange);
    range.addEventListener('input', inputUpdate);

    function inputUpdate() {
      input.value = range.value + '%';
    }

    input.addEventListener('input', handleInputChange);
  }

  if(buttonMin != null) {
    buttonMin.addEventListener('click', setRangeMin);

    function setRangeMin() {
      range.value = range.getAttribute('min');

      const min = range.min;
      const max = range.max;
      const val = range.value;

      range.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';

      if(input != null) {

          input.value = range.value + '%';

      }
    }
  }

  if(buttonMax != null) {
    buttonMax.addEventListener('click', setRangeMax);

    function setRangeMax() {
      range.value = range.getAttribute('max');

      const min = range.min;
      const max = range.max;
      const val = range.value;

      range.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';

      if(input != null) {

          input.value = range.value + '%';

      }
    }


  }

  if(item.classList.contains('widget__container--slider_vertical')) {
    let itemHeight = item.clientHeight;

    range.style.maxWidth = itemHeight - 160 + 'px';
  }
});
