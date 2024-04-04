function downloadFilePromise(file) {
  return new Promise((resolve) => {
    console.log(`downloading ${file}...`);
    setTimeout(() => {
      console.log(`${file} download complete!`);
    }, 1500);
  });
}

let downloadSoup = downloadFilePromise('soup recipes');
// downloadSoup.then((result) => console.log('no result?'));
