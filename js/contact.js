/* ===================================
   Contact Page JavaScript - Allied Health Solutions
   Handles contact form submission and location display
   =================================== */

(function() {
    'use strict';
    
    // ===================================
    // Contact Form Submission
    // ===================================
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const btnText = submitButton.querySelector('.btn-text');
            const btnLoading = submitButton.querySelector('.btn-loading');
            const formMessage = document.getElementById('form-message');
            
            // Show loading state
            submitButton.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            formMessage.style.display = 'none';
            
            // Get form data
            const formData = new FormData(this);
            
            try {
                // Submit to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    // Success message
                    formMessage.className = 'form-message success';
                    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                    formMessage.style.display = 'block';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Scroll to message
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    throw new Error('Form submission failed');
                }
                
            } catch (error) {
                // Error message
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Sorry, there was an error sending your message. Please try calling us directly or email support@allied-hs.com';
                formMessage.style.display = 'block';
                
                console.error('Form submission error:', error);
            } finally {
                // Reset button state
                submitButton.disabled = false;
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
            }
        });
    }
    
    // ===================================
    // Load Locations with Maps
    // ===================================
    
    async function loadLocationsWithMaps() {
        const locationsDetail = document.getElementById('locations-detail');
        if (!locationsDetail) return;
        
        try {
            const response = await fetch('data/locations.json');
            const data = await response.json();
            
            locationsDetail.innerHTML = data.locations.map(location => `
                <div class="location-detail-card">
                    <div class="location-map">
                        <iframe
                            src="${location.mapEmbedUrl}"
                            width="100%"
                            height="300"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="${location.name} Location Map">
                        </iframe>
                    </div>
                    <div class="location-detail-info">
                        <h3>${location.name}</h3>
                        <div class="location-detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>${location.address}</p>
                        </div>
                        <div class="location-detail-item">
                            <i class="fas fa-phone"></i>
                            <p><a href="tel:${location.phone}">${location.phone}</a></p>
                        </div>
                        <div class="location-detail-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:${location.email}">${location.email}</a></p>
                        </div>
                        <div class="location-detail-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                ${location.hours.map(hour => `<p>${hour}</p>`).join('')}
                            </div>
                        </div>
                        <a href="https://www.google.com/maps/dir//${encodeURIComponent(location.address)}" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="btn btn-secondary">
                            Get Directions
                        </a>
                    </div>
                </div>
            `).join('');
            
        } catch (error) {
            console.error('Error loading locations:', error);
        }
    }
    
    // ===================================
    // Phone Number Formatting
    // ===================================
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
            }
            
            e.target.value = value;
        });
    }
    
    // ===================================
    // Initialize on DOM Load
    // ===================================
    
    document.addEventListener('DOMContentLoaded', function() {
        loadLocationsWithMaps();
    });
    
})();
