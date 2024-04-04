const firstResource = new Promise((resolve) =>
  setTimeout(() => resolve("First resource loaded"), 500)
);
const secondResource = new Promise((resolve) =>
  setTimeout(() => resolve("Second resource loaded"), 400)
);

Promise.race([firstResource, secondResource])
  .then((result) => {
    console.log('Fastest result is: ' + result);
  })
  .catch(() => {
    console.log('One or more operations failed');
  })
