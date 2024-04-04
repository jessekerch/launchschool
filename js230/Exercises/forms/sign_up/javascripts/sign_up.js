document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form')
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
      
      let formData = new FormData(form);
      formData.set('credit_card', formData.getAll('credit_card').join(''));
      
      let serializedData = new URLSearchParams(formData);
      document.querySelector('div.serialized > p').innerText = serializedData;

      alert('Thank you for signing up!');
      document.querySelector('.form_error').innerText = '';
      form.reset();
    } else {
      document.querySelector('.form_error').innerText = 'Form cannot be submitted until errors are corrected';
    }
  });

  document.querySelectorAll('input').forEach(el => {
    el.addEventListener('keypress', function(event) {
      const regexp = new RegExp(event.target.dataset.limitInput);
      if (!regexp.test(event.key)) event.preventDefault();
    });

    el.addEventListener('keyup', function(event) {
      if (event.target.value.length === 4 && event.target.nextElementSibling) event.target.nextElementSibling.focus();
      if (event.key === 'Backspace'
        && event.target.value.length === 0
        && event.target.previousElementSibling) {
          event.target.previousElementSibling.focus();
        }
    });

    el.addEventListener('focus', function(event) {
      const errorElem = event.target.closest('fieldset').querySelector('.error_message');
      errorElem.innerText = '';
    });

    el.addEventListener('blur', function(event) {
      const errorElem = event.target.closest('fieldset').querySelector('.error_message');
      const errorMessage = event.target.dataset.msg;
      errorElem.innerText = event.target.checkValidity() ? '' : errorMessage;
    });
  })
});
