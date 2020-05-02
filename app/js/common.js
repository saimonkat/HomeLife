var winWidth = $(window).width();
var winHeight = $(window).height();
var isDesktop = false;
var fullScreenPage = false;
var animationNow = false;

$(document).ready(function () {
  if (winWidth >= 1200) {isDesktop = true;}
  else isDesktop = false;
  $(window).resize(function(){
      winWidth = $(window).width();
      winHeight = $(window).height();
      pageNavOverflow();
      if (winWidth >= 1200) {
        isDesktop = true;
        // Close mobile menu
        $(".hamburger, .h-logo").removeClass("active");
        $("body").removeClass("overflow");
        $(".m-panel").removeClass("active").hide();
        $(".m-dropdown").removeClass("active");
        $(".m-dropdown .dropdown-menu").hide();
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

  // Выпадающее меню в шапке и в навигации по клику
  $("body").on("click", ".h-lang .h-dropdown, .m-dropdown, .page-nav__dropdown", function() {
    $(this).toggleClass("active");
    $(this).children(".dropdown-menu").stop().slideToggle();
  })
  $("body").on("click", ".page-nav__toggler", function(){
    $(".page-nav__toggler").toggleClass('active');
    $(".page-nav__toggler").siblings(".page-nav__nav").stop().slideToggle();
  })
  // Закрытие dropdown при клике вне меню
  $(document).mouseup(function(e) {
    let dropdown = $(".h-dropdown, .page-nav__dropdown");
    dropdown.each(function(){
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0) {
        $(this).removeClass("active");
        $(this).children(".dropdown-menu").stop().slideUp(); 
      }
    })
    let pageNav = $(".page-nav"),
        pageNavToggler = $(".page-nav__toggler"),
        pageNavMobile = pageNavToggler.hasClass("active");
    if (!pageNav.is(e.target) && pageNav.has(e.target).length === 0 && pageNavMobile) {
      pageNavToggler.removeClass("active");
      $(".page-nav__nav").stop().slideUp(); 
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
    if (fullScreenPage) $("header").addClass("gold").css("position", "absolute");
  })
  $(document).mouseup(function(e) {
    if ($(".modal.active").length) {
      if (!$(".modal").is(e.target) && 
          $(".modal").has(e.target).length === 0 &&
          !$(".modal-btn").is(e.target) && 
          $(".modal-btn").has(e.target).length === 0) {
        $(".modal, .modal-bg").removeClass("active").fadeOut();
        $("body").removeClass("overflow");
        if (fullScreenPage) $("header").removeClass("gold");
      }
    }
  })

  // Кнопка скролла
  $(".scroll-btn").click(function() {
    let scroll = $(window).height();
    if ($(".event-screen").length) {
      scroll = $(".event-screen").outerHeight();;
    }
    $("html, body").animate({scrollTop: scroll}, 700)
  });

  // wow-js
  new WOW().init();

  // Кнопка поиска
  $(".search-btn").click(function(e){
    if (!$(".search-input").val().length) {
      e.preventDefault();
      $(".search-btn").addClass("swing");
      setTimeout(function(){
        $(".search-btn").removeClass("swing");
      }, 600)
    }
  })
  
  $("input, textarea").on('keyup', function() {
    if($(this).val() != "") 
      $(this).siblings("label").addClass("valid");
    else
      $(this).siblings("label").removeClass("valid");
  });

  // Owl carousel
  $(".owl-carousel").owlCarousel();

  // Fancybox
  $("[data-fancybox]").fancybox({
    'loop': true,
    afterShow: function() {}
  });
  $('.video').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
        media : {}
    },   
  });

  // IE fixes
  objectFitImages();

  // ----------------------------------------------- END OF $(document).ready ----------------------------------------------------
});