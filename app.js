$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
    var typed = new Typed('.element',{
      strings:["Real Estate?", "Legal Adviser?","Investors?"],
      smartBackspace:true,
      typeSpeed:100,
      backSpeed:100,
      loop:true,
      loopCount:Infinity,
      startDelay:1000
  });
  

  
  });
  