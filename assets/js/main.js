$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 120) {
      $("body").addClass("condensed-nav");
    } else {
      $("body").removeClass("condensed-nav");
    }
  });
});
