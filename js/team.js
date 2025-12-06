/* ===================================
   Team Page JavaScript - Allied Health Solutions
   Loads and displays team member profiles
   =================================== */

(function() {
    'use strict';
    
    // ===================================
    // Load Team Members
    // ===================================
    
    async function loadTeamMembers() {
        const teamGrid = document.getElementById('team-grid');
        if (!teamGrid) return;
        
        try {
            const response = await fetch('data/team.json');
            const data = await response.json();
            
            teamGrid.innerHTML = data.teamMembers.map(member => `
                <div class="team-member-card">
                    <div class="team-member-image">
                        <img src="${member.image}" 
                             alt="${member.name}" 
                             onerror="this.src='assets/images/placeholder-team.jpg'">
                    </div>
                    <div class="team-member-info">
                        <h3>${member.name}</h3>
                        <p class="team-member-credentials">${member.credentials}</p>
                        <p class="team-member-title">${member.title}</p>
                        <p class="team-member-bio">${member.bio}</p>
                        
                        <div class="team-member-details">
                            <div class="team-member-specialties">
                                <h4>Specialties:</h4>
                                <ul>
                                    ${member.specialties.map(specialty => `<li>${specialty}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="team-member-education">
                                <h4>Education:</h4>
                                <ul>
                                    ${member.education.map(edu => `<li>${edu}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            
        } catch (error) {
            console.error('Error loading team members:', error);
            teamGrid.innerHTML = '<p>Unable to load team information at this time. Please contact us directly.</p>';
        }
    }
    
    // ===================================
    // Initialize on DOM Load
    // ===================================
    
    document.addEventListener('DOMContentLoaded', function() {
        loadTeamMembers();
    });
    
})();
