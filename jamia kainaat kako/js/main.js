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


//hero on
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const orbs = document.querySelectorAll('.orb');
    const mobileOrbs = document.querySelectorAll('.mobile-orb');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        orbs.forEach(orb => orb.classList.remove('active'));
        mobileOrbs.forEach(orb => orb.classList.remove('active'));
        slides[index].classList.add('active');
        orbs[index].classList.add('active');
        mobileOrbs[index].classList.add('active');
        currentSlide = index;

        // Re-trigger animations
        const parchment = slides[index].querySelector('.parchment');
        const subtitle = parchment.querySelector('.slide-subtitle');
        const title = parchment.querySelector('.slide-title');
        const quote = parchment.querySelector('.slide-quote');
        const btnGroup = parchment.querySelector('.btn-group');
        parchment.style.animation = 'none';
        title.style.animation = 'none';
        quote.style.animation = 'none';
        btnGroup.style.animation = 'none';
        void parchment.offsetWidth; // Trigger reflow
        parchment.style.animation = 'slideInRight 1s ease forwards';
        title.style.animation = 'fadeIn 1.2s ease forwards 0.2s';
        quote.style.animation = 'floatQuote 3s ease infinite';
        btnGroup.style.animation = 'fadeIn 1.6s ease forwards 0.4s';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Desktop/Tablet navigation
    orbs.forEach((orb, index) => {
        orb.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    // Mobile navigation
    mobileOrbs.forEach((orb, index) => {
        orb.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
            mobileNav.classList.remove('active');
        });
    });

    // Mobile toggle
    mobileToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Auto-slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 6000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Pause on hover (desktop/tablet)
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);

    // Touch swipe support (mobile)
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrapper.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderWrapper.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) nextSlide();
        if (touchEndX - touchStartX > 50) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        resetAutoSlide();
    });

    // Initial setup
    showSlide(currentSlide);
    startAutoSlide();
});
 //hero end


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


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.ripple-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600); // Match the ripple animation duration
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-img');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showImage(index));
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 5000);
});




document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.madrasa-video');
    const playBtn = document.querySelector('.play-btn');
    const overlay = document.querySelector('.video-overlay');

    if (!video || !playBtn || !overlay) {
        console.error('Video, play button, or overlay element not found.');
        return;
    }

    playBtn.addEventListener('click', function () {
        if (video.paused) {
            video.play()
                .then(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 300);
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Switch to pause icon
                })
                .catch(error => {
                    console.error('Error playing video:', error);
                });
        } else {
            video.pause();
            overlay.style.display = 'flex';
            overlay.style.opacity = '1';
            playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Switch to play icon
        }
    });

    video.addEventListener('ended', function () {
        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Ensure video starts muted and can play inline on mobile
    video.muted = true;
    video.setAttribute('playsinline', ''); // For iOS compatibility
});





document.addEventListener('DOMContentLoaded', function () {
    const flipCards = document.querySelectorAll('.vmo-flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', function () {
            if (window.innerWidth <= 767) { // Only on mobile
                this.classList.toggle('active');
            }
        });
    });
});



const circles = document.querySelectorAll('.team-circle');
const modal = document.getElementById('teamModal');
const modalTitle = document.querySelector('.modal-title');
const modalSubtitle = document.querySelector('.modal-subtitle');
const modalDesc = document.querySelector('.modal-desc');
const closeModal = document.querySelector('.team-modal-close');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        modalTitle.textContent = circle.dataset.name;
        modalSubtitle.textContent = circle.dataset.role;
        modalDesc.textContent = circle.dataset.desc;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});





})(jQuery);

