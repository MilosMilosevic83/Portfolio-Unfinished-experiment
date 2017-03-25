$(".toBottom1").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills-scroll1").offset().top-155
    }, 1000);

});
$(".toBottom2").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills-scroll2").offset().top-155
    }, 1000);

});
$(".toBottom3").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills-scroll3").offset().top-155
    }, 1000);

});
$(".toBottom4").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills-scroll4").offset().top-155
    }, 1000);

});

$(document).ready(function () {
        $(".toBottom1").click(function(event) {
            event.preventDefault();
            $(".navbar-collapse").collapse('hide');        
            });
        $(".toBottom2").click(function(event) {
            event.preventDefault();
            $(".navbar-collapse").collapse('hide');        
            });
        $(".toBottom3").click(function(event) {
            event.preventDefault();
            $(".navbar-collapse").collapse('hide');        
            });
        $(".toBottom4").click(function(event) {
            event.preventDefault();
            $(".navbar-collapse").collapse('hide');        
            });
        
        });



