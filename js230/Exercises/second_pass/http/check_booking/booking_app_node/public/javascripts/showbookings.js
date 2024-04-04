class Booking {
  constructor() {
    ( async () => {
      this.bookedSchedules = await this.getData('/api/bookings');
      this.displayBookings(this.bookedSchedules);

      this.availableSchedules = await this.getData('/api/schedules');
      this.displayAvailable(this.availableSchedules);
    })();
  }

  async getData(url) {
    let result;

    try {
      const controller = new AbortController();
      const signal = controller.signal;
      setTimeout(() => controller.abort(), 5000);
  
      let response = await fetch(url, { signal });
      let json = await response.json();
  
      result = json;
    } catch {
      result = 'timeout';
    }

    return result;
  }

  async addBookingDetails(e) {
    let ul = document.createElement('ul');
    e.target.appendChild(ul);
    let response = await fetch(`/api/bookings/${e.target.textContent}`)
    let json = await response.json();

    json.forEach(booking => {
      let elem = document.createElement('li');
      elem.textContent = `${booking[0]} | ${booking[1]} | ${booking[2]}`;
      ul.appendChild(elem);
    });
  }

  displayBookings(arr) {
    arr.forEach(item => {
      let elem = document.createElement('li');
      elem.textContent = item;
      document.querySelector('#bookings').appendChild(elem);
      elem.addEventListener('click', this.addBookingDetails.bind(this));
    });
  }
  
  displayAvailable(data) {
    document.querySelector('#available .loading').remove();
    let scheduleTally = {};

    if (data === 'timeout') {
      let elem = document.createElement('li');
      elem.textContent = 'data request timed out, please try again';
      document.querySelector('#available').appendChild(elem);
    } else {
      data.forEach(obj => {
        scheduleTally[obj.staff_id] = scheduleTally[obj.staff_id] ? scheduleTally[obj.staff_id] : 0;
        scheduleTally[obj.staff_id] += 1;
      });
  
      for (let id in scheduleTally) {
        let elem = document.createElement('li');
        elem.textContent = `staff ${id}: ${scheduleTally[id]} available`;
        document.querySelector('#available').appendChild(elem);
      };
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let app = new Booking();
});