const buttNum = document.querySelectorAll('.butt');
let input = document.querySelector('input');
let pi = 'π';
let piVal = 3.141592;

buttNum.forEach(but => {
  but.addEventListener('click', () => {
    if (but.classList.contains('calculate')) {
      try {

        if (input.value.includes(pi)) {
          let newValue = '';
          for (let el of input.value) {
            if (el === pi) {
              newValue += piVal;
            } else {
              newValue += el;
            }
          }
          input.value = newValue;
        }

        let result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = 'Error';
        console.log(error);
      }
    } else if (but.classList.contains('clear')) {
      input.value = '';
    } else if (but.classList.contains('num')) {
      if (input.value === 'Error') {
        input.value = '';
      }
      input.value += but.textContent;
    } else if (but.classList.contains('pi')) {
      if (input.value === 'Error') {
        input.value = '';
      }
      input.value += pi;
    } else if (but.classList.contains('del')){
      input.value = input.value.slice(0, -1);
    }
  });
});
