document.querySelectorAll(".tabs button").forEach(button => {
  button.addEventListener("click", function() {
    document.querySelector(".fancy-banner-seven .bg-wrapper").style.backgroundImage = this.getAttribute("data-bg");
  });
});

(function($) {
      //-------------- Click event to scroll to top
      $(window).on('scroll', function (){
        if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
      });
      $('.scroll-top').on('click', function() {
        $('html, body').animate({scrollTop : 0});
        return false;
      });

        // ------------------------ Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.sticky-menu'),
          scroll = $(window).scrollTop();
          if (scroll >= 180) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });  
});