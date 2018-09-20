$(document).ready(function(){

    $('#header').css('max-height', $('#header-pic').height());
    $( window ).resize(function() {
        $('#header').css('max-height', $('#header-pic').height());
    });

    $('.navbar-brand').on('click', function (e) {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 700);
    });

    $navbarHeight = $('.navbar').height();
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $navbarHeight
        }, 700);
    });
});