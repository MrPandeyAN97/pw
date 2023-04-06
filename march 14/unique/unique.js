const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];
  // const categories = ['all', ...new Set(menu.map((item) => item.category))];
  // map - get all instances
  // new Set - narrow down
  // ['all',...] - turn it back to array
  
  const categories = ['the unique items are :', ...new Set(menu.map((item) => item.category))];
  const result = document.querySelector('.result');
  const btn=document.querySelector('.butt');

function myFunction() {
    result.innerHTML = categories
    .map((category) => {
      return `<button>${category}</button>`;
    })
    .join('');
}