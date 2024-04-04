function makeAMess() {
  return new Promise((resolve, reject) => {
    console.log('Opening a bunch of files...');
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('OK I found what I needed!');
      } else {
        reject("I didn't find what I needed")
      }
    }, 1500);
  })
}

makeAMess().then(console.log)
  .catch(console.log)
  .finally(() => console.log("OK I'm cleaning up now"));
