$(document).ready(function () {
    let owlCarousel = $('.owl-carousel');
    if (owlCarousel.length === 0) {
        return;
    }
    owlCarousel.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });
});