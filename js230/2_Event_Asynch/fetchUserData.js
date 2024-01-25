function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

fetchUserData()
  .then((success) => console.log(success))
  .catch((error) => console.error(error.error))
  .finally(() => console.log("Fetching complete"));
