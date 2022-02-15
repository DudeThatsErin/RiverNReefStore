$(document).ready(function() {
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
      var fromTop = $(window).scrollTop();
      $("body").toggleClass("down", (fromTop > 10));
      $("nav").toggleClass('mobile-menu', (fromTop > 10));
  });
<<<<<<< HEAD

  $('#overlay-button').click(function(e){
=======
  $("#overlay-button").click(function(e){
>>>>>>> 07790be5ba80829ed058fb3dd20be7c1270ffc4e
    $("nav").toggle();
    e.preventDefault();
  });



  $(window).resize(function(){
    if(window.innerWidth > 768) {
      $("#nav").removeAttr("style");
    }
  });

});