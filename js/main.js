/* ===================================
   Main JavaScript - Allied Health Solutions
   Handles navigation, mobile menu, and data loading
   =================================== */

(function() {
    'use strict';
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle active class on menu
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (!isExpanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            }
        });
    }
    
    // ===================================
    // Load Conditions Data
    // ===================================
    
    async function loadConditions() {
        const conditionsGrid = document.getElementById('conditions-grid');
        if (!conditionsGrid) return;
        
        try {
            const response = await fetch('data/services.json');
            const data = await response.json();
            
            // Get only the featured conditions for home page (first 6)
            const featuredConditions = data.conditions.slice(0, 6);
            
            conditionsGrid.innerHTML = featuredConditions.map(condition => `
                <div class="condition-card">
                    <div class="condition-icon">
                        <i class="${condition.icon}"></i>
                    </div>
                    <h3>${condition.name}</h3>
                    <p>${condition.shortDescription}</p>
                </div>
            `).join('');
            
        } catch (error) {
            console.error('Error loading conditions:', error);
            conditionsGrid.innerHTML = '<p>Unable to load conditions at this time.</p>';
        }
    }
    
    // ===================================
    // Load Locations Data
    // ===================================
    
    async function loadLocations() {
        const locationsGrid = document.getElementById('locations-grid');
        const footerSterling = document.getElementById('footer-location-sterling');
        const footerFallsChurch = document.getElementById('footer-location-falls-church');
        
        try {
            const response = await fetch('data/locations.json');
            const data = await response.json();
            
            // Load locations in main grid
            if (locationsGrid) {
                locationsGrid.innerHTML = data.locations.map(location => `
                    <div class="location-card">
                        <div class="location-image">
                            <img src="${location.image}" alt="${location.name}" loading="lazy">
                        </div>
                        <div class="location-content">
                            <h3>${location.name}</h3>
                            <div class="location-info">
                                <div class="location-detail">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>${location.address}</p>
                                </div>
                                <div class="location-detail">
                                    <i class="fas fa-phone"></i>
                                    <p><a href="tel:${location.phone}">${location.phone}</a></p>
                                </div>
                                <div class="location-detail">
                                    <i class="fas fa-envelope"></i>
                                    <p><a href="mailto:${location.email}">${location.email}</a></p>
                                </div>
                                <div class="location-detail">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        ${location.hours.map(hour => `<p>${hour}</p>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            
            // Load Sterling location in footer
            if (footerSterling) {
                const sterling = data.locations.find(loc => loc.id === 'sterling');
                if (sterling) {
                    footerSterling.innerHTML = `
                        <h4 class="footer-heading">${sterling.name}</h4>
                        <p class="footer-text">${sterling.address}</p>
                        <div class="footer-contact-item">
                            <i class="fas fa-phone"></i>
                            <p><a href="tel:${sterling.phone}">${sterling.phone}</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:${sterling.email}">${sterling.email}</a></p>
                        </div>
                        <p class="footer-text">${sterling.hours.join('<br>')}</p>
                    `;
                }
            }
            
            // Load Falls Church location in footer
            if (footerFallsChurch) {
                const fallsChurch = data.locations.find(loc => loc.id === 'falls-church');
                if (fallsChurch) {
                    footerFallsChurch.innerHTML = `
                        <h4 class="footer-heading">${fallsChurch.name}</h4>
                        <p class="footer-text">${fallsChurch.address}</p>
                        <div class="footer-contact-item">
                            <i class="fas fa-phone"></i>
                            <p><a href="tel:${fallsChurch.phone}">${fallsChurch.phone}</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:${fallsChurch.email}">${fallsChurch.email}</a></p>
                        </div>
                        <p class="footer-text">${fallsChurch.hours.join('<br>')}</p>
                    `;
                }
            }
            
        } catch (error) {
            console.error('Error loading locations:', error);
        }
    }
    
    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ===================================
    // Lazy Load Images
    // ===================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===================================
    // Initialize on DOM Load
    // ===================================
    
    document.addEventListener('DOMContentLoaded', function() {
        loadConditions();
        loadLocations();
    });
    
})();
