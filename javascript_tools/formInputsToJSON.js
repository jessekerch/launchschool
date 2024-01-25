let form = document.querySelector("form");

function formInputsToJson() {
  const json = [];

  for (let i = 0; i < scheduleCount; i += 1) {
      let schedule = {};
      schedule.staff_id = form[`staff_${String(i + 1)}`].value;
      schedule.date = form[`date_${String(i + 1)}`].value;
      schedule.time = form[`time_${String(i + 1)}`].value;
      json.push(schedule);
  }

  return {schedules: json};
}

form.addEventListener('submit', event => {
  event.preventDefault();
  let data = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);

  xhr.addEventListener('load', event => {
    alert(xhr.response);
  })
});
