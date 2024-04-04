$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let itemName = $('#name').val();
    let quantity = $('#quantity').val();
    quantity = quantity || '1';
    if (itemName && quantity) {
      $('#grocery-list').append("<li>" + quantity + " " + itemName + "</li>");
      $('form').trigger('reset');
    }
  });
});