/* Implement two functions:
one for cancelling schedules
and the other for cancelling of bookings

The functions take a scheduleId and a bookingId as arguments respectively
*/

async function cancelSchedule(scheduleId) {
  try {
    let response = await fetch('/api/schedules/' + scheduleId, 'DELETE');
    let json = await response.json();
    alert(response.status)
  } catch(e) {
    console.error(e);
  }

}

async function cancelBooking(bookingId) {
  try {
    let response = await fetch('/api/bookings/' + bookingId, 'PUT');
    let json = await response.json();
    alert(response.status)
  } catch(e) {
    console.error(e);
  }
}

