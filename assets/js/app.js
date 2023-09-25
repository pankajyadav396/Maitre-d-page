$('.slick').slick({
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
