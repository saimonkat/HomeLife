var winWidth = $(window).width();
var winHeight = $(window).height();
var isDesktop = false;

$(document).ready(function () {
  if (winWidth >= 1200) {isDesktop = true;}
  else isDesktop = false;
  $(window).resize(function(){
      winWidth = $(window).width();
      winHeight = $(window).height();
      if (winWidth >= 1200) {
        isDesktop = true;
        // Close mobile menu
        $(".hamburger, .h-logo").removeClass("active");
        $("body").removeClass("overflow");
      }
      else isDesktop = false;
  });

  // Hamburger
  $(".hamburger").click(function(e){
    $(".hamburger, .h-logo").toggleClass("active");
    $(".m-panel").toggleClass("active").stop().slideToggle();
    $(".m-dropdown").removeClass("active");
    $(".m-dropdown .dropdown-menu").stop().slideUp();
    $('body,html').stop().animate({scrollTop: 0}, 300);
    if ($(".m-panel.active").length) 
      $("body").addClass("overflow");
    else 
      $("body").removeClass("overflow");
  });

  // Закрытие dropdown при клике вне меню
  $(document).mouseup(function(e) {
    if (!$("header").is(e.target) && $("header").has(e.target).length === 0) {
      $("header").removeClass("active");
    }
  })

  // Modal
  $(".modal-btn").click(function(e){
    e.preventDefault();
    let id = $(this).attr("href");
    $(id).addClass("active").fadeIn();
    $(".modal-bg").fadeIn();
    $(".hamburger, .h-logo").removeClass("active");
    $("body").addClass("overflow");
    $(".m-panel").removeClass("active").stop().slideUp();
    $(".m-dropdown").removeClass("active");
    $(".m-dropdown .dropdown-menu").stop().slideUp();
    $('body,html').stop().animate({scrollTop: 0}, 300);
  })
  $(document).mouseup(function(e) {
    if ($(".modal.active").length) {
      if (!$(".modal").is(e.target) && 
          $(".modal").has(e.target).length === 0 &&
          !$(".modal-btn").is(e.target) && 
          $(".modal-btn").has(e.target).length === 0) {
        $(".modal, .modal-bg").removeClass("active").fadeOut();
        $("body").removeClass("overflow");
      }
    }
  })

  // wow-js
  new WOW().init();


  // Owl carousel
  $(".owl-carousel").owlCarousel();

  // Fancybox
  $("[data-fancybox]").fancybox({
    'loop': true,
  });
  $('.video').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
        media : {}
    },   
  });

  // ----------------------------------------------- END OF $(document).ready ----------------------------------------------------
});