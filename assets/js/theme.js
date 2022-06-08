$(document).ready(function () {
  navbarScroll(); 
  contentSlide();
  backToTop() ;
});

function navbarScroll() {
  $(".navbar-scroll-menu .nav-link").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
      });

    } // End if
  });

  $('body').scrollspy({target: "#navbarScroll",offset: 50});
}

function contentSlide() {
  $('.content-slide').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

function backToTop() {
  var backToTop = $('#back-to-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      backToTop.addClass('show');
    } else {
      backToTop.removeClass('show');
    }
  });
  backToTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
}