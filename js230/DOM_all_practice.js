document.getElementById('primary_heading').setAttribute('class', 'heading');

document.getElementById('list').setAttribute('class', 'bulleted');

document.getElementById('toggle').onclick = e => {
  e.preventDefault();
  let notice = document.getElementById('notice');
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else if (notice.getAttribute('class') === 'visible') {
    notice.setAttribute('class', 'hidden');
  }
};

document.getElementById('notice').onclick = e => {
  e.preventDefault();
  e.currentTarget.setAttribute('class', 'hidden');
}

document.getElementById('multiplication').textContent = String(13 * 9);

document.body.setAttribute('id', 'styled');
