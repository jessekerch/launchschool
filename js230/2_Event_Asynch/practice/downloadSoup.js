function downloadFilePromise(file) {
  return new Promise((resolve) => {
    console.log(`downloading ${file}...`);
    setTimeout(() => {
      resolve(`${file} downloaded!`);
    }, 1500);
  });
}

let downloadSoup = downloadFilePromise('soup recipes')
downloadSoup.then((result) => console.log(result));

// The .catch() method is your primary tool for handling errors in promises. It is best practice to place a .catch() method at the end of your promise chain to ensure all possible errors are caught.

// doSomethingAsync()
//   .then((result) => doSomethingElseAsync(result))
//   .then((newResult) => doThirdThingAsync(newResult))
//   .catch((error) => console.error("An error occurred:", error));

// In this chain, any errors thrown in doSomethingAsync, doSomethingElseAsync, or doThirdThingAsync are caught by the .catch() at the end.