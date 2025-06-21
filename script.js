document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu elements
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    
    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      line.className = 'hamburger-line';
      hamburger.appendChild(line);
    }
    
    // Insert hamburger into header
    const header = document.querySelector('.header');
    header.appendChild(hamburger);
    
    // Get DOM elements
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
      navbar.classList.toggle('active');
      
      // Animate hamburger to X
      hamburgerLines[0].classList.toggle('rotate-down');
      hamburgerLines[1].classList.toggle('hide');
      hamburgerLines[2].classList.toggle('rotate-up');
      
      // Prevent body scroll when menu is open
      document.body.classList.toggle('no-scroll');
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('active');
        hamburgerLines[0].classList.remove('rotate-down');
        hamburgerLines[1].classList.remove('hide');
        hamburgerLines[2].classList.remove('rotate-up');
        document.body.classList.remove('no-scroll');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('active');
        hamburgerLines[0].classList.remove('rotate-down');
        hamburgerLines[1].classList.remove('hide');
        hamburgerLines[2].classList.remove('rotate-up');
        document.body.classList.remove('no-scroll');
      }
    });
  });