async function fetchRequest(endpoint) {
  const response = await fetch('/api/' + endpoint);
  const data = await response.json();
  return data;
}

fetchRequest('staff_members').then(res => console.log(res));
fetchRequest('students').then(res => console.log(res));
fetchRequest('schedules').then(res => console.log(res.filter(obj => obj.student_email !== null)));