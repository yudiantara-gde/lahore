(function($) {
    'use strict';
    
    var testimonial;

    $(document).ready(function() {
        // Initiate Pretty Dropdowns
        $('.form-select').prettyDropdown();

       testimonial = new Swiper('.l-testimonial .row .swiper-container', {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 16, 
            loop: false,
            speed: 1000,
            navigation: {
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            },
            
            //breakpoint
            breakpoints: {
                576: {
                    slidesPerView: 2
                }
            }
        });

        AOS.init();
    });
})(jQuery);