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
  $(".icon1").hover(
    () => { $('.email-popup').css('display', 'block') },
    () => { $('.email-popup').css('display', 'none') }
  )
  $(".icon2").hover(
    () => { $('.whats-popup').css('display', 'block') },
    () => { $('.whats-popup').css('display', 'none') }
  )
});
  