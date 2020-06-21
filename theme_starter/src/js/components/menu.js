(function($) {
    $( document ).ready(function() {

        const aside = $('.aside-nav');
        const hamburger = $('.mobile-menu-link');
        const close = $('.close-nav i');
        const overlay = $('.page-overlay');

        hamburger.on('click', function(e){
            e.preventDefault();
            aside.addClass('aside-open');
            overlay.addClass('overlay-visible');
        })

        close.on('click', function () {
            aside.removeClass('aside-open');
            overlay.removeClass('overlay-visible');
        })
    });
})( jQuery );