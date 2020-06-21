(function($) {
    $( document ).ready(function() {

        $('.rooms_main__slider').slick({
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows:true,
            prevArrow: '.room_main__prev',
            nextArrow: '.room_main__next',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows:true,
                        prevArrow: '.room_main__prev',
                        nextArrow: '.room_main__next'
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                        arrows:true,
                        prevArrow: '.room_main__prev',
                        nextArrow: '.room_main__next'
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                        arrows:true,
                        prevArrow: '.room_main__prev',
                        nextArrow: '.room_main__next'
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });


    });
})( jQuery );