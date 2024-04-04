function checkField(regexp, val, el) {
  if (regexp.test(val)) {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    formValid = true;
    document.querySelectorAll('.error_message').forEach((messageEl) => {
      if (messageEl.style.display !== 'none') {
        formValid = false;
      }
    });
    if (formValid) {
      document.querySelector('.form_error').style.display = 'none';
      alert('Thank you for signing up!');
      form.reset();
    } else {
      document.querySelector('.form_error').style.display = 'block';
    }
  });

  document.querySelector('form').addEventListener('focus', function(event) {
    document.querySelector('.form_error').style.display = 'none';
    let errorEl = event.target.closest('fieldset').querySelector('p');
    errorEl.style.display = 'none';
  });

  document.querySelector('form').addEventListener('focusout', function(event) {
    document.querySelector('.form_error').style.display = 'none';
    if (event.target.tagName === 'INPUT') {
      let errorEl = event.target.closest('fieldset').querySelector('p');
      let regexp;
      switch (event.target.id) {
        case 'firstName':
          regexp = /[a-z0-9]+/i;
          break;
        case 'lastName':
          regexp = /[a-z0-9]+/i;
          break;
        case 'email':
          regexp = /[a-z0-9]+@[a-z0-9]+.[a-z0-9]+/i;
          break;
        case 'password':
          regexp = /[a-z0-9]{10}/i;
          break;
        case 'phone':
          regexp = /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/i;
          break;
      }
      checkField(regexp, event.target.value, errorEl);
    }
  })  

});
