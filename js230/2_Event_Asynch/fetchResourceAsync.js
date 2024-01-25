async function fetchResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to load resource");
  } finally {
    console.log("Resource fetch attempt made");
  }
}

// async function fetchResource(url) {
//   try {
//     let response = await fetch(url);
//     let data = response.json;
//     console.log(data);
//   } catch (error) {
//     console.error("Failed to load resource");
//   } finally {
//     console.log("Resource fetch attempt made");
//   }
// }

// Example usage:
fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
// On error, logs "Failed to load resource", then "Resource fetch attempt made"







function loadMultipleResources(urls) {
  let fetchPromises = urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch(() => "Failed to fetch")
  );
  return Promise.allSettled(fetchPromises);
}

loadMultipleResources([
  "https://jsonplaceholder.typicode.com/todos/1",
  "invalidUrl",
]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fetched data:", result.value);
    } else {
      console.error(result.reason);
    }
  });
});

// Fetched data: {userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// Fetched data: Failed to fetch
