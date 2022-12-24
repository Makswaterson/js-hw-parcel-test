// const contentRef = document.querySelector('.content');
// const containerRef = document.querySelector('.container');
// console.log(containerRef);
// console.log(contentRef);
// const KEY_X = 'keyX';
// const KEY_O = 'keyO';
// const CURRENT_PLAYER = 'player';
// let player = localStorage.getItem(CURRENT_PLAYER) || 'X';
// let stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
// let stepO = JSON.parse(localStorage.getItem(KEY_O)) ?? [];
// const win = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
// let markup = '';

// for (let i = 1; i <= 9; i += 1) {
//   markup += `<div class="item" data-id="${i}"></div>`;
// }

// contentRef.insertAdjacentHTML('beforeend', markup);
// contentRef.addEventListener('click', onClick);

// function onClick(evt) {
//   // '' => !false => true
//   if (!evt.target.textContent) {
//     const id = Number(evt.target.dataset.id);
//     evt.target.textContent = player;
//     if (player === 'X') {
//       stepX.push(id);
//       localStorage.setItem(KEY_X, JSON.stringify(stepX));
//       const isWinner = checkWinner(stepX);
//       if (isWinner) {
//         console.log(`${player} is Winner 😎`);
//         setTimeout(() => {
//           reset();
//         }, 500);
//         return;
//       }
//     } else {
//       stepO.push(id);
//       localStorage.setItem(KEY_O, JSON.stringify(stepO));
//       const isWinner = checkWinner(stepO);
//       evt.target.textContent = player;
//       if (isWinner) {
//         console.log(`${player} is Winner 😎`);
//         setTimeout(() => {
//           reset();
//         }, 500);
//         return;
//       }
//     }

//     player = player === 'X' ? 'O' : 'X';
//     localStorage.setItem(CURRENT_PLAYER, player);
//   }
// }

// function checkWinner(arr) {
//   const result = win.some(values => values.every(value => arr.includes(value)));
//   return result;
// }

// function reset() {
//   content.innerHTML = markup;
//   localStorage.clear();
//   player = 'X';
//   stepX = [];
//   stepO = [];
// }

// (function () {
//   try {
//     [...content.children].forEach(item => {
//       const id = Number(item.dataset.id);
//       if (stepX.includes(id)) {
//         item.textContent = 'X';
//       } else if (stepO.includes(id)) {
//         item.textContent = 'O';
//       }
//     });
//   } catch (e) {
//     console.log('localStorage empty');
//   }
// })();

/**
 * ЗАВДАННЯ 1
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hello world');
//     }, 2000);
//   });
//   return promise;
// }
// greet().then(responce => console.log(responce));

// Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду, починаючи з
//from і закінчуючи to.
// Зробіть два варіанти вирішення.

// function printNumbers(from, to) {
//   for (let i = from; i <= to; i++) {
//     makePromise(i).then(response => console.log(response));
//   }
// }
// printNumbers(10, 20);

// function makePromise(sec) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(sec);
//     }, sec * 1000);
//   });
//   return promise;
// }

/**
 * ЗАВДАННЯ 2
 * - Використовуй prompt та повертай значення звідти.
 * - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс та логіруй "error".
 * Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
 */

// const userData = function (peyLoad) {
//    if(isNaN(peyLoad)){
//      return Promise.reject('error')
//    }
//   const result = peyLoad%2 === 0
//   const promise = new Promise((resolve,reject) => {
//     setTimeout(()=> {
// resolve(result ? 'even' : 'odd')
//     },result ? 1000 : 2000)

//   })
//   return promise
// }
// const number = +prompt('What number you want?')
// userData(number)
// .then((responce)=>{
//   console.log(responce);
// })
// .catch((error)=>{
//   console.log(error)
// })

/**
 * ЗАВДАННЯ 5
 * Перероби код так, щоб усі дані збиралися
 * Одночасно і приходили у вигляді масиву
 */

// const getData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 1;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getNewData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 2;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getAnotherData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 3;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getLastData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 4;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

//     Promise.all([getData(), getNewData(),getAnotherData(),getLastData()])
//     .then((responce)=>{
//   console.log(responce);
// })
// .catch((error)=>{
//   console.log(error)
// })

/**
 * ЗАВДАННЯ 7
 * Функція countWithDelay приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів повинна відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

// const countWithDelay = (delay = 0, steps = 0, stepInterval = 0) => {
//   for (let index = 0; index < steps; index++) {
//     logCount(index, delay).then(responce => console.log(responce));
//     delay += stepInterval;
//   }
// };

// countWithDelay(3000, 6, 1000);

// function logCount(index, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(index);
//     }, delay);
//   });
// }

// const countWithDelay = (delay = 0, steps = 0, stepInterval = 0) => {
//   for (let index = 0; index < steps; index++) {
//     logCount(index, delay).then(responce => {
//       console.log(responce);
//     });
//     delay += stepInterval;
//   }
// };

// countWithDelay(3000, 6, 1000);

// function logCount(index, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(index);
//     }, delay);
//   });
// }

// Напишіть JavaScript, щоб отримати кількість днів на місяць.
// Приклад введення:
// console.log(getDaysInMonth(9, 2021));
// приклад:
// 30
// var getDaysInMonth = function (month, year) {
//   return new Date(year,month,0).getDate()
// }
// console.log(getDaysInMonth(9, 2021));

// const amount = [
//   'січень',
//   'лютий',
//   'березень',
//   'квітень',
//   'травень',
//   '',
//   '',
//   '',
//   '',
//   'жовтень',
// ];

// function month_name(params) {
//   const index = new Date(params).getMonth();
//   return amount[index];
// }
// console.log(month_name('10/11/2021'));
