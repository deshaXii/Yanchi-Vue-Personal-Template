/* ========== HTML File ==========
    Template Name: Yaki - personal Html Template
    Author: Mu_themes
    Version: 1.0
    Copyright 2020
========== Js File ==========

Js FILE INDEX
=============

01- Layout Setup
02- Animation and preloader
03- Clients Slider
04- Testimonials Slider
05- Fullpage Int
05- Typed
05- Portfolio Int
05- PARTICLES ONE TRIGGER

==================================================== */
(function($, window, document, undefined) {

    // Layout Setup
    'use strict';
    $(document).ready(function() {

    // // -Scroll To Section 
    // $('#nav li a').on('click', function (e) {
        
    //     e.preventDefault();
        
    //     $('#nav li a').removeClass('active');
        
    //     $(this).addClass('active');
        
    //     $('.sections').animate({
           
    //         scrollTop: $('.' + $(this).data('link')).offset().top - 300
            
    //     }, 1000);
        
    // });
    
   
    // $('.sections').on('scroll', function () {
       
    //     $('section').each(function () {
           
    //         if ($(this).scrollTop() > $('.sections').offset().top) {
                
    //             $('#nav li a').removeClass('active');
                
    //             var blockID = $(this).attr('class');
                
    //             $('#nav li a[data-link="' + blockID + '"]').addClass('active');
                
    //         }
            
    //     });
        
    // });




    // - Change Navbar Background And Padding
    var top = jQuery('.sections').scrollTop(),
        batas = 20;

    if (top > batas) {

        $('.home #nav').addClass('nav-sticy');
        $('.home .langs-select').addClass('black');
        $('.home .name-box h3').addClass('black');

    } else {

        $('.home #nav').removeClass('nav-sticy');
        $('.home .langs-select').removeClass('black');
        $('.home .name-box h3').removeClass('black');

    }
    $('.sections').on('scroll', function () {

        var top = jQuery('.sections').scrollTop(),

            batas = 20;

        if (top > batas) {

            $('.home #nav').addClass('nav-sticy');
            $('.home .langs-select').addClass('black');
            $('.home .name-box h3').addClass('black');

        } else {

            $('.home #nav').removeClass('nav-sticy');
            $('.home .langs-select').removeClass('black');
            $('.home .name-box h3').removeClass('black');

            }

    });



        // Clients Slider
        if ($('.clients-slider').length) {
            $('.clients-slider').owlCarousel({
                loop: true,
                items: 3,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                nav: false,
                rtl: true,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
        // Project Slider
        if ($('.project-slider').length) {
            $('.project-slider').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                nav: false,
                rtl: true,
                dots: false
            });
        }
        // Testimonials Slider
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                autoplay: true,
                rtl: true,
                autoplayTimeout: 6000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        }

        // Typed
        if ($('body.typed').length) {
            $('.section-hero-content .block .typed').typed({
                strings: ["WEB AND GRAPHIC DESIGN.", "Brands.", "Applications.", "Web Pages."],
                loop: true,
                startDelay: 1000,
                backDelay: 2000
            });
        }


    // portfolio list
    var portPart = $(".row .mix");
    portPart.each(function () {
        $(this).hoverdir();
    });

    $('.portfolio .grid').mixItUp();



    });
})(jQuery, window, document);


