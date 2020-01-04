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
});

const animate = (id,toscroll) => {
    $(id).click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(toscroll).offset().top
        }, 1000);
    });
}

