const buttNum = document.querySelectorAll('.butt')
const input = document.querySelector('input')
const enterNumbers = document.querySelectorAll('.num')
const clear = document.querySelector('.clear')
const point = document.querySelector('.point')
let pointActive = false;
let currNumber = [0]



buttNum.forEach( but => {
  but.addEventListener('click', () => {
    if (but.classList.contains('point')) {
      pointActive = true;
    }
    if (!pointActive) {

      if (but.classList.contains('num')) {
        currNumber = []
        currNumber.push(but.textContent)
        input.value = currNumber

      } else if(but.classList.contains('clear')) {
        input.value = 0;
      }

    } else {

    }

    
    console.log(currNumber);
  })
});
