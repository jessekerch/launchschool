function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {

    return !parentElement.addEventListener(eventType, event => {
      let selectorElements = [...parentElement.querySelectorAll(selector)];
      if (parentElement.contains(event.target) && selectorElements.includes(event.target)) {
        callback(event);
      }
    });
  }
}

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

// delegateEvent(element1, 'p', 'click', callback);
// delegateEvent(element2, 'p', 'click', callback);
// delegateEvent(element2, 'h1', 'click', callback);
// delegateEvent(element3, 'h1', 'click', callback);
// delegateEvent(element3, 'aside p', 'click', callback);

const newP = document.createElement('P');
const newContent = document.createTextNode('New Paragraph');
newP.appendChild(newContent);

element2.appendChild(newP);

delegateEvent(element2, 'p', 'click', callback);