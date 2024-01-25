const divRed = document.querySelector('div#red');
const divBlue = document.querySelector('div#blue');
const divOrange = document.querySelector('div#orange');
const divGreen = document.querySelector('div#green');

function track(cb) {
  return function(event) {
    tracker.add(event);
    cb(event);
  }
};

const tracker = (() => {
  let events = [];

  return {
    list() {
      return [...events];
    },
    elements() {
      return events.map(({target}) => target);
    },
    add(event) {
      if (!events.includes(event) && event instanceof Event) {
        events.push(event);
      }
    },
    clear() {
      events = [];
      return events.length;
    },
  }
})();

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));

setTimeout(() => {
  alert(tracker.list().length);
  // = 4
  alert(tracker.elements());
  // // = [div#blue, div#red, div#orange, div#green]
  alert(tracker.elements()[0] === document.querySelector('#blue'));
  // // = true
  alert(tracker.elements()[3] === document.querySelector('#green'));
  // // = true
  alert(tracker.list()[0]);
  // // = click { target: div#blue, buttons: 0, clientX: 195, clientY: 190, layerX: 195, layerY: 190 }
  // // // The event listed in `tracker` can differ by browser (Chrome - PointerEvent, Firefox - click)
  alert(tracker.clear());
  // // = 0
  alert(tracker.list());
  // // = []
  alert(tracker.list()[0] = 'abc');
  alert(tracker.list().length);
  // // = 0
}, 5000)