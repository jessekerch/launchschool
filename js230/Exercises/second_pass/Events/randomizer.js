function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...cbs) {
  let functions = {};
  cbs.forEach((cb) => {
    let delay = Math.floor(Math.random() * 10);
    functions[delay] = cb;
  })
  
  let timer = 0;
  let intervalId = setInterval(() => {
    timer++;
    console.log(timer);
    if (functions[timer]) functions[timer]();
    if (timer >= 10) clearInterval(intervalId);
  }, 1000);
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6