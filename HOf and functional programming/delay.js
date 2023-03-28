// function generateRandomNumberWithDelay(delay, progress) {
//     return new Promise((resolve, reject) => {
//       const interval = setInterval(() => {
//         const randomNumber = Math.floor(Math.random() * 101);
//         progress(randomNumber);
//       }, delay);
  
//       setTimeout(() => {
//         clearInterval(interval);
//         resolve();
//       }, delay * 10);
//     });
//   }
  
//   // Example usage
//   generateRandomNumberWithDelay(1000, (randomNumber) => {
//     console.log(`Random number generated: ${randomNumber}`);
//   }).then(() => {
//     console.log('All done!');
//   });

function generateRandomNumberWithDelayAndProgress(min, max, delay) {
    return new Promise((resolve, reject) => {
      let progress = 0;
      const totalProgress = max - min;
      const interval = setInterval(() => {
        progress++;
        console.log(`Progress: ${progress}/${totalProgress}`);
        if (progress === totalProgress) clearInterval(interval);
      }, 10);
      setTimeout(() => {
        clearInterval(interval);
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(randomNumber);
      }, delay);
    });
  }
  
  // example usage
  generateRandomNumberWithDelayAndProgress(1, 10, 5000).then((result) => {
    console.log(`Random number generated: ${result}`);
  });