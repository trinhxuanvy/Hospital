$(document).ready(function () {
    $(function () {
        let position = $('.header-top').position();
        let top = position.top;
        $(window).scroll(function () {
            let wind = $(this).scrollTop();
            if (wind > top) {
                $('.header-top').addClass('header-fixed');
            }
            else {
                $('.header-top').removeClass('header-fixed');
            }
        });
    })

    /*$(function () {
        let item = document.querySelectorAll('.user-container');
        $dragging = null;

        $(item).on('mousemove', function (e) {
            if($dragging) {
                $dragging.offset({
                    top: e.pageY,
                    left: e.pageX
                });
                
            }
        });
        $(item).on('mousedown', function (e) {
            $dragging = $(e.target);
        });
        $(item).on('mouseup', function () {
            $dragging = null;
        });
    })*/
});