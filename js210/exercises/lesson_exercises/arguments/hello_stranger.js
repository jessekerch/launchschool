function greetings(nameArray, jobObject) {
  let name = nameArray.join(' ');
  let job = jobObject.title + ' ' + jobObject.occupation;
  console.log(`Hello, ${name}! Nice to have a ${job} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
