let id;

function startCounting() {
  let n = 0;
  id = setInterval(() => {
    n += 1;
    console.log(n);
  }, 1000);
}

function stopCounting() {
  clearInterval(id);
}

stopCounting();

