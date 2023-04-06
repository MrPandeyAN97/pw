const arr = [1, 2, 3, 4, 5];

function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}

console.log(extractElements(arr));