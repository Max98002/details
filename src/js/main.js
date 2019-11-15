$(document).ready(function () {
  // mask Input
  $('#userphone').mask("+38 (999) 99-999-99", { placeholder: "X" });
  $('#phone').mask("+38 (999) 99-999-99", { placeholder: "X" });
  // mask Input

  // validate form price
  $('#form__price').validate({
    rules: {
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      phone: {
        required: "Укажите телефон"
      },
      email: {
        required: "Заполните поле Email",
        email: "Введите корректный email"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('#brif-form')[0].reset();
    //       thanksmodal.addClass('thanksmodal_active');
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  // validate form price

  // validate form consultation
  $('#consultation__form').validate({
    rules: {
      userphone: {
        required: true,
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      userphone: {
        required: "Укажите телефон"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('#brif-form')[0].reset();
    //       thanksmodal.addClass('thanksmodal_active');
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  // validate form consultation

  // validate form consultation
  $('#modal__form').validate({
    rules: {
      userphone: {
        required: true,
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      userphone: {
        required: "Укажите телефон"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('#brif-form')[0].reset();
    //       thanksmodal.addClass('thanksmodal_active');
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  // validate form consultation

  // modal active
  $('.header-info__button').on('click', function () {
    $('.modal').addClass('modal-active');
  });
  $('#close').on('click', function () {
    $('.modal').removeClass('modal-active');
  });
  // modal active

  // load mep
  $(document).ready(function () {
    var document = $('.storage');
    var documentTop = document.offset().top;

    $(window).bind('scroll', function () {
      var windowTop = $(this).scrollTop();
      if (windowTop > documentTop) {
        $('#map').html(
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.169451510563!2d30.542587615957984!3d50.43794429614661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa7cf00dbdd%3A0xed786c94764736c2!2z0YPQuy4g0JzQvtGB0LrQvtCy0YHQutCw0Y8sINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1573814477574!5m2!1sru!2sua" width="100%" height="375" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
        )
        $(window).unbind('scroll')
      }
    });

  })
  // load mep

  // arrowUp
  $(window).scroll(function () {
    if ($(this).scrollTop() > 2000) {
      $('.arrowUp').fadeIn();
    } else {
      $('.arrowUp').fadeOut();
    }
  });

  $('.button-up').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  // arrowUp
});