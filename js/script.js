$(document).ready(function () {
  // slider initialization

  $(function () {
    new Glide(".glide", {
      type: "slider",
      startAt: 0,
      perView: 4.5,
      gap: 20,
      breakpoints: {
        1440: { perView: 3 },
        992: { perView: 2.5 },
        768: { perView: 2 },
        400: { perView: 1 },
      },
    }).mount();
  });

  // lightbox options

  lightbox.option({
    resizeDuration: 200,
    disableScrolling: true,
  });

  // toggle menu on mobile

  function toggleMenu() {
    $(".links").toggleClass("show");
    $(".nav-toggle").toggleClass("active");
    $("body").toggleClass("no-scroll");

    const expanded = $(".links").hasClass("show");
    $(".nav-toggle").attr("aria-expanded", expanded);
  }

  $(".nav-toggle").on("click", toggleMenu);

  $(".links a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var offset = $(target).offset().top;

    var headerHeight = $(".nav").outerHeight();
    $("html, body").animate({ scrollTop: offset - (headerHeight + 100) }, 300);

    $(".links").removeClass("show");
    $(".nav-toggle").removeClass("active");
    $("body").removeClass("no-scroll");
  });

  // form validation

  $("#contactForm").submit(function (e) {
    e.preventDefault();
    let isValid = true;
    console.log("test");

    $(".error").text("").addClass("disabled");

    const name = $("#name").val().trim();
    if (name === "") {
      $("#nameError").text("Name is required.").removeClass("disabled");
      isValid = false;
    }

    const email = $("#email").val().trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email === "") {
      $("#emailError").text("Email is required.").removeClass("disabled");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#emailError").text("Enter a valid email.").removeClass("disabled");
      isValid = false;
    }

    const description = $("#description").val().trim();
    if (description === "") {
      $("#descriptionError")
        .text("Description is required.")
        .removeClass("disabled");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

  // back to top animation

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $(document).height() * 0.2) {
      $(".back-to-top").addClass("visible");
    } else {
      $(".back-to-top").removeClass("visible");
    }
  });

  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});
