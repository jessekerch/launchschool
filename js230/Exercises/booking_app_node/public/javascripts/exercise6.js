document.addEventListener('DOMContentLoaded', event => {
  async function getBookings() {
    try {
      let response = await fetch('/api/bookings');
      let bookings = await response.json();
      return bookings;
    } catch (error) {
      alert(error);
    }
  }

  async function addBookings(list) {
    let bookings = await getBookings();
    let listItem;
    bookings.forEach(booking => {
      listItem = document.createElement('li');
      listItem.innerText = booking;
      list.appendChild(listItem);
    })
  }

  async function getBookingDetails(date) {
    try {
      let response = await fetch('/api/bookings/' + date, 'DELETE');
      let details = await response.json();
      return details;
    } catch (error) {
      alert(error);
    }
  }

  async function addBookingDetails(date, target) {
    let details = await getBookingDetails(date);

    let list = document.createElement('ul');
    let listItem;
    details.forEach(detail => {
      listItem = document.createElement('li');
      listItem.innerText = detail.join(' | ');
      list.appendChild(listItem);
    })

    target.appendChild(list);
  }

  let list = document.querySelector('ul');
  addBookings(list);

  list.addEventListener('click', event => {
    addBookingDetails(event.target.innerText, event.target);
  })

});

