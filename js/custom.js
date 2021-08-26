$(document).ready(function () {




    /*======= ask questions start ==========*/

    var border1 = $('.border1');
    var border2 = $('.border2');
    var border3 = $('.border3');
    var border4 = $('.border4');

    border1.on('click', function () {
        border1.addClass('add-border');
        border2.removeClass('add-border');
        border3.removeClass('add-border');
        border4.removeClass('add-border');
    });

    border2.on('click', function () {
        border2.addClass('add-border');
        border1.removeClass('add-border');
        border3.removeClass('add-border');
        border4.removeClass('add-border');
    });

    border3.on('click', function () {
        border3.addClass('add-border');
        border1.removeClass('add-border');
        border2.removeClass('add-border');
        border4.removeClass('add-border');
    });

    $('.border4').on('click', function () {
        border4.addClass('add-border');
        border1.removeClass('add-border');
        border2.removeClass('add-border');
        border3.removeClass('add-border');
    });
    /*======= ask questions end ==========*/
    /*======= count down js end ==========*/
    ;
    $('.counts').syotimer({
        year: 2022,
        month: 5,
        day: 9,
        hour: 20,
        minute: 30
    });
    /*======= count down js end ==========*/
    /*======= ask questions nice scrolling js start ==========*/
    $(".nicescroll-box").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });

    /*=======ask questions  nice scrolling js end ==========*/
    //back to top button start;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 50) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
        // nav fix
        if (scrolling > 50) {
            $('.navbar').addClass('nav-fix');
        } else {
            $('.navbar').removeClass('nav-fix');
        }
    });

    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });
    //back to top button end
});