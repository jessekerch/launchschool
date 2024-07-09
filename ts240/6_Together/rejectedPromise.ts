async function getData(url: string): Promise<void> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

