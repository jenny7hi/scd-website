$(document).ready(function(){
    $('.navbar-brand').on('click', function (e) {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 700);
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navbar').height()
        }, 700);
    });
});