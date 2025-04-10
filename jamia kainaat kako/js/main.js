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



    
    const text = " Jamia Kainat Kako";
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


// addmission
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Create particles every 300ms
setInterval(createParticle, 300);

// Button click animation and form reveal

const quickForm = document.getElementById('quickForm');

admissionBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1.1) translateY(-5px)';
        quickForm.style.display = 'block';
        admissionBtn.style.display = 'none';
    }, 200);
});

// Form submission simulation
function submitQuickForm(event) {
    event.preventDefault();
    const form = quickForm.querySelectorAll('input');
    let isValid = true;

    form.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = '#4ecdc4';
        }
    });

    if (isValid) {
        quickForm.style.opacity = '0';
        setTimeout(() => {
            alert('Quick registration successful! Proceed to full form.');
            quickForm.style.display = 'none';
            admissionBtn.style.display = 'block';
            admissionBtn.style.transform = 'scale(1)';
            quickForm.style.opacity = '1';
            form.forEach(input => input.value = '');
        }, 500);
    }
}



// Admission Button JavaScript

const admissionBtn = document.getElementById('admissionBtn');
const admissionSection = document.getElementById('admissionSection');

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = x ? `${x}px` : `${Math.random() * 100}%`;
    particle.style.top = y ? `${y}px` : `${Math.random() * 100}%`;
    particle.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
    particlesContainer.appendChild(particle);

    setTimeout(() => particle.remove(), 4000);
}

// Interactive particle burst on button hover
admissionBtn.addEventListener('mousemove', (e) => {
    const rect = admissionBtn.getBoundingClientRect();
    createParticle(e.clientX - rect.left, e.clientY - rect.top);
});

// Continuous particle generation
setInterval(() => createParticle(), 200);

// Button click animation
admissionBtn.addEventListener('click', function(e) {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1.1) translateY(-8px)';
    }, 150);
});

// Section entrance animation
window.addEventListener('load', () => {
    admissionSection.style.opacity = '0';
    admissionSection.style.transform = 'translateY(50px)';
    setTimeout(() => {
        admissionSection.style.transition = 'all 1s ease-out';
        admissionSection.style.opacity = '1';
        admissionSection.style.transform = 'translateY(0)';
    }, 100);
});
 // Admission Button JavaScript

//* vesion mission objective start
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-back',
        once: true
    });

    // Card interaction
    const cards = document.querySelectorAll('.vmo-alt-card');
    cards.forEach(card => {
        const expandBtn = card.querySelector('.expand-btn');
        const collapseBtn = card.querySelector('.collapse-btn');

        // Click handler for expand/collapse
        expandBtn.addEventListener('click', () => {
            card.classList.add('active');
        });

        collapseBtn.addEventListener('click', () => {
            card.classList.remove('active');
        });

        // Touch support for mobile
        card.addEventListener('touchstart', (e) => {
            e.preventDefault();
            card.classList.toggle('active');
        });

        // Mouse hover glow effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.vmo-alt-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const speed = 0.02;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (window.innerHeight - rect.top) * speed;
                card.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
});
//* vision mission objective end 

 // Enquiry Section JavaScript

// Enquiry Section JavaScript
const particlesContainer = document.getElementById('particles');
const logoParticlesContainer = document.getElementById('logoParticles');
const enquirySection = document.getElementById('enquirySection');
const enquiryForm = document.getElementById('enquiryForm');
const schoolLogo = document.getElementById('schoolLogo');
const submitBtn = document.getElementById('submitBtn');

function createParticle(container, x, y, isLogo = false) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * (isLogo ? 6 : 10) + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = x ? `${x}px` : `${Math.random() * 100}%`;
    particle.style.top = y ? `${y}px` : `${Math.random() * 100}%`;
    particle.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
    container.appendChild(particle);

    setTimeout(() => particle.remove(), isLogo ? 2500 : 4000);
}

// Continuous particle generation
setInterval(() => createParticle(particlesContainer), 200);
setInterval(() => createParticle(logoParticlesContainer), 400);

// Section entrance animation
window.addEventListener('load', () => {
    enquirySection.style.opacity = '0';
    enquirySection.style.transform = 'scale(0.95)';
    setTimeout(() => {
        enquirySection.style.transition = 'all 1.2s ease-out';
        enquirySection.style.opacity = '1';
        enquirySection.style.transform = 'scale(1)';
    }, 100);
});

// Form field animation delay
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
formInputs.forEach((input, index) => {
    input.style.animationDelay = `${index * 0.1}s`;
});

// Form submission animation
enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.boxShadow = '0 0 20px #ff1493';
            input.style.transform = 'scale(1.05)';
            setTimeout(() => {
                input.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                input.style.transform = 'scale(1)';
            }, 400);
        }
    });

    if (isValid) {
        this.style.opacity = '0';
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            alert('Enquiry Sent Successfully! We’re on it!');
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
            inputs.forEach(input => input.value = '');
        }, 600);
    }
});

// Logo hover effect with particle burst
schoolLogo.addEventListener('mousemove', (e) => {
    const rect = schoolLogo.getBoundingClientRect();
    createParticle(logoParticlesContainer, e.clientX - rect.left, e.clientY - rect.top, true);
});

