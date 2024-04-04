const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

const filters = ['make', 'model', 'price', 'year'];

function resetInputs(selected) {
  let selectElems = document.querySelectorAll('select, label');
  for (let elem of selectElems) {
    console.log(elem.tagName);
    elem.remove();
  }
  renderInputs(selected);

  document.querySelectorAll('select').forEach(select => {
    if (selected[select.id]) {
      select.value = selected[select.id];
    } else {
      select.value = 'All';
    }
  })
}

function renderInputs(selected) {
  let collection = [...cars];
  Object.keys(selected).forEach(key => {
    if (selected[key]){
      collection = collection.filter(car => String(car[key]) === String(selected[key]));
    }
  })

  filters.forEach(filter => {
    let input = {
      name: filter,
      text: filter[0].toUpperCase() + filter.slice(1),
      options: ['All'],
    };
    
    collection.forEach(car => {
      if (!input.options.includes(car[filter])) {
        input.options.push(car[filter]);
      }
    })

    let inputTemplate = Handlebars.compile(document.querySelector('#input').innerHTML);
    Handlebars.registerPartial('option', document.querySelector('#option').innerHTML);
    document.querySelector("form").insertAdjacentHTML('afterbegin', inputTemplate(input));
  });
}

function renderCars(array) {
  let carTemplate = Handlebars.compile(document.querySelector('#car').innerHTML);
  let carDiv = document.querySelector('.cars');
  carDiv.replaceChildren();

  array.forEach(obj => {
    let posting = carTemplate(obj);
    carDiv.insertAdjacentHTML('beforeend', posting);
  })
}

document.addEventListener('DOMContentLoaded', function(event) {
  let selected = {};
  resetInputs(selected);
  let collection = [...cars];
  renderCars(collection);

  document.querySelector('form').addEventListener('change', function(event) {
    if (event.target.value === 'All') {
      selected[event.target.id] = null;
    } else {
      selected[event.target.id] = String(event.target.value);
    }
    resetInputs(selected);
    renderCars(collection);
  })

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(document.querySelector('form'));
    collection = [...cars];
    for (let [key, value] of formData) {
      if (value !== 'All') {
        collection = collection.filter(car => String(car[key]) === String(value));
      }
    }
    renderCars(collection);
  })

  document.querySelector('.reset').addEventListener('click', function(event) {
    selected = {};
    resetInputs(selected);
    collection = [...cars];
    renderCars(collection);
  })


});
