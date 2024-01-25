let userProfile, userPosts, userComments;
const pieces = [userProfile, userPosts, userComments];
const pieceNames = ['userProfile', 'userPosts', 'userComments'];

const URLs = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/1/posts",
  "https://jsonplaceholder.typicode.com/users/1/comments"
]

function fetchUserProfile() {
  let url;

  pieces.forEach(async function(piece, index) {
    url = URLs[index];
    try {
      piece = await fetch(url)
        .then((response) => response.json());
      console.error(pieceNames[index] + ": " + piece);
    } catch (error) {
      console.error("Error fetching " + pieceNames[index]);
    }
  });
}

fetchUserProfile();
