$(document).ready(function () {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
      }
    });
    window.addEventListener('scroll', () => {
      console.log(document.documentElement.scrollTop, document.body.scrollTop)
      if (document.documentElement.scrollTop >= 250) {
        $('.mouse').fadeOut(500);
      } else {
        $('.mouse').fadeIn(500);
      }
    });
  $('.phonelist').on('click', () => {
    $('.popup').toggleClass('active')
  })
  $('.main , .services , .projects, .contact , .logo , .list , .poplink').on('click', () => {
    $('.popup').removeClass('active')
  })
});
  