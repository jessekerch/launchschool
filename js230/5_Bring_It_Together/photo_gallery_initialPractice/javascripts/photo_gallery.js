$(function() {
  $('a').on('click', function(event) {
    event.preventDefault();
    let id = $(this).closest('a').attr('target-id');
    $('.main-frame img').slideUp(300);
    $('.main-frame #' + id).delay(310).slideDown();
  })
})