// Button hover and click effects
submitBtn.addEventListener('mousemove', (e) => {
    const rect = submitBtn.getBoundingClientRect();
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.left = `${e.clientX - rect.left}px`;
    particle.style.top = `${e.clientY - rect.top}px`;
    submitBtn.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
});

submitBtn.addEventListener('click', () => {
    submitBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        submitBtn.style.transform = 'scale(1.05) translateY(-3px)';
    }, 200);
});
  


// program start
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-back',
        once: false // Allow repeated animations on scroll
    });

    // Program item interaction
    const items = document.querySelectorAll('.program-item');
    items.forEach(item => {
        // Click/tap toggle
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 767) {
                item.classList.toggle('active');
                e.preventDefault();
            }
        });

        // Desktop hover
        if (window.innerWidth > 767) {
            item.addEventListener('mouseenter', () => {
                item.classList.add('active');
                const fill = item.querySelector('.progress-fill');
                fill.style.width = '0%'; // Reset for animation
                setTimeout(() => {
                    fill.style.width = fill.dataset.width || fill.style.width; // Animate back
                }, 10);
            });
            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
            });
        }

        // Glow effect
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--x', `${x}px`);
            item.style.setProperty('--y', `${y}px`);
        });
    });

    // Carousel-like animation on scroll
    window.addEventListener('scroll', () => {
        const items = document.querySelectorAll('.program-item');
        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const rotate = (rect.top - window.innerHeight) * -0.05;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.style.transform = `rotateY(${rotate}deg) scale(1.05)`;
            } else {
                item.style.transform = 'rotateY(0deg) scale(1)';
            }
        });
    });
});
// program end



// notice board start
document.addEventListener('DOMContentLoaded', () => {
    const noticePods = document.querySelectorAll('.madrasa-notice-pod');

    // Position pods in a circle
    noticePods.forEach(pod => {
        const angle = pod.dataset.orbitAngle;
        pod.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-225px) rotate(-${angle}deg)`;
    });

    // Click and touch effect
    noticePods.forEach(pod => {
        const handleSelection = (e) => {
            e.preventDefault(); // Prevent link navigation for demo

            // Reset all pods
            noticePods.forEach(p => {
                p.classList.remove('selected');
                p.classList.remove('other-active');
            });

            // Mark clicked pod as selected
            pod.classList.add('selected');

            // Mark all other pods as other-active
            noticePods.forEach(otherPod => {
                if (otherPod !== pod) {
                    otherPod.classList.add('other-active');
                }
            });

            // Spark effect
            const spark = document.createElement('div');
            spark.className = 'madrasa-notice-spark';
            const rect = pod.getBoundingClientRect();
            const x = e.type === 'click' ? e.clientX : e.touches[0].clientX;
            const y = e.type === 'click' ? e.clientY : e.touches[0].clientY;
            spark.style.left = `${x - rect.left - 4}px`;
            spark.style.top = `${y - rect.top - 4}px`;
            pod.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        };

        pod.addEventListener('click', handleSelection);
        pod.addEventListener('touchstart', handleSelection);
    });

    // Hover sparkle effect
    noticePods.forEach(pod => {
        pod.addEventListener('mousemove', (e) => {
            const spark = document.createElement('div');
            spark.className = 'madrasa-notice-spark';
            const rect = pod.getBoundingClientRect();
            spark.style.left = `${e.clientX - rect.left - 4}px`;
            spark.style.top = `${e.clientY - rect.top - 4}px`;
            pod.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        });

        // Optional: Add hover out effect to reset transform if needed
        pod.addEventListener('mouseleave', () => {
            if (!pod.classList.contains('selected') && !pod.classList.contains('other-active')) {
                const angle = pod.dataset.orbitAngle;
                pod.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-225px) rotate(-${angle}deg)`;
            }
        });
    });

    // Ensure smooth animation by forcing a reflow after positioning
    requestAnimationFrame(() => {
        const orbit = document.querySelector('.madrasa-notice-orbit');
        orbit.style.animationPlayState = 'running';
    });
});
//notice board end
//* event start

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
        once: true
    });

    // Interactive hover effects
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.event-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const speed = 0.02;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (window.innerHeight - rect.top) * speed;
                card.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
});

//*event end 

//* director massage 
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
        once: true
    });

    // Interactive hover effect for image
    const imgContainer = document.querySelector('.director-img-container');
    imgContainer.addEventListener('mousemove', (e) => {
        const rect = imgContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        imgContainer.style.setProperty('--x', `${x}px`);
        imgContainer.style.setProperty('--y', `${y}px`);
    });

    // Typewriter effect for message text
    const textElement = document.querySelector('.message-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1000);

    // Parallax effect
    window.addEventListener('scroll', () => {
        const container = document.querySelector('.director-message');
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const scrollPos = (window.innerHeight - rect.top) * 0.03;
            imgContainer.style.transform = `translateY(${scrollPos}px)`;
        }
    });
});
//* director massage


})(jQuery);

