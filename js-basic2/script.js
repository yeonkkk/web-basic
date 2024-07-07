// console.log(document.querySelector('h2'));
// console.log(document.querySelector('p'));
// console.log(document.querySelector('#text'));
// console.log(document.querySelector('.paragraph'));

// console.log(document.getElementById('text'));
// console.log(document.getElementById('p')); // null

const h2 = document.querySelector('h2');
const p = document.getElementById('text');

console.log(h2.textContent);
h2.textContent = "헬로우 여러분!";
console.log(h2.textContent);