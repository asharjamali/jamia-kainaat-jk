(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    


    document.querySelectorAll('.vmo-flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });



    
    const text = " Jamia Kainat";
    let index = 0;
    const speed = 150; // Typing speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    window.onload = function() {
        document.getElementById("typewriter").textContent = ""; // Clear initial text
        typeWriter();
    };




    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    document.addEventListener('DOMContentLoaded', () => {
        const bookCards = document.querySelectorAll('.team-book-card');
        bookCards.forEach(card => {
            card.addEventListener('click', () => {
                if (window.innerWidth <= 767) {
                    card.classList.toggle('active');
                }
            });
        });
    });

})(jQuery);

