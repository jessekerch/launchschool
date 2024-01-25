function makeBold(element, cb) {
  element.style = 'font-weight:bold';
  cb(element);
}

let sectionElement = document.querySelector('section');
makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });

sectionElement.classList.contains('highlight');
// true
sectionElement.style.fontWeight;
// "bold"