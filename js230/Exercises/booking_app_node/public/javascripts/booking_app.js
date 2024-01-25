// function retrieveSchedules() {
//   let result = {};

//   let request = new XMLHttpRequest();
//   request.open("GET", "http://localhost:3000/api/schedules");
//   request.timeout = 5000;
//   request.responseType = 'json';

//   let answer = document.getElementById("answer");

//   request.addEventListener('load', () => {
//     let schedules = request.response;
//     let staffKey;
//     let available = '';

//     if (schedules.length > 0) {
//       for (let i = 0; i < schedules.length; i++) {
//         staffKey = 'staff ' + schedules[i].staff_id
//         result[staffKey] = result[staffKey] || 0;
//         result[staffKey] += 1;
//       }

      
//       for (let staffAndId in result) {
//         available = available.concat(`${staffAndId}: ${result[staffAndId]}`, '\n');
//       }

//       alert(available);
//     } else {
//       alert('There are currently no schedules available for booking');
//     }
//   });

//   request.addEventListener('timeout', () => {
//     alert('It is taking longer than usual, please try again later.');
//   });

//   request.addEventListener('loadend', () => {
//     alert('The request has completed.');
//   });

//   request.send();
// }

// function addStaff() {
//   let request = new XMLHttpRequest();
//   request.open("POST", "http://localhost:3000//api/staff_members");

//   let data = 

//   request.send(data);
  
// }

document.addEventListener('DOMContentLoaded', event => {
  function formDataToJson(formData) {
    let json = {};
    for (let pair of formData.entries()) {
      json[pair[0]] = pair[1];
    }

    return json;
  }

  let form = document.querySelector('form');

  form.addEventListener('submit', event => {
    event.preventDefault();
  
    let formData = new FormData(form);
    let json = JSON.stringify(formDataToJson(formData));
  
    let request = new XMLHttpRequest();
    request.open('POST', form.action);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(json);
  
    request.addEventListener('load', () => {
      if (request.status === 201) {
        let data = JSON.parse(request.response);
        alert(`Staff added: ${data.id}`);
      } else {
        alert(`Fail? Request status: ${request.status}`);
      }
    });
  
  });

});
