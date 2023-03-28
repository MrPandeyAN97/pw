const exchangeRate = 80; 
console.log("1usd = 80inr")
const items = {
  apple:+1.99,
  banana: +0.99,
  orange: +2.49,
  pear: +1.79,
};


const convertedPrices = Object.keys(items).map((item) => {
  return { [item]: items[item] * exchangeRate+' $' };
});

console.log(convertedPrices);