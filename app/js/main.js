$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true,
    });

    $('.header__top-btn').on('click', function(){
        $('.header__top-items').slideToggle();
    });
    
});

function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();