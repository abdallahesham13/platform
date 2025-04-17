$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on("click", function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("active");
    $(".navbar-nav").toggleClass("active-nav");
    $("body").toggleClass("overflowNone");
  });

  var swiper = new Swiper(".swiper-indicator", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
  var swiper = new Swiper(".swiper-fields", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
  var swiper = new Swiper(".swiper-statistics", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1080: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  $(".show-pass").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
  });

  $(".show_hide_password .show-pass").on("click", function (event) {
    event.preventDefault();
    if ($(this).siblings("input").attr("type") == "text") {
      $(this).siblings("input").attr("type", "password");
    } else if ($(this).siblings("input").attr("type") == "password") {
      $(this).siblings("input").attr("type", "text");
    }
  });

  const phoneInputField = document.querySelector("#phone");

  if (phoneInputField) {
    const iti = window.intlTelInput(phoneInputField, {
      initialCountry: "sa",
      separateDialCode: true,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    });
  }
});
