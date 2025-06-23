$(document).ready(function () {
  // Highlight input fields on focus
  $('input, textarea').on('focus', function () {
    $(this).addClass('input-focus');
  }).on('blur', function () {
    $(this).removeClass('input-focus');
  });

  // Form submit
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    // Reset errors and response
    $('.text-danger').text('');
    $('#responseMessage').removeClass('alert-success alert-danger highlight d-block').addClass('d-none').text('');

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let message = $('#message').val().trim();
    let isValid = true;

    if (name === '') {
      $('#nameError').text('Name is required');
      isValid = false;
    }

    if (email === '' || !/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(email)) {
      $('#emailError').text('Valid email is required');
      isValid = false;
    }

    if (message === '') {
      $('#messageError').text('Message is required');
      isValid = false;
    }

    if (isValid) {
      $('#responseMessage')
        .removeClass('d-none')
        .addClass('alert alert-success highlight d-block')
        .text('Thank you, ' + name + '! Your message has been sent.');

      $('#contactForm')[0].reset();
    }
  });
});