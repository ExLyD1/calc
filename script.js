const buttNum = document.querySelectorAll('.butt')
let input = document.querySelector('input');


buttNum.forEach(but => {
  but.addEventListener('click', () => {
    
    if (but.classList.contains('calculate')) {
      
      try {
        let result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = 'ошибка';
      }
    } else if (but.classList.contains('clear')) {
      input.value = '';
    } else if (but.classList.contains('num')) {
      input.value += but.textContent;
    }

  });
});
