/* ===================================
   Testimonials Carousel - Allied Health Solutions
   Handles testimonial rotation and carousel controls
   =================================== */

(function() {
    'use strict';
    
    let testimonials = [];
    let currentIndex = 0;
    let autoplayInterval;
    
    // ===================================
    // Load Testimonials Data
    // ===================================
    
    async function loadTestimonials() {
        const testimonialTrack = document.getElementById('testimonial-track');
        if (!testimonialTrack) return;
        
        try {
            const response = await fetch('data/testimonials.json');
            const data = await response.json();
            
            // Shuffle testimonials for random order
            testimonials = shuffleArray(data.testimonials);
            
            // Create testimonial HTML
            testimonialTrack.innerHTML = testimonials.map((testimonial, index) => `
                <div class="testimonial-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <div class="testimonial-content">
                        <div class="testimonial-rating">
                            ${generateStars(testimonial.rating)}
                        </div>
                        <h3 class="testimonial-callout">${testimonial.title}</h3>
                        <p class="testimonial-text">${testimonial.text}</p>
                        <p class="testimonial-author">${testimonial.author}</p>
                    </div>
                </div>
            `).join('');
            
            // Initialize carousel controls
            initializeCarousel();
            
            // Start autoplay
            startAutoplay();
            
        } catch (error) {
            console.error('Error loading testimonials:', error);
            testimonialTrack.innerHTML = '<p>Unable to load testimonials at this time.</p>';
        }
    }
    
    // ===================================
    // Generate Star Rating HTML
    // ===================================
    
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        let starsHTML = '';
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }
        
        return starsHTML;
    }
    
    // ===================================
    // Shuffle Array (Fisher-Yates Algorithm)
    // ===================================
    
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    // ===================================
    // Show Specific Testimonial
    // ===================================
    
    function showTestimonial(index) {
        const items = document.querySelectorAll('.testimonial-item');
        if (items.length === 0) return;
        
        // Remove active class from all items
        items.forEach(item => item.classList.remove('active'));
        
        // Add active class to current item
        items[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // ===================================
    // Show Next Testimonial
    // ===================================
    
    function showNext() {
        const items = document.querySelectorAll('.testimonial-item');
        if (items.length === 0) return;
        
        const nextIndex = (currentIndex + 1) % items.length;
        showTestimonial(nextIndex);
    }
    
    // ===================================
    // Show Previous Testimonial
    // ===================================
    
    function showPrev() {
        const items = document.querySelectorAll('.testimonial-item');
        if (items.length === 0) return;
        
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        showTestimonial(prevIndex);
    }
    
    // ===================================
    // Initialize Carousel Controls
    // ===================================
    
    function initializeCarousel() {
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                showPrev();
                resetAutoplay();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                showNext();
                resetAutoplay();
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                showPrev();
                resetAutoplay();
            } else if (e.key === 'ArrowRight') {
                showNext();
                resetAutoplay();
            }
        });
        
        // Pause autoplay on hover
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', function() {
                stopAutoplay();
            });
            
            carousel.addEventListener('mouseleave', function() {
                startAutoplay();
            });
        }
        
        // Pause autoplay when page is not visible
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        });
    }
    
    // ===================================
    // Autoplay Functions
    // ===================================
    
    function startAutoplay() {
        stopAutoplay(); // Clear any existing interval
        autoplayInterval = setInterval(function() {
            showNext();
        }, 5000); // Change testimonial every 5 seconds
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // ===================================
    // Touch/Swipe Support for Mobile
    // ===================================
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - show next
            showNext();
            resetAutoplay();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - show previous
            showPrev();
            resetAutoplay();
        }
    }
    
    function initializeTouch() {
        const carousel = document.querySelector('.testimonials-carousel');
        if (!carousel) return;
        
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    // ===================================
    // Initialize on DOM Load
    // ===================================
    
    document.addEventListener('DOMContentLoaded', function() {
        loadTestimonials();
        initializeTouch();
    });
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        stopAutoplay();
    });
    
})();
