const buttNum = document.querySelectorAll('.butt')
// let input = document.getElementById('input').value += value
const enterNumbers = document.querySelectorAll('.num')
const clear = document.querySelector('.clear')
const point = document.querySelector('.point')
const calculate = document.querySelector('.calculate')
let pointActive = false;

// let item = 0;


// buttNum.forEach( but => {
//   but.addEventListener('click', () => {
//     item = but.textContent
//     let numberList = [0]

//     if (but.classList.contains('point')) {
//       pointActive = true;
//     }

//     if (but.classList.contains('num')) {
//       if (!pointActive) {
//         input.value = item

//       } else {
//         numberList.push(item)
//         numberList = numberList.toString()
//         input.value = numberList
//       }
      

//     } else if(but.classList.contains('clear')) {
//       numberList = []
//       input.value = 0;
//       pointActive = false;
//     }

    

    
//     console.log(numberList);
//     console.log(item);
//     console.log(pointActive);
//   })
// });


buttNum.forEach(but => {
  but.addEventListener('click', () => {
    
    if (but.classList.contains('calculate')) {
      let input = document.querySelector('input');
      try {
        let result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = 'ошибка';
      }
    } else if (but.classList.contains('clear')) {
      document.querySelector('input').value = '';
    } else if (but.classList.contains('num')) {
      document.querySelector('input').value += but.textContent;
    }

  });
});


// function addToDisplay(value) {
//             document.getElementById('display').value += value;
//         }

//         function calculate() {
//             var display = document.getElementById('display').value;
//             try {
//                 var result = eval(display);
//                 document.getElementById('display').value = result;
//             } catch (error) {
//                 document.getElementById('display').value = 'Ошибка';
//             }
//         }

//         function clearDisplay() {
//             document.getElementById('display').value = '';
//         }