$(document).ready(function() {

    $('.hamburger').click(function(e) {
        e.preventDefault();
        $('#items').toggleClass('active');
    });

    $(window).scroll(function() {
        var sticky = $('#topnav'),
          scroll = $(window).scrollTop();
         
        if (scroll >= 40) { 
          $('#logowrap').addClass('logophoto');
          sticky.addClass('fixed'); }
        else {
          $('#logowrap').removeClass('logophoto');
         sticky.removeClass('fixed');
      }
  });

    animate("#homebtn","#slider");
    animate("#studybtn","#study");
    animate("#schoolbtn","#school");
    animate("#jobbtn","#job");
    animate("#questionsbtn","#questions");
    animate("#contactusbtn","#contactus");

    // down menu list
    animate("#homebtn2","#slider");
    animate("#studybtn2","#study");
    animate("#schoolbtn2","#school");
    animate("#jobbtn2","#job");
    animate("#questionsbtn2","#questions");
    animate("#contactusbtn2","#contactus");

    $("#slider > div:gt(0)").hide();

    setInterval(function() { 
    $('#slider > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slider');
    },  5000);

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

    $('#toggleTable').click(function(e) {
        e.preventDefault();
        flip();

        //$("#table-of-study").toggle("slide");

        //$("#table-of-study").slideToggle("slow")
        
        if( $("#table-of-study").first().is(":hidden")){
          //$("#table-of-study").slideDown();
          $("#table-of-study").show(500);
        } else {
          //$("#table-of-study").slideUp();
          $("#table-of-study").hide(500);
        }

    });
 
    const flip = () => {
      $("#toggleTable").toggleClass('flip');
      pause();
    }

    const pause = () => {
      $("#toggleTable").toggleClass('paused');
    }

    formContact.onsubmit = async (e) => {
      e.preventDefault();
  
      let response = await fetch('http://info@akademiasovy.sk', {
        method: 'POST',
        body: new FormData(formContact)
      });
  
      let result = await response.json();
  
      alert(result.message);
    };

});

const animate = (id,toscroll) => {
    $(id).click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(toscroll).offset().top
        }, 1000);
    });
}

const hamburger = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

}
