async function asyncLoadData() {
  try {
    const message = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    });
    console.log(message);
  } catch (error) {
    console.error(error);
    return Promise.resolve('Using cached data');
  }
}

asyncLoadData()
.then((msg) => { if (msg) console.log(msg) });