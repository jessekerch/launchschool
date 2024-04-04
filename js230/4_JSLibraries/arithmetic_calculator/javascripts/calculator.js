$(function() {
  $('#submit').on('click', function(event) {
    event.preventDefault();

    let num1 = Number($('#first-number').val());
    let num2 = Number($('#second-number').val());
    let operator = $('option:selected').text();
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = 0;
        } else if (num2 < 0) {
          num2 = num2 * -1;
          result = num1 / num2;
        } else {
          result = num1 / num2;
        }
        break;
    };

    $('#result').text(result);
  });

});