$(function() {
  let team = {
    'Kevin': { 
      fullName: 'Kevin Wang',
      image: 'images/img_kevin.jpg',
      story: 'Kevin\'s story is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    'Louis': {
      fullName: 'Louis Burton',
      image: 'images/img_louis.jpg',
      story: 'Louis\'s story is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    'Kasper': {
      fullName: 'Kasper Salto',
      image: 'images/img_kasper.jpg',
      story: 'Kasper\'s story is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    'Chris': {
      fullName: 'Chris Lee',
      image: 'images/img_chris.jpg',
      story: 'Chris\'s story is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  };

  $('#team ul li').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    let member = $(this).text().trim();
    $('#modal #member-image').attr({
      'src': team[member].image,
      'alt': team[member].fullName,
    });
    $('#modal #member-image').attr('alt', team[member].fullName);
    $('#overlay').show();
    $('#modal').show(600);
    setTimeout(() => {
      $('#modal p').text(team[member].story);
      $('#modal h3').text(team[member].fullName);
    }, 650);
  })

  $(document).on('click', function(event) {
    if ($(this) !== $('#modal')) {
      $('#overlay').hide();
      $('#modal').hide();
    }
  });

  $('#modal .close a').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#modal').hide();
  });

});

