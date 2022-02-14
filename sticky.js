$(document).ready(function() {
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
      var fromTop = $(window).scrollTop();
      $("body").toggleClass("down", (fromTop > 10));
      $("nav").toggleClass('mobile-menu', (fromTop > 10));
  });
  $(".overlay-button").click(function(){
    $("nav").toggle();
  });

  $(window).resize(function(){
    if(window.innerWidth > 768) {
      $("#nav").removeAttr("style");
    }
  });

});