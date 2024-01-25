/*
Booking a schedule

HTML =>
  - H1 title: Schedules
  - p or label?: Please select one schedule:
  - SELECT element (with options to be added by JS later)
  - Email INPUT
  - and SUBMIT button


JS =>

ADD Event listener for DOM Content loaded before all of this:

*/

document.addEventListener('DOMContentLoaded', event => {
  let form = document.querySelector('form');
  let staffMembers = {};
  let studentEmails = [];

  function getStaffMembers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/staff_members');
    xhr.responseType = 'json';
    xhr.addEventListener('load', event => {
      xhr.response.forEach(staff => staffMembers[staff.id] = staff.name);
    });
    xhr.send();
  }

  function setOptions({options}, filters) {
    options.length = 0;
    filters.forEach((value, index) => {
      options[index] = new Option(value.schedule, value.id);
    });
  }

  function addNewStudentForm(studentEmail, bookingSequence) {
    let studentForm = document.createElement('form');
    studentForm.setAttribute('name', 'student');
    studentForm.setAttribute('method', 'post');
    studentForm.setAttribute('action', '/api/students');
    studentForm.classList.add('grey');

    let titleDiv = document.createElement('div');
    let title = document.createElement('h1');
    title.innerText = 'Please add new student information: ';
    titleDiv.appendChild(title);
    studentForm.appendChild(titleDiv);

    let inputsDiv = document.createElement('div');

    let emailDiv = document.createElement('div');
    let emailLabel = document.createElement('label');
    emailLabel.setAttribute('htmlFor', 'email');
    emailLabel.innerText = 'Email address: ';
    let emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('value', studentEmail);
    emailLabel.appendChild(emailInput);
    emailDiv.appendChild(emailLabel);
    inputsDiv.appendChild(emailDiv);

    let nameDiv = document.createElement('div');
    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('htmlFor', 'name');
    nameLabel.innerText = 'Student name: ';
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameLabel.appendChild(nameInput);
    nameLabel.appendChild(nameInput);
    nameDiv.appendChild(nameLabel);
    inputsDiv.appendChild(nameDiv);
    
    let sequenceDiv = document.createElement('div');
    let sequenceLabel = document.createElement('label');
    sequenceLabel.setAttribute('htmlFor', 'booking_sequence');
    sequenceLabel.innerText = 'Booking Sequence: ';
    let sequenceInput = document.createElement('input');
    sequenceInput.setAttribute('type', 'text');
    sequenceInput.setAttribute('name', 'booking_sequence');
    sequenceInput.setAttribute('value', bookingSequence);
    sequenceLabel.appendChild(sequenceInput);
    sequenceDiv.appendChild(sequenceLabel);
    inputsDiv.appendChild(sequenceDiv);
    
    studentForm.appendChild(inputsDiv);

    let submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'submit');
    studentForm.appendChild(submitBtn);

    form.appendChild(studentForm);
  }

  function addScheduleOptions() {
    let select = document.querySelector('select');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/schedules');
    xhr.responseType = 'json';
    let schedules = [];
    xhr.addEventListener('load', event => {
      xhr.response.forEach((schedule, index) => {
        if (!schedule.student_email) {
          schedules.push({id: [schedule.id], schedule: `${schedule.id}: ${staffMembers[schedule.staff_id]} | ${schedule.date}, ${schedule.time}`});
        }
      });

      setOptions(select, schedules);
    });
    xhr.send();
  }

  function getStudentEmails() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/students');
    xhr.responseType = 'json';
    xhr.addEventListener('load', event => {
      studentEmails = xhr.response.map(student => ({email: student.email}));
    });
    xhr.send();
  }

  getStaffMembers();
  addScheduleOptions();
  getStudentEmails();

  
  form.addEventListener('submit', event => {
    event.preventDefault();
    
    let formData = new FormData(form);
    let bookingInfo = { id: formData.get('schedule'), student_email: formData.get('email') };
    
    let xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.send(JSON.stringify(bookingInfo));
    xhr.addEventListener('load', event => {
      if (xhr.status === 204) {
        alert('Schedule booked');
      } else if (xhr.status === 404) {
        alert(xhr.responseText);
        let bookingSequence = xhr.responseText.match(/[0-9]{6}/);
        addNewStudentForm(bookingInfo.student_email, bookingSequence);

        let studentForm = document.forms.student;
        studentForm.addEventListener('submit', event => {
          event.preventDefault();
          let formData2 = new FormData(studentForm);
          let studentInfo = { email: formData2.get('email'), name: formData2.get('name'), booking_sequence: formData2.get('booking_sequence')};
          
          let xhr2 = new XMLHttpRequest();
          xhr2.open(studentForm.method, studentForm.action);
          xhr2.setRequestHeader('Content-Type', 'application/json');
          xhr2.send(JSON.stringify(studentInfo));
          xhr2.addEventListener('load', event => {
            if (xhr2.status === 201) {
              alert(`Success: ${xhr2.responseText}`);
              studentForm.reset();
              // formData.set('student_email', formData2.get('email'));
              form.dispatchEvent(new Event('submit', { cancelable: true }));
            } else {
              alert(`Fail: ${xhr2.responseText}`);
            }
          });
          
        })
      }
    })

  })
})

/*
BOOK SCHEDULE
Books a staff member schedule
'POST', '/api/bookings'
NEED PARAMETERS:
id: Number
student_email: String
- open XHR to POST address for new XMLHTTPRequest
- set request header to application/json
- change data to JSON stringify?? yes I think maybe not sure
- add 'load' listener in case of > 400 status, alert Failure
  - for success do I get a booking sequence? Or generate random 6 digit number??
- send json to XHR 

CHECK if student email exists
  - make studentEmails array
    - iterate through students
    - add each student.email to an array
  - if studentEmails array DOES NOT INCLUDE input email field
    - need to register new student email
    - => register new studentw ith input email field

ADD a new form to the HTML
create container:
  create H1: "Please provide new student details"
  create: input for email as "Email: "
  create: input for name as "Name: "
  create: input for bookingSequence as "Booking Sequence: "
    - limit this to 6 digit number if possible
  APPEND each to the container
  APPEND container to the first form already on the page

ADD STUDENT to DB
Adds a student to the database
'POST', '/api/students'
NEED PARAMETERS:
email: String 	
name: String 	
booking_sequence: Number 	
success response:
HTTP/1.1 201 CREATED
'Successfully added student to the database.''




*/