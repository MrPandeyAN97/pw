const numbers=[5,2,7,1,9];
const min=Math.min(...numbers);
const max=Math.max(...numbers);

let result=Object.assign({max,min});
console.log(result);