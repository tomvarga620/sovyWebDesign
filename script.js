$(document).ready(function() {
    animate("#studybtn","#study");
    animate("#schoolbtn","#school");
    animate("#jobbtn","#job");
    animate("#questionsbtn","#questions");
    animate("#contactusbtn","#contactus");

    $("#slider > div:gt(0)").hide();

    setInterval(function() { 
    $('#slider > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slider');
    },  3000);

    $('.toggle').click(function(e) {
        e.preventDefault();
    
      let $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(400);
      } else {
          $this.parent().parent().find('li .inner').removeClass('show');
          $this.parent().parent().find('li .inner').slideUp(500);
          $this.next().toggleClass('show');
          $this.next().slideToggle(500);
      }
  });

});

const animate = (id,toscroll) => {
    $(id).click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(toscroll).offset().top
        }, 1000);
    });
}

