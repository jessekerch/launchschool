async function fetchUserProfile(userId) {
  try {
    let profile = await fetch('https://jsonplaceholder.typicode.com/users/' + String(userId))
    .then((response) => response.json());
    console.log('Profile is: ', profile);
  } catch (err) {
    console.error('Error fetching: ' + err);
  }
  try {
    let posts = await fetch('https://jsonplaceholder.typicode.com/users/' + String(userId) + '/posts')
    .then((response) => response.json());
    console.log('Posts are: ', posts);
  } catch (err) {
    console.error('Error fetching: ' + err);
  }
  try {
    let comments = await fetch('https://jsonplaceholder.typicode.com/users/' + String(userId) + '/comments')
    .then((response) => response.json());
    console.log('Comments are: ', comments);
  } catch (err) {
    console.error('Error fetching: ' + err);
  }
}

fetchUserProfile(1);
