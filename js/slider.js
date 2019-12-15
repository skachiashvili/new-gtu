$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $("#slideshow > div:first")
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo("#slideshow");
}, 5000);
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
});
});