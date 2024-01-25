function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let maxTime = 2 * callbacks.length;
  let randomDelay;
  let timer = 0;
  let intervalID = setInterval(() => {
    timer++;
    console.log('time elapsed: ' + timer + 'sec')
    if (timer === maxTime) clearInterval(intervalID);
  }, 1000);

  callbacks.forEach(cb => {
    randomDelay = Math.random() * maxTime * 1000;
    setTimeout(cb, randomDelay);
  })
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