$(document).ready(function () {
    var position = $('.header-top').position();
    var top = position.top;
    console.log(top)
    $(window).scroll(function () { 
        var wind = $(this).scrollTop();
        if (wind > top) {
            $('.header-top').addClass('header-fixed');
        }
        else {
            $('.header-top').removeClass('header-fixed');
        }
    });
});