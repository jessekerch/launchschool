document.querySelector('html').addEventListener('click', (event) => {
  if (event.target !== document.querySelector('#container')) {
    document.querySelector('#container').style = 'display: none';
  }
});