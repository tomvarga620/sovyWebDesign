$(document).ready(function() {
    animate("#studybtn","#study");
    animate("#schoolbtn","#school");
    animate("#jobbtn","#job");
    animate("#questionsbtn","#questions");
    animate("#contactusbtn","#contactus");
});

const animate = (id,toscroll) => {
    $(id).click(function() {
        $('html, body').animate({
            scrollTop: $(toscroll).offset().top
        }, 1000);
    });
}