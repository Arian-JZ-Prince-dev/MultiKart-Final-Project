//banner
$(function(){
    $('.ban_bg_main_inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:".ban_bg_mainnext",
      prevArrow:'.ban_bg_mainprev',
      autoplay: true,
  autoplaySpeed: 1000,
  });
    
  })
//about
$('.about_main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
        autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
//about

// fashion

$('.fashion_main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// fashion

// insta

$('.insta_main').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// insta

// b_2_p
$(".b_2_t").click(function(){$("html,body").animate({scrollTop:0,},2000);});
// b_2_p

// color_switcher
// $(".switch").click(function(){
//   $(".color_switcher").toggleClass("switch_btn")
// })





// color_switcher










//
//
//
//
//
//
$(function(){
    
})
