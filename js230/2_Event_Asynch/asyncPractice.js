let intervalId;

function startCounting() {
  let n = 0;
  intervalId = setInterval(()=> {
    n++;
    console.log(n);
  }, 1000);
}

function stopCounting() {
  clearInterval(intervalId);
}

startCounting();
setTimeout(stopCounting, 7000);