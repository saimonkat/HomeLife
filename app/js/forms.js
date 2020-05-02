
$(document).ready(function(){
  // checkboxes
  $('.wpcf7-list-item-label').before('<div class="checkmark"></div>');

  // textarea resize
  $('textarea').autoResize();

  // ---------------------------- VALIDATION ---------------------------
  $('.wpcf7 form button#submit').on('click', function(e){
    // required fields
    let requiredFields = $('.wpcf7-validates-as-required');
    requiredFields.each(function(){
      if ($(this).is("span")) {
        // Checkboxes
        if ($(this).find(':checked').length == 0) {
          $(this).addClass('invalid-data');
        }
      } else {
        // Inputs and textareas
        if ($(this).val().length == 0) {
          $(this).addClass('invalid-data');
        }
      }
      $(this).change(function(){
        $(this).removeClass('invalid-data');
      });
    })

    // tel validation
    let tel = $('.wpcf7 form input[type="tel"]');
    if(tel.val().length < 11) {
      tel.addClass('invalid-data');
    }

    // email validation
    let email = $('.wpcf7 form input[type="email"]');
    let pattern = /^[a-z0-9-_.]+@[a-z0-9-.]+\.[a-z]{2,6}$/i;
    if(email.val().length != 0 && email.val().search(pattern) == 0) {
      email.removeClass('invalid-data');
    } else {
      email.addClass('invalid-data');
    }
  });
  let email = $('.wpcf7 form input[type="email"]');
  let pattern = /^[a-z0-9-_.]+@[a-z0-9-.]+\.[a-z]{2,6}$/i;
  email.blur(function(){
    if($(this).val().search(pattern) == 0) {
      $(this).removeClass('invalid-data');
    } else {
      $(this).addClass('invalid-data');
    }
  });

  // Телефон
  $('input[type="tel"]').on('keyup', function(){
    $(this).val(($(this).val()).replace( /[^0123456789+-.]/g, '' ))
  });
  // Дата
  $('input[name="project-end"]').on('keyup', function(){
    $(this).val(($(this).val()).replace( /[^0123456789+-]/g, '' ))
  });
});


// Успешная отправка (очистка формы)
document.addEventListener( 'wpcf7mailsent', function( event ) {
  $(".contacts-form label").removeClass("not-empty");
  $('textarea').height(24);
}, false );