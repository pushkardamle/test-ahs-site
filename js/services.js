/* ===================================
   Services Page JavaScript - Allied Health Solutions
   Loads and displays service details
   =================================== */

(function() {
    'use strict';
    
    // ===================================
    // Load All Services
    // ===================================
    
    async function loadServices() {
        const servicesGrid = document.getElementById('services-grid');
        if (!servicesGrid) return;
        
        try {
            const response = await fetch('data/services.json');
            const data = await response.json();
            
            // Display all services with full details
            servicesGrid.innerHTML = data.conditions.map(service => `
                <div class="service-card-full">
                    <div class="service-icon-large">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3>${service.name}</h3>
                    <p class="service-description">${service.fullDescription}</p>
                    <div class="service-conditions">
                        <h4>Common Conditions:</h4>
                        <p>${service.shortDescription}</p>
                    </div>
                    <div class="service-treatments">
                        <h4>Treatment Approaches:</h4>
                        <ul>
                            ${service.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
            
        } catch (error) {
            console.error('Error loading services:', error);
            servicesGrid.innerHTML = '<p>Unable to load services at this time. Please contact us directly for information.</p>';
        }
    }
    
    // ===================================
    // Initialize on DOM Load
    // ===================================
    
    document.addEventListener('DOMContentLoaded', function() {
        loadServices();
    });
    
})();